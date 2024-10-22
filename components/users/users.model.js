const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    cellphone: {
      type: Number,
      required: [true, "Cellphone is required"],
      unique: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Password must be at least 8 characters long"],
    },
  },
  { timestamps: true }
);

const model = mongoose.model("Users", userSchema);
module.exports = model;
