import mongoose from "mongoose";

const cakeSchema = new mongoose.Schema({
  pid: {
    type: String,
    required: true,
  },

  name: {
    type: String,
    required: true,
  },

  category: {
    type: String,
    required: true,
  },
  description: String,

  cakeflavor: String,

  sizes: [String],

  image: String,

  price: [
    {
      type: Number,
      required: true,
    },
  ],

  createdDate: {
    type: Date,
    default: Date.now,
  },
});

const Cake = mongoose.model("Cake", cakeSchema);

export default Cake;
