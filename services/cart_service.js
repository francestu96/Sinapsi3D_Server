const cart_model = require("../models/cart_model");
const product_model = require("../models/product_model");

const cart_get = async (userId, delegate) =>{
    try {
        let cart = await cart_model.findOne({ userId: userId }).populate("products.product");
        if (delegate != null)
            delegate(null, cart);

    } catch (ex) {
        console.log(ex.message);
        delegate({ message: "CART.GENERIC_ERROR"});
    }
}

const cart_add_update = async (userId, productId, quantity, delegate) =>{
    try {
        let product = await product_model.findById(productId);
        if(!product){
            delegate({ message: "PRODUCT.NOT_FOUND"});
            return;
        }

        let cart = await cart_model.findOne({ userId: userId });
        if(!cart){
            cart = await cart_model.create({ userId: userId, products: [ { quantity: quantity, product: product } ] });
        }
        else{
            const index = cart.products.map(x => x.product._id).indexOf(productId);
            if (index !== -1) {
                cart.products[index].quantity = quantity;
                cart = await cart_model.findByIdAndUpdate(cart.id, cart, {new: true}).populate({ path: "products.product" });
            } 
            else{
                cart.products.unshift({ quantity: quantity, product: productId });
                cart = await cart_model.findByIdAndUpdate(cart.id, cart, {new: true}).populate({ path: "products.product" });
            }
        }

        if (delegate != null)
            delegate(null, cart);

    } catch (ex) {
        console.log(ex.message);
        delegate({ message: "CART.GENERIC_ERROR"});
    }
}

const cart_remove = async (userId, productId, delegate) =>{
    try {
        var cart = await cart_model.findOne({ userId: userId }).populate({ path: "products.product" });
        if(!cart){
            delegate({ message: "CART.NOT_FOUND"});
            return;
        }
        else{
            const index = cart.products.map(x => x.product._id).indexOf(productId);
            if (index !== -1) {
                cart.products.splice(index, 1);
                cart = await cart_model.findByIdAndUpdate(cart.id, cart, {new: true});
            } 
            else{
                delegate({ message: "PRODUCT.NOT_FOUND"});
                return;
            }
        }

        if (delegate != null)
            delegate(null, cart);

    } catch (ex) {
        console.log(ex.message);
        delegate({ message: "CART.GENERIC_ERROR"});
    }
}

const cart_delete = async (userId, delegate) => {
    try {
        await cart_model.findOneAndDelete({ userId: userId });
        
        if (delegate != null)
            delegate(null);

    } catch (ex) {
        console.log(ex.message);
        delegate({ message: "CART.GENERIC_ERROR"});
    }
}

exports.cart_get=cart_get;
exports.cart_add_update=cart_add_update;
exports.cart_remove=cart_remove;
exports.cart_delete=cart_delete;
