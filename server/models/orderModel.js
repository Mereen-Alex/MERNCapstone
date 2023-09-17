import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema({
  cake: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Cake", 
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    min: 1,
  },
});

const orderSchema = new mongoose.Schema({
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", 
    required: true,
  },
  items: [orderItemSchema], // array of ordered items
  status: {
    type: String,
    enum: ["Pending", "Confirmed", "Delivered"], 
    default: "Pending", 
  },
  orderDate: {
    type: Date,
    default: Date.now,
  },
});

const Order = mongoose.model("Order", orderSchema);

export default Order;
