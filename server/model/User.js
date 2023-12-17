const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  age: Number,
  selectedBatch: String,
});

module.exports = mongoose.model("User", UserSchema);
