const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: ["male", "female"],
    required: true,
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
  count: {
    type: Number,
    default: 0,
  },
  lastLoginDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", userSchema);
