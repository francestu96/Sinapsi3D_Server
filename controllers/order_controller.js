const express = require('express');
const order_service = require('../services/order_service');
const root_controller = require('./root_controller');
const mail_service = require('../services/mail_service');
const router = express.Router();

router.get("/:userId", async (req, res, next) => {
    order_service.get({ user_id: req.params.userId }, (err, dres) => {
        if (err != null) {
            console.log(err)
            root_controller.req_fail(res)
        } else {
            res.send(dres)
        }
        next();
    });
});

router.post("/", async (req, res, next) => {
    order_service.create(req.body, (err, dres) => {
        if (err != null) {
            console.log(err)
            root_controller.req_fail(res)
            next();
        } else {
            mail_service.send_order(req.body.payer.email_address)
                .then(_ => {
                    res.send(dres);
                    next();
                })
                .catch(err => {
                    root_controller.req_fail(res, err.message);
                    next();
                });
        }
    });
});

module.exports = router;