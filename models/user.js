import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"], //Making field mandatory
    },
    email: {
      type: String,
      unique: true,
      required: [true, "Email is required"],
      match: [/^\S+@\S+\.\S+$/, "Invalid email format"], //Reg ex to match email
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Password must be 6 characters long"], //Length enforcement on password length
    },
    role: {
      type: String,
      enum: ["admin", "customer"],
      default: "customer", //making customer as default value
    },
  },
  {
    collection: "user",
  }
);

export default mongoose.model("User", userSchema);
