import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: [true, "Product name is required"],
      unique: true,
      index: "text",
    },
    description: {
      type: String,
      required: [true, "Description is required"],
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
      index: true,
    },
    category: {
      type: String,
      index: [true, "Category is required"],
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
