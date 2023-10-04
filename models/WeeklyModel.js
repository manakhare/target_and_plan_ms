const mongoose = require("mongoose");

const weeklySchema = new mongoose.Schema({
  weeklyTarget: [
    {
      weeklyTargetName: String,
      estimatedTotalTime: Date,
      estimatedTimePerDay: Date,
    },
  ],
  //   weeklyAnalysis:
});
