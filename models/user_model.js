const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const validator_email = function (email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(String(email).toLowerCase())
}

let user_schema = new Schema({
    email: {
        unique: true,
        type: String,
        required: [true, 'Email empty'],
        validate: [validator_email, 'Email is not valid']
    },
    password: {
        type: String,
        required: [true, 'Password empty']
    },
    address: {
        type: String
    },
    roles: [
        {
            type: String
        }
    ]
});

const user_model = mongoose.model("user", user_schema);
module.exports = user_model;
