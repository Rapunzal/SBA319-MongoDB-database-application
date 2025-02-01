import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
      unique: true,
      index: "text",
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
      index: true,
    },
    category: {
      type: String,
      index: true,
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
