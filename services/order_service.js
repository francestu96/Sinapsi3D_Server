const order_model = require("../models/order_model");

const order_create = async (payload, delegate) =>{
    try {
        let order = await order_model.create(payload);

        if (delegate != null)
            delegate(null, order);

    } catch (ex) {
        delegate(ex);
    }
}

exports.order_create=order_create;
