const mongoose = require("mongoose");

const connect = () => {
    mongoose.connect( process.env.DB_CONNECTION, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false
    }).then(_ => console.log("MonogoDB is connected successfully")).catch(err => console.log(err))
    mongoose.Promise = global.Promise;
    process.on("SIGINT", cleanup);
    process.on("SIGTERM", cleanup);
    process.on("SIGHUP", cleanup);
};

function cleanup() {
    mongoose.connection.close(function () {
        process.exit(0);
    });
}
exports.connect = connect;
