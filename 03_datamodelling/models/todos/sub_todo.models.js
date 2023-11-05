import mongoose from "mongoose";

//? Simpler way to create a schema
// const userSchema = new mongoose.Schema({
//   username: String,
//   email: String,
//   isActive: Boolean,
// });

//? Professional way to create a schema
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
