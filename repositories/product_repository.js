const product_model = require("../models/product_model");

exports.list = async (filter, sort, page) => {
    const products = await product_model.find(filter).sort(sort).skip(page.page_number * page.page_size).limit(Number(page.page_size));
    return products;
};
exports.get = async id => {
    const product = await product_model.findById(id);
    return product;
}
exports.create = async payload => {
    const new_product = await product_model.create(payload);
    return new_product;
}
exports.remove = async id => {
    const product = await product_model.findByIdAndRemove(id);
    return product;
}