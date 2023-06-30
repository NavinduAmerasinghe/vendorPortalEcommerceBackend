const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  sku: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  productName: {
    type: String,
    required: true,
  },
  images: [
    {
      type: String,
    },
  ],
  description: {
    type: String,
  },
});

module.exports = mongoose.model("Product", productSchema);
