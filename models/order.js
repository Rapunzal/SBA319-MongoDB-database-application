import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    orderId: {
      type: Number,
    },
  },
  {
    collection: "order",
  }
);

export default mongoose.model("Order", orderSchema);
