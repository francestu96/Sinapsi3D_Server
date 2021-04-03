/**
 * Main class of application
 */
const express = require('express');
const error_handler_service = require('./services/error_handler_service');
const cors = require('cors');
const dotenv = require('dotenv');
const database = require('./repositories/mongo/database');

const user_controller = require('./controllers/user_controller');
const product_controller = require('./controllers/product_controller');
const cart_controller = require('./controllers/cart_controller');


dotenv.config();
database.connect();

const server = express();
server.use(express.json());
server.use(cors());

//////////////////////////////////////////

//Routing
server.use('/api/user', user_controller);
server.use('/api/product', product_controller);
server.use('/api/cart', cart_controller);

server.use((error, req, res, next) => {
    console.log(error)
    error_handler_service.handle_error(error, res)
});

const port = process.env.PORT || 1080;

//Listening
server.listen(port,()=>{
    console.log(`Server is running, port : ${port}`)
});