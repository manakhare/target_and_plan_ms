const mongoose = require("mongoose");

export const subTaskSchema = new mongoose.Schema({
  subTaskName: String,
  subTaskRating: { type: Number, min: 0, max: 10 },
});

// module.exports = mongoose.Model("subTask", subTaskSchema);
