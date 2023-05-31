import mongoose, { Schema } from "mongoose";

const UserSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: "please enter your username ",
  },
  email: {
    type: String,
    required: "Please enter your email",
  },
  password: {
    type: String,
    required: "please enter your password",
  },
  role: {
    type: String,
    required: false,
    default: "user",
  },
});

export default mongoose.model("User", UserSchema);
