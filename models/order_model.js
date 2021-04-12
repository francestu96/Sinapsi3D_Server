const mongoose = require("mongoose");
const order_schema = mongoose.Schema({
    user_id: { type: String },
    intent: { type: String },
    payer: {
        name: { 
            given_name: { type: String },
            surname: { type: String }
         },
        email_address: { type: String },
        payer_id: { type: String },
        birth_date: { type: String },
        address: {
            country_code: { type: String },
            address_line_1: { type: String },
            address_line_2: { type: String },
            admin_area_2: { type: String },
            admin_area_1: { type: String },
            postal_code: { type: String }
        },
        phone: {
            phone_number: {
                national_number: { type: String }
            }
        }
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