const express = require('express');
const order_service = require('../services/order_service');
const root_controller = require('./root_controller');
const router = express.Router();

router.post("/", async (req, res, next) => {
    order_service.order_create(req.body, (err, dres) => {
        if (err != null) {
            console.log(err)
            root_controller.req_fail(res)
        } else {
            res.send(dres)
        }
        next();
    });
});

module.exports = router;