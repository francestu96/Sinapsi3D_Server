const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cart_schema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    },
    products: [{
        quantity: {
            type: Number,
            required: true,
            min: [1, 'Quantity can not be less then 1.']
        },
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "product",
        }
    }],
});

module.exports = mongoose.model('cart', cart_schema);