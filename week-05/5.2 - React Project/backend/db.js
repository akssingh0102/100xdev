const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.db_connect);

const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: { type: Boolean, default: false },
});

const todo = mongoose.model("todos", todoSchema);

module.exports = { todo };