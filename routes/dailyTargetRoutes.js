const express = require("express");
const router = express.Router();

const dailyTargetsController = require("../controllers/dailyTargetsController");

router.get("/", function (req, res, next) {
  res.send("Welcome to daily planner!");
});

router.post("/add-task", dailyTargetsController.addTask);
router.delete("/delete-task/:id", dailyTargetsController.deleteTask);
router.patch("/edit-task/:id", dailyTargetsController.editTask);
