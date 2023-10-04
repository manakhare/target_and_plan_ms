const mongoose = require("mongoose");
const task = require("./TaskModel");

const dailyTemplateSchema = new mongoose.Schema({
  tasksList: [task],
  todoList: [String],
  dailySelfReview: String,
  dailyRating: { type: Number, min: 0, max: 10 },
});

module.exports = mongoose.model("DailyTemplate", dailyTemplateSchema);
