const fs = require('fs');
const express = require('express');
const sharp = require('sharp');
const { v4: uuidv4 } = require('uuid');
var path = require('path');
const router = express.Router();
const upload_middleware = require('./middlewares/upload_middleware');
const auth_middleware = require("./middlewares/auth_middleware");
const resize_image = require('../helper/resize_image');
const root_controller = require('./root_controller');
const product_service = require('../services/product_service');

router.get("/", async (req, res, next) => {
    let filter = req.query.filter ? JSON.parse(Buffer.from(req.query.filter, 'base64')) : {}

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
            console.log(err)
            root_controller.req_fail(res, err.message)
        } else {
            res.send(dres)
        }
        next();
    });
});

router.get("/:productId", async (req, res, next) => {
    product_service.product_get(req.params.productId, (err, product) => {
        if (err != null) {
            console.log(err)
            root_controller.req_fail(res, err.message)
        } else {
            res.send(product)
        }
        next();
    });
});

router.post("/", [auth_middleware.verify_token, upload_middleware.array('images', 5)], async (req, res, next) => {
    if (!req.files) {
        root_controller.req_fail_upload_img(res);
    }
    else {
        if (!fs.existsSync(process.env.DIR_UPLOAD)){
            try{
                fs.mkdirSync(process.env.DIR_UPLOAD);
            }catch (err){
                root_controller.req_fail(res, err.message);
            }
        }

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
                console.log(err);
                root_controller.req_fail(res, err.message);
            } else {
                for (var i = 0; i < req.files.length; i++){
                    await sharp(req.files[i].buffer).resize(300, 300).toFile(path.join(process.env.DIR_UPLOAD, image_names[i]));
                }
                res.send(dres);
            }
            next();
        });
    }
});

module.exports = router;
