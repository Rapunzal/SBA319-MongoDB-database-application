import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
    },
    quantity: {
      type: Number,
    },
  },
  {
    collection: "product",
  }
);

export default mongoose.model("Product", productSchema);
