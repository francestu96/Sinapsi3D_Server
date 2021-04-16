const express = require('express');
const router = express.Router();
const root_controller = require('./root_controller');
const user_service = require('../services/user_service');
const mail_service = require('../services/mail_service');
const email_check_service = require('../services/email_check_service');

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const role_const = require("../models/consts/role_const");

router.post("/signin", async (req, res, next) => {
    if (!req.body.password){
        root_controller.req_unauth_403(res, "Credenziali non valide");
    }
    else{
        user_service.user_get_by_email(req.body.email, (err, user) => {
            if (err != null) {
                root_controller.req_unauth_403(res, err.message);
            } else {
                var passwordIsValid = bcrypt.compareSync(
                    req.body.password,
                    user.password
                );
                
                if (!passwordIsValid) {
                    root_controller.req_unauth_403(res, "Credenziali non valide");
                }
                else{
                    var access_token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);

                    res.send({
                        token_type:"Bearer",
                        access_token: access_token,
                        id_token: jwt.sign({ id: user.id, name: user.name, email: user.email, roles: user.roles }, process.env.JWT_SECRET)
                    });
                }
            }
            next();
        });
    }    
});

router.post("/signup", async (req, res, next) => {
    const regex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;    
    var valid_email_error = await email_check_service.check_validity(req.body.email);

    if(valid_email_error) {
        root_controller.req_fail(res, valid_email_error);
    }
    else if (!req.body.password){
        root_controller.req_fail(res, "Inserire una password");
    }
    else{
        if(!regex.test(req.body.password)){
            root_controller.req_fail(res, "Password non valida");
        }
        else{
            let payload = {
                name: req.body.name,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password),
                address: req.body.address,
                roles: [role_const.USER]
            }
            user_service.user_create(payload, (err, user) => {
                if (err != null) {
                    if(err.code === 11000){
                        root_controller.req_fail(res, "Email già utilizzata");
                    }
                    else{
                        console.log(err);
                        root_controller.req_fail(res, err.message);
                    }
                } else {
                    var access_token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);

                    res.send({
                        token_type:"Bearer",
                        access_token: access_token,
                        id_token: jwt.sign({ id: user.id, name: user.name, email: user.email, roles: user.roles }, process.env.JWT_SECRET)
                    });
                }
                next();
            });
        }
    }
});

router.post("/change_password", async (req, res, next) => {
    const regex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;    

    if (!req.body.oldPassword){
        root_controller.req_fail(res, "Inserire la vecchia password");
    }
    else if (!req.body.newPassword){
        root_controller.req_fail(res, "Inserire la nuova password");
    }
    else{
        if(!regex.test(req.body.newPassword)){
            root_controller.req_fail(res, "Password non valida");
        }
        else{
            user_service.user_get(req.body.userId, (err, user) => {
                if (err != null) {
                    root_controller.req_fail(res, err.message);
                    next();
                } else {
                    var passwordIsValid = bcrypt.compareSync(
                        req.body.oldPassword,
                        user.password
                    );
                    
                    if (!passwordIsValid) {
                        root_controller.req_fail(res, "Vecchia password errata");
                        next();
                    }
                    else{
                        user.password = bcrypt.hashSync(req.body.newPassword);
                        user_service.user_update(user, (err, user) => {
                            if (err != null) {
                                root_controller.req_fail(res, err.message);
                            }
                            else {
                                res.send(user);
                            }
                            next();
                        });
                    }
                }
            });
        }
    }
});


router.get("/forgot_password/:email", async (req, res, next) => {
    user_service.user_get_by_email(req.params.email, (err, user) => {
        if (err != null) {
            root_controller.req_fail(res, err.message);
        } else {
            var newPass = Math.random().toString(36).slice(2);
            user.password = bcrypt.hashSync(newPass);
            user_service.user_update(user);
            
            mail_service.send_forgot_password(newPass, user.email)
                .then(_ => {
                    res.send();
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
