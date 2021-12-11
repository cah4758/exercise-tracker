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

// create workout
router.post("/api/workouts", (req, res) => {});

// add exercise
router.put("/api/workouts/:id", (req, res) => {});

router.get("/exercise", (req, res) => {
  res.redirect("/exercise.html");
});

module.exports = router;
