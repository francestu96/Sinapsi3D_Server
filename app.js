/**
 * Main class of application
 */
const express = require('express');
const cors = require('cors');
var path = require('path');
const dotenv = require('dotenv');
const error_handler_service = require('./services/error_handler_service');
const database = require('./database');

const auth_middleware = require("./controllers/middlewares/auth_middleware");

const auth_controller = require('./controllers/auth_controller');
const product_controller = require('./controllers/product_controller');
const cart_controller = require('./controllers/cart_controller');


dotenv.config();
database.connect();

const server = express();
server.use(express.json());

server.use(cors({
    origin: "http://localhost:4200",
    methods: "PUT,POST,GET,DELETE"
}));

//////////////////////////////////////////

//Routing
server.use('/api/auth', auth_controller);
server.use('/api/product', product_controller);
server.use('/api/cart', [auth_middleware.verify_token], cart_controller);
server.use("/api/image/thumb", express.static(path.join(process.env.DIR_UPLOAD, "thumb"), { setHeaders: function (res) { res.set('Content-Type', "image/jpeg") }}));
server.use("/api/image/original", express.static(path.join(process.env.DIR_UPLOAD, "original"), { setHeaders: function (res) { res.set('Content-Type', "image/jpeg") }}));

server.use((error, req, res, next) => {
    console.log(error)
    error_handler_service.handle_error(error, res)
});

const port = process.env.PORT || 1080;

//Listening
server.listen(port,()=>{
    console.log(`Server is running, port : ${port}`)
});