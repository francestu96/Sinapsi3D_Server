const order_model = require("../models/order_model");

const get = async (payload, delegate) =>{
    try {
        let orders = await order_model.find(payload).populate("purchase_units.reference_id");

        if (delegate != null)
            delegate(null, orders);

    } catch (ex) {
        delegate(ex);
    }
}

const create = async (payload, delegate) =>{
    try {
        let order = await order_model.create(payload);

        if (delegate != null)
            delegate(null, order);

    } catch (ex) {
        delegate(ex);
    }
}

exports.get=get;
exports.create=create;
