const mongoose = require("mongoose");
const product_schema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please include the product name"],
  },
  description: {
    type: String,
    required: [true, "Please include the product description"],
  },
  price: {
    type: Number,
    required: [true, "Please include the product price"],
  },
  images: [
    {
      type: String,
      required: [true, "Please include at least one picture"]
    }
  ]
});

const product_model = mongoose.model("product", product_schema);
module.exports = product_model;