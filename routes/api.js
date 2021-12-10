const router = require("express").Router();
const Workout = require("../models/workout");

//view past 7 workouts with combined weight
router.get("/api/workouts", (req, res) => {
  Workout.find({})
    .sort({ date: 1 })
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// view past 7 workouts with combined duration

// add new exercise to recent plan

// add a new exercise to the recen workout plan

module.exports = router;
