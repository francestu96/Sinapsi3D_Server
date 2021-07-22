const user_model = require("../models/user_model");

const user_get = async (userId, delegate) =>{
    try {
        let user = await user_model.findById(userId);
        if(!user)
            delegate({ message: "FORM.USER_NOT_FOUND"});
        else if (delegate != null)
            delegate(null, user);
    } catch (ex) {
        console.log(ex.message);
        delegate({ message: "FORM.GENERIC_ERROR"});
    }
}

const user_get_by_email = async (email, delegate) =>{
    try {
        let user = await user_model.findOne({ email: email});
        if(!user)
            delegate({ message: "FORM.INVALID_CREDENTIALS"});
        else if (delegate != null)
            delegate(null, user);
    } catch (ex) {
        console.log(ex.message);
        delegate({ message: "FORM.GENERIC_ERROR"});
    }
}

const user_list = async (filter, delegate) =>{
    try {
        let users = await user_model.find(filter);
        if (delegate != null)
            delegate(null, users);
    } catch (ex) {
        console.log(ex.message);
        delegate({ message: "FORM.GENERIC_ERROR"});
    }
}

const user_create = async (payload, delegate) =>{
    try {
        let user = await user_model.create(payload);

        if (delegate != null)
            delegate(null, user);

    } catch (ex) {
        if(ex.code === 11000){
            delegate({ message: "FORM.ALREADY_USED_EMAIL"});
            return;
        }
        console.log(ex.message);
        delegate({ message: "FORM.GENERIC_ERROR"});
    }
}

const user_delete = async (userId, delegate) =>{
    try {
        await user_model.findByIdAndRemove(userId);
        if (delegate != null)
            delegate();
    } catch (ex) {
        console.log(ex.message);
        delegate({ message: "FORM.GENERIC_ERROR"});
    }
}

const user_update = async (user, delegate) =>{
    try {
        await user_model.findByIdAndUpdate(user.id, user);
        if (delegate != null)
            delegate();
    } catch (ex) {
        console.log(ex.message);
        delegate({ message: "FORM.GENERIC_ERROR"});
    }
}

exports.user_get=user_get;
exports.user_get_by_email=user_get_by_email;
exports.user_list=user_list;
exports.user_create=user_create;
exports.user_delete=user_delete;
exports.user_update=user_update;
