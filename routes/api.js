const router = require("express").Router();
const Workout = require("../models/Workout");

router.get("/api/workouts", (req, res) => {
  Workout.find({})
    .sort({ date: -1 })
    .then((workout) => {
      res.json(workout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// initialize new workout
router.post("/api/workouts", ({ body }, res) => {
  Workout.create(body)
    .then((workout) => {
      res.json(workout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// select range of workouts
router.get("/api/workouts/range", ({ body }, res) => {
  Workout.aggregate([
    {
      $addFields: {
        totalWeight: { $sum: "$exercises.weight" },
        totalDuration: { $sum: "$exercises.totalDuration" },
      },
    },
  ])
    .sort({ date: -1 })
    .limit(7)
    .then((workout) => {
      res.json(workout);
    });
});

// update current workout
router.put("/api/workouts/:id", ({ params, body }, res) => {
  Workout.findOneAndUpdate(
    {
      _id: params.id,
    },
    {
      $push: {
        exercises: body,
      },
    }
  ).then((workout) => {
    res.json(workout);
  });
});

module.exports = router;
