const cart_model = require("../models/cart_model");
const product_model = require("../models/product_model");

const cart_get = async (userId, delegate) =>{
    try {
        let cart = await cart_model.findOne({userdId: userId}).populate({
            path: "items.productId",
            select: "name price total"
        });
        if (!cart) {
            delegate({ message: "Cart not Found" });
        }
        else if (delegate != null)
            delegate(null, cart);

    } catch (ex) {
        delegate(ex);
    }
}


const cart_delete = async (userId, delegate) =>{
    // try {
    //     let cart = await cartRepository.cart();
    //     cart.items = [];
    //     cart.subTotal = 0
    //     let data = await cart.save();
    //     delegate(null, data);
    // } catch (ex) {
    //     delegate(ex);
    // }
}

const cart_add = async (userId, productId, quantity, delegate) =>{
    // try {
    //     let cart = await cart_model.cart();
    //     let productDetails = await product_repo.get(productId);
    //     if (!productDetails)
    //         delegate("fail", "Product not Found");

    //     //--If Cart Exists ----
    //     if (cart) {
    //         //---- Check if index exists ----
    //         const indexFound = cart.items.findIndex(item => item.productId.id == productId);
    //         //------This removes an item from the the cart if the quantity is set to zero, We can use this method to remove an item from the list  -------
    //         if (indexFound !== -1 && quantity <= 0) {
    //             cart.items.splice(indexFound, 1);
    //             if (cart.items.length == 0) {
    //                 cart.subTotal = 0;
    //             } else {
    //                 cart.subTotal = cart.items.map(item => item.total).reduce((acc, next) => acc + next);
    //             }
    //         }
    //         //----------Check if product exist, just add the previous quantity with the new quantity and update the total price-------
    //         else if (indexFound !== -1) {
    //             cart.items[indexFound].quantity = cart.items[indexFound].quantity + quantity;
    //             cart.items[indexFound].total = cart.items[indexFound].quantity * productDetails.price;
    //             cart.items[indexFound].price = productDetails.price
    //             cart.subTotal = cart.items.map(item => item.total).reduce((acc, next) => acc + next);
    //         }
    //         //----Check if quantity is greater than 0 then add item to items array ----
    //         else if (quantity > 0) {
    //             cart.items.push({
    //                 productId: productId,
    //                 quantity: quantity,
    //                 price: productDetails.price,
    //                 total: parseInt(productDetails.price * quantity)
    //             })
    //             cart.subTotal = cart.items.map(item => item.total).reduce((acc, next) => acc + next);
    //         }
    //         //----If quantity of price is 0 throw the error -------
    //         else {
    //             delegate("fail", "Quantity less or equal to 0");
    //         }
    //         let data = await cart.save();
    //         delegate(null, data);
    //     }
    //     //------------ This creates a new cart and then adds the item to the cart that has been created------------
    //     else {
    //         const cartData = {
    //             items: [{
    //                 productId: productId,
    //                 quantity: quantity,
    //                 total: parseInt(productDetails.price * quantity),
    //                 price: productDetails.price
    //             }],
    //             subTotal: parseInt(productDetails.price * quantity)
    //         }
    //         cart = await cart_repo.add_item(cartData)
    //         // let data = await cart.save();
    //         delegate(null, cart);
    //         // res.json(cart);
    //     }
    // } catch (ex) {
    //     console.log(ex);
    //     delegate(ex);
    // }
}

exports.cart_get=cart_get;
exports.cart_add=cart_add;
exports.cart_delete=cart_delete;
