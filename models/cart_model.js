const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let item_schema = new Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "product",
    },
    quantity: {
        type: Number,
        required: true,
        min: [1, 'Quantity can not be less then 1.']
    },
    price: {
        type: Number,
        required: true
    },
    total: {
        type: Number,
        required: true,
    }
}, {
    timestamps: true
});

const cart_schema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    },
    items: [ item_schema ],
    subTotal: {
        default: 0,
        type: Number
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('cart', cart_schema);