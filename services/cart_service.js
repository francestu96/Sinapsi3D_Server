const cart_model = require("../models/cart_model");

const cart_get = async (userId, delegate) =>{
    try {
        let cart = await cart_model.findOne({ userId: userId }).populate({ path: "products.product" });
        if (delegate != null)
            delegate(null, cart);

    } catch (ex) {
        delegate(ex);
    }
}

const cart_add_update = async (userId, productId, quantity, delegate) =>{
    try {
        let cart = await cart_model.findOne({ userId: userId });
        if(!cart){
            cart = await cart_model.create({ userId: userId, products: [ { quantity: quantity, product: productId } ] });
        }
        else{
            const index = cart.products.map(x => x.product._id).indexOf(productId);
            if (index !== -1) {
                cart.products[index].quantity = quantity;
                cart = await cart_model.findByIdAndUpdate(cart.id, cart, {new: true}).populate({ path: "products.product" });
            } 
            else{
                cart.products.push({ quantity: quantity, product: productId });
                cart = await cart_model.findByIdAndUpdate(cart.id, cart, {new: true}).populate({ path: "products.product" });
            }
        }

        if (delegate != null)
            delegate(null, cart);

    } catch (ex) {
        delegate(ex);
    }
}

const cart_delete = async (userId, productId, delegate) =>{
    try {
        var cart = await cart_model.findOne({ userId: userId });
        if(!cart){
            throw { message: "Carrello non trovato" };
        }
        else{
            const index = this.cart.products.map(x => x._id).indexOf(productId);
            if (index !== -1) {
                this.cart.products.splice(index, 1);
                cart = await cart_model.findByIdAndUpdate(cart.id, cart, {new: true});
            } 
            else{
                throw { message: "Prodotto non trovato" };
            }
        }

        if (delegate != null)
            delegate(null, cart);

    } catch (ex) {
        delegate(ex);
    }
}

exports.cart_get=cart_get;
exports.cart_add_update=cart_add_update;
exports.cart_delete=cart_delete;
