import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
  },
  {
    collection: "user",
  }
);

export default mongoose.model("User", userSchema);
