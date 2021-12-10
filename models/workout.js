const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  // workout name
  name: {
    type: String,
    trim: true,
    required: "Enter the name of your workout or else it didn't count!",
  },
  // workout type
  type: {
    type: String,
  },
  // workout weight
  weight: {
    type: Number,
    trim: true,
  },
  // num of sets
  sets: {
    type: Number,
    trim: true,
  },
  // num of reps
  reps: {
    type: Number,
    trim: true,
  },
  // duration
  duration: {
    type: Number,
    trim: true,
  },
  // date
  date: {
    type: Date,
    default: Date.now,
  },
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
