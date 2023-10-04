const mongoose = require("mongoose");
const subTask = require("./SubTaskModel");

export const taskSchema = new mongoose.Schema(
  {
    taskId: { type: Number },
    taskName: { type: String },
    taskDesc: { type: [subTask] },
    idealStartTime: { type: Date },
    idealEndTime: { type: Date },
    actualStartTime: { type: Date },
    actualEndTime: { type: Date },
    pomodro: { type: Boolean },
    timer: { type: Boolean },
    expectedTime: Date,
    actualTimeTaken: Date,
    selfRating: {
      taskRating: { type: Number, min: 0, max: 10 },
      taskRatingAnalysis: { type: String },
    },
  }
  // {
  //   collection: "task",
  // }
);

// module.exports = mongoose.model("Task", taskSchema);
