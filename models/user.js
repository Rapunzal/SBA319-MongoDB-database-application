import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      unique: true,
      required: [true, "Email is required"],
      match: [/^\S+@\S+\.\S+$/, "Invalid email format"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Password must be 6 characters long"],
    },
    role: {
      type: String,
      enum: ["admin", "customer"],
      default: "customer",
    },
  },
  {
    collection: "user",
  }
);

export default mongoose.model("User", userSchema);
