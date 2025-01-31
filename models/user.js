import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
  },
  {
    collection: "User",
  }
);

export default mongoose.model("User", userSchema);
