const express = require('express');
const router = express.Router();
const root_controller = require('./root_controller');
const user_service = require('../services/user_service');

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const role_const = require("../models/consts/role_const");

router.post("/signin", async (req, res, next) => {
    if (!req.body.password){
        root_controller.req_unauth_403(res, { message: "Credenziali non valide" });
    }
    else{
        user_service.user_get_by_email(req.body.email, (err, user) => {
            if (err != null) {
                console.log(err);
                root_controller.req_unauth_403(res, err.message);
            } else {
                var passwordIsValid = bcrypt.compareSync(
                    req.body.password,
                    user.password
                );
                
                if (!passwordIsValid) {
                    root_controller.req_unauth_403(res, { message: "Credenziali non valide" });
                }
                else{
                    var token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
                        expiresIn: 86400 // 24 hours
                    });

                    res.send({
                        id: user._id,
                        email: user.email,
                        access_token: token
                    });
                }
            }
            next();
        });
    }    
});

router.post("/signup", async (req, res, next) => {
    const regex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[\]:;<>,.\?\/~_\+-=|]).{8,}$/;

    if (!req.body.password){
        root_controller.req_fail(res, { message: "Inserire una password" });
    }
    else{
        if(!regex.test(req.body.password)){
            root_controller.req_fail(res, { message: "Password non valida" });
        }
        else{
            let payload = {
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password),
                address: req.body.address,
                roles: [role_const.USER]
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
        }
    }
});

module.exports = router;
