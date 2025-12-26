// IMPORT
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// CODE
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// EXPROT
const User = mongoose.model("User", userSchema, "users");
module.exports = User;
