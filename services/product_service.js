const product_model = require("../models/product_model");

const product_list = async (filter, sort, page, delegate) =>{
    try {
        let products = await product_model.find(filter).sort(sort).skip(page.page_number * page.page_size).limit(Number(page.page_size));
        if (delegate != null)
            delegate(null, products)
    } catch (ex) {
        delegate(ex);
    }
}

const product_get = async (productId, delegate) =>{
    try {
        let product = await product_model.findById(productId);
        if(!product)
            delegate({ message: "Product not found"});
        else if (delegate != null)
            delegate(null, product)
    } catch (ex) {
        delegate(ex);
    }
}

const product_create = async (payload, delegate) =>{
    try {
        let product = await product_model.create({ ...payload });

        if (delegate != null)
            delegate(null, product);

    } catch (ex) {
        delegate(ex);
    }
}

const product_remove = async (productId, delegate) =>{
    try {
        let product = await product_model.findByIdAndRemove(productId);

        if (delegate != null)
            delegate(null, product);

    } catch (ex) {
        delegate(ex);
    }
}

exports.product_list=product_list;
exports.product_get=product_get;
exports.product_create=product_create;
exports.product_remove=product_remove;
