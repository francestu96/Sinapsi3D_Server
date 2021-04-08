const express = require('express');
const cart_service = require('../services/cart_service');
const root_controller = require('./root_controller');
const router = express.Router();

router.get("/:userId", async (req, res, next) => {
    cart_service.cart_get(req.params.userId, (err, dres) => {
        if (err != null) {
            console.log(err)
            root_controller.req_fail(res, err.message)
        } else {
            res.send(dres)
        }
        next();
    });
});

router.post("/", async (req, res, next) => {
    cart_service.cart_add(req.body.productId, req.body.quantity, (err, dres) => {
        if (err != null) {
            console.log(err)
            root_controller.req_fail(res)
        } else {
            res.send(dres)
        }
        next();
    });
});

router.delete("/", async (_, res, next) => {
    cart_service.cart_delete((err, dres) => {
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