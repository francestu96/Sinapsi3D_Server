const fs = require('fs');
const express = require('express');
const router = express.Router();
const upload = require('./middlewares/middleware_upload');
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

router.post("/", upload.single('image'), async (req, res, next) => {
    if (!req.file) {
        root_controller.req_fail_upload_img(res);
    }
    else {
        let avatar_path = await resize_image.resize(req, create_product_dir());

        let payload = {
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            image: avatar_path
        }
        product_service.product_create(payload, (err, dres) => {
            if (err != null) {
                console.log(err);
                root_controller.req_fail(res, err.message);
            } else {
                res.send(dres);
            }
            next();
        });
    }
});

const create_product_dir = () =>{
    let date = new Date();
    let year = date.getFullYear();
    let mounth = date.getMonth();
    let day = date.getDay();

    let dir = process.env.DIR_UPLOAD;
    if (!fs.existsSync(dir)){
        try{
            fs.mkdirSync(dir);
        }catch (ex){

        }
    }

    dir = dir+`\/product_image`
    if (!fs.existsSync(dir)){
        try{
            fs.mkdirSync(dir);
        }catch (ex){

        }
    }
    dir = dir+`\/`+`${year}`
    if (!fs.existsSync(dir)){
        try{
            fs.mkdirSync(dir);
        }catch (ex){

        }
    }
    dir = dir+`\/`+`${mounth}`
    if (!fs.existsSync(dir)){
        try{
            fs.mkdirSync(dir);
        }catch (ex){

        }
    }
    dir = dir+`\/`+`${day}`
    if (!fs.existsSync(dir)){
        try{
            fs.mkdirSync(dir);
        }catch (ex){

        }
    }
    return dir+`\/`
}


module.exports = router;
