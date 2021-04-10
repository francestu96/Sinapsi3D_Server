const mongoose = require("mongoose");
const order_schema = mongoose.Schema({
    intent: {
        type: String
    },
    payer: {
        name: { 
            given_name: { type: String },
            surname: { type: String }
         },
        email_address: { type: String },
        payer_id: { type: String },
        birth_date: { type: String }
    },
    purchase_units: [{
        amount: { 
            breakdown: {
                item_total: { 
                    currency_code: { type: String },
                    value: { type: String }
                }
            }    
        },
        reference_id: { type: String },
        payee: { 
            email_address: { type: String },
            merchant_id: { type: String }
        },
        items: [{
            name: { type: String },
            unit_amount: { 
                currency_code: { type: String },
                value: { type: String }
            },
            quantity: { type: String }
        }]
    }]
    }, {
    timestamps: true
});

const order_model = mongoose.model("order", order_schema);
module.exports = order_model;