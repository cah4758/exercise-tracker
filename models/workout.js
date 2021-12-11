const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  // workout type
  type: {
    type: String,
  },
  // workout name
  name: {
    type: String,
    trim: true,
    required: "Enter the name of your workout or else it didn't count!",
  },
  // duration
  totalDuration: {
    type: Number,
    trim: true,
  },
  // workout weight
  weight: {
    type: Number,
    trim: true,
  },
  // num of reps
  reps: {
    type: Number,
    trim: true,
  },
  // num of sets
  sets: {
    type: Number,
    trim: true,
  },
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
