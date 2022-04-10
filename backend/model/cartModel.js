const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required:true },
  price: {
    type: Number,
    required: [true, "Please enter price of the product"],
    maxlength: [8, "Price cannot be more then 8 character"],
  },
  rating:{
      type:Number,
      default:0
  },
  image: {
    type:String,
  required:true
  },
  category:{
    type:String,
    required:true
  }
});

const Cart= mongoose.model("Cart",cartSchema)

module.exports = Cart