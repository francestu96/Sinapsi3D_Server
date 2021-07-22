const express = require('express');
const cart_service = require('../services/cart_service');
const root_controller = require('./root_controller');
const router = express.Router();

router.get("/", async (req, res, next) => {
    cart_service.cart_get(req.userId, (err, dres) => {
        if (err != null) {
            root_controller.req_fail(res, err.message);
        } else {
            res.send(dres);
        }
        next();
    });
});

router.post("/", async (req, res, next) => {
    cart_service.cart_add_update(req.userId, req.body.productId, req.body.quantity, (err, dres) => {
        if (err != null) {
            root_controller.req_fail(res, err.message);
        } else {
            res.send(dres);
        }
        next();
    });
});

router.delete("/:productId", async (req, res, next) => {
    cart_service.cart_remove(req.userId, req.params.productId, (err, dres) => {
        if (err != null) {
            root_controller.req_fail(res, err.message);
        } else {
            res.send(dres);
        }
        next();
    });
});

router.delete("/", async (req, res, next) => {
    cart_service.cart_delete(req.userId, (err) => {
        if (err != null) {
            root_controller.req_fail(res, err.message);
        } else {
            res.send();
        }
        next();
    });
});

module.exports = router;