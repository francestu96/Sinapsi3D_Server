const mongoose = require("mongoose");

const connect = () => {
    mongoose.connect(process.env.DB_CONNECTION, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false
    }).then(_ => {
        console.log("MonogoDB is connected successfully");
        init();
    }).catch(err => console.log(err));

    mongoose.Promise = global.Promise;
    process.on("SIGINT", cleanup);
    process.on("SIGTERM", cleanup);
    process.on("SIGHUP", cleanup);
};

function init() {
    // role_model.estimatedDocumentCount(async (err, count) => {
    //     if (!err && count === 0) {
    //         await role_model.create({ name: "admin" });
    //         await role_model.create({ name: "user" });
    //     }
    // });
}

function cleanup() {
    mongoose.connection.close(function () {
        process.exit(0);
    });
}
exports.connect = connect;
