const cart_model = require("../models/cart_model");

exports.get = async (userId) => {
    const carts = await cart_model.find({userdId: userId}).populate({
        path: "items.productId",
        select: "name price total"
    });
    return carts[0];
};

exports.add_item = async payload => {
    const newItem = await cart_model.create(payload);
    return newItem;
}