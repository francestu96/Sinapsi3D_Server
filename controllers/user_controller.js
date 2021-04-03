const express = require('express');
const router = express.Router();
const root_controller = require('./root_controller');
const user_service = require('../services/user_service');

router.get("/:userId", async (req, res, next) => {
    user_service.user_get(req.params.userId, (err, dres) => {
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
    let payload = {
        email: req.body.email,
        password: req.body.password
    }
    user_service.user_create(payload, (err, dres) => {
        if (err != null) {
            console.log(err);
            root_controller.req_fail(res, err.message);
        } else {
            res.send(dres);
        }
        next();
    });
});

module.exports = router;
