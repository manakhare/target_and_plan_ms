const mongoose = require("mongoose");
const task = require("./TaskModel");

const dailySchema = new mongoose.Schema({
  dailyTaskList: [task],
  todoList: [String],
  dailySelfReview: String,
  dailyRating: { type: Number, min: 0, max: 10 },
});

module.exports = mongoose.model("Day", dailySchema);
