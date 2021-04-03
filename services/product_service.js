const repo = require('../repositories/product_repository')

const product_list = async (filter, sort, page, delegate) =>{
    try {
        let products = await repo.list(filter, sort, page);
        if (delegate != null)
            delegate(null, products)
    } catch (ex) {
        delegate(ex);
    }
}

const product_create = async (payload, delegate) =>{
    try {
        let product = await repo.create({...payload});

        if (delegate != null)
            delegate(null, product);

    } catch (ex) {
        delegate(ex);
    }
}

exports.product_list=product_list;
exports.product_create=product_create;
