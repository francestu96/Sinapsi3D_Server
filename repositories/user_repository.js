const user_model = require("../models/user_model");

exports.list = async (filter) => {
    const users = await user_model.find(filter);
    return users;
};
exports.get = async id => {
    const user = await user_model.findById(id);
    return user;
}
exports.create = async payload => {
    const new_user = await user_model.create(payload);
    return new_user;
}
exports.remove = async id => {
    const user = await user_model.findByIdAndRemove(id);
    return user;
}