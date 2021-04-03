const repo = require('../repositories/user_repository')

const user_get = async (userId, delegate) =>{
    try {
        let user = await repo.get(userId);
        if(!user)
            delegate({ message: "User not found"});
        else if (delegate != null)
            delegate(null, user)
    } catch (ex) {
        delegate(ex);
    }
}

const user_list = async (filter, delegate) =>{
    try {
        let users = await repo.list(filter);
        if (delegate != null)
            delegate(null, users)
    } catch (ex) {
        delegate(ex);
    }
}

const user_create = async (payload, delegate) =>{
    try {
        let user = await repo.create({...payload});

        if (delegate != null)
            delegate(null, user);

    } catch (ex) {
        delegate(ex);
    }
}

exports.user_get=user_get;
exports.user_list=user_list;
exports.user_create=user_create;
