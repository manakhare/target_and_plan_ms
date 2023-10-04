const DailyTemplate = require("../models/DailyTemplateModel");
const DailyTarget = require("../models/DailyModel");
// const WeeklyTarget = require('../models/WeeklyModel');
// const MonthlyTarget = require('../models/MonthlyModel');
// const YearlyTarget = require('../models/YearlyModel');

exports.getTodaysTarget = async (req, res) => {
  try {
    const targetsForToday = await DailyTarget.find().exec();
    console.log("TargetsForToday --------", targetsForToday);
    res.send(targetsForToday);
  } catch (err) {
    console.log(err);
    res.send("There was an error in fetching today's target");
  }
};

exports.addTaks = async (req, res) => {
  try {
    const targetListObject = JSON.parse(req.body);
    const targetList = await DailyTarget.create().exec();
    res.status(201).send(targetList);
  } catch (err) {
    console.log(err);
    res.send("There was and error in adding this task. Please try again!");
  }
};

exports.editTask = async (req, res) => {
  try {
      
  } catch (err) {
    console.log(err);
    res.send("There was and error in adding this task. Please try again!");
  }
};

exports.deleteTask = async (req, res) => {
  try {
  } catch (err) {
    console.log(err);
    res.send("There was and error in deleting this task. Please try again!");
  }
};
