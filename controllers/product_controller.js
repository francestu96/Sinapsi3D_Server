const fs = require('fs');
const express = require('express');
const sharp = require('sharp');
const { v4: uuidv4 } = require('uuid');
var path = require('path');
const router = express.Router();
const upload_middleware = require('./middlewares/upload_middleware');
const auth_middleware = require("./middlewares/auth_middleware");
const root_controller = require('./root_controller');
const product_service = require('../services/product_service');

router.get("/", async (req, res, next) => {
    let filter = req.query.filter ? { $or: [{ name: new RegExp(req.query.filter, 'i') }, { description: new RegExp(req.query.filter, 'i') }] } : {}
    // let filter = req.query.filter ? { $or: [{$expr: { name: req.query.filter }}, {$expr: { description: req.query.filter }}] } : {}

    let sort = {};
    if (req.query.sort_field) {
        if (req.query.sort_order) {
            sort[req.query.sort_field] = req.query.sort_order;
        } else {
            sort[req.query.sort_field] = 1;
        }
    }

    let page = {}
    page.page_size = req.query.page_size ? req.query.page_size : 100;
    page.page_number = req.query.page_number ? req.query.page_number - 1 : 0;

    product_service.product_list(filter, sort, page, (err, dres) => {
        if (err != null) {
            root_controller.req_fail(res, err.message);
        } else {
            res.send(dres);
        }
        next();
    });
});

router.get("/:productId", async (req, res, next) => {
    product_service.product_get(req.params.productId, (err, product) => {
        if (err != null) {
            root_controller.req_fail(res, err.message);
        } else {
            res.send(product);
        }
        next();
    });
});

router.post("/", [auth_middleware.verify_token, auth_middleware.is_admin, upload_middleware.array('images', 5)], async (req, res, next) => {
    if (!req.files || !req.files.length > 0) {
        root_controller.req_fail_upload_img(res);
    }
    else {
        createUploadDirs(res);

        var image_names = [];
        for (var i = 0; i < req.files.length; i++){
            image_names.push(uuidv4());
        }

        let payload = {
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            images: image_names
        }
        product_service.product_create(payload, async (err, dres) => {
            if (err != null) {
                root_controller.req_fail(res, err.message);
            } else {
                for (var i = 0; i < req.files.length; i++){
                    await sharp(req.files[i].buffer).toFile(path.join(process.env.DIR_UPLOAD, "original", image_names[i]));
                    await sharp(req.files[i].buffer)
                        .resize({ fit: sharp.fit.contain, width: 300, height: 300, background: "white" })                        
                        .jpeg({ quality: 80 })
                        .toFile(path.join(process.env.DIR_UPLOAD, "thumb", image_names[i]));
                }
                res.send(dres);
            }
            next();
        });
    }
});

router.delete("/:productId", [auth_middleware.verify_token, auth_middleware.is_admin], async (req, res, next) => {
    product_service.product_get(req.params.productId, (err, product) => {
        if (err != null) {
            root_controller.req_fail(res, err.message);
            next();
        }
        else {
            product_service.product_remove(req.params.productId, (err) => {
                if (err != null) {
                    root_controller.req_fail(res, err.message);
                } else {
                    res.send();
                }
                next();
            });
        }
    });
});

function createUploadDirs(res) {
    if (!fs.existsSync(path.join(process.env.DIR_UPLOAD, "original"))){
        try{
            fs.mkdirSync(path.join(process.env.DIR_UPLOAD, "original"), { recursive: true });
        }catch (err){
            root_controller.req_fail(res, err.message);
        }
    }

    if (!fs.existsSync(path.join(process.env.DIR_UPLOAD, "thumb"))){
        try{
            fs.mkdirSync(path.join(process.env.DIR_UPLOAD, "thumb"), { recursive: true });
        }catch (err){
            root_controller.req_fail(res, err.message);
        }
    }
}

module.exports = router;
