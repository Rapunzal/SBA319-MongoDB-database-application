import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      index: true,
    },
    products: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
    orderId: {
      type: Number,
    },
    totalNumber: Number,
    paymentStatus: {
      type: String,
      enum: ["Pending", "Paid"],
      default: "Pending",
      index: true,
    },
    orderStatus: {
      type: String,
      enum: ["processing", "Shipped", "Delivered"],
      default: "processing",
      index: true,
    },
  },
  {
    collection: "order",
  }
);

export default mongoose.model("Order", orderSchema);
