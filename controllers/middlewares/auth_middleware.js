const jwt = require("jsonwebtoken");
const user_model = require("../../models/user_model");

const verify_token = (req, res, next) => {
    let token = req.headers["authorization"];

    if (!token) {
        return res.status(403).send({ message: "No authorization provided!" });
    }

    jwt.verify(token.split(' ')[1], process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).send({ message: "Unauthorized!" });
        }
        req.userId = decoded.id;
        next();
    });
};

const is_admin = (req, res, next) => {
    user_model.findById(req.userId).exec((err, user) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }

        if (user.roles.includes("admin")){
            next();
            return;
        }
        else{
            res.status(403).send({ message: "Devi essere amministratore!" });
            return;
        }
    });
};

exports.verify_token=verify_token;
exports.is_admin=is_admin;
