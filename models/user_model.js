const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const validator_email = function (email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(String(email).toLowerCase());
}

let user_schema = new Schema({
    name: { 
        type: String,
        required: [true, 'Inserire un nome']
    },
    email: {
        unique: true,
        type: String,
        required: [true, 'Inserire una email valida'],
        validate: [validator_email, 'Email non valida']
    },
    password: {
        type: String,
        required: [true, 'Inserire una password valida']
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
