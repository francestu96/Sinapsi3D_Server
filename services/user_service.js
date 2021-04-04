const user_model = require("../models/user_model");

const user_get = async (userId, delegate) =>{
    try {
        let user = await user_model.findById(userId);
        if(!user)
            delegate({ message: "User not found"});
        else if (delegate != null)
            delegate(null, user);
    } catch (ex) {
        delegate(ex);
    }
}

const user_get_by_email = async (email, delegate) =>{
    try {
        let user = await user_model.findOne({ email: email});
        if(!user)
            delegate({ message: "Credenziali non valide"});
        else if (delegate != null)
            delegate(null, user);
    } catch (ex) {
        delegate(ex);
    }
}

const user_list = async (filter, delegate) =>{
    try {
        let users = await user_model.find(filter);
        if (delegate != null)
            delegate(null, users);
    } catch (ex) {
        delegate(ex);
    }
}

const user_create = async (payload, delegate) =>{
    try {
        let user = await user_model.create(payload);

        if (delegate != null)
            delegate(null, user);

    } catch (ex) {
        delegate(ex);
    }
}

const user_delete = async (userId, delegate) =>{
    try {
        await user_model.findByIdAndRemove(userId);
        if (delegate != null)
            delegate();
    } catch (ex) {
        delegate(ex);
    }
}

exports.user_get=user_get;
exports.user_get_by_email=user_get_by_email;
exports.user_list=user_list;
exports.user_create=user_create;
exports.user_delete=user_delete;
