const express = require("express");
const Workout = require("../models/workoutModel");
const {getAllWorkouts, getWorkout, newWorkout, deleteWorkout, updateWorkout} = require("../controllers/workoutController")

const router = express.Router();

//Get all workouts
router.get("/", getAllWorkouts);

//Get single workout
router.get("/:id", getWorkout);

//Post/create new workout
router.post("/", newWorkout);

//Delete single workout
router.delete("/:id", deleteWorkout);

//Update workout
router.patch("/:id", updateWorkout);

module.exports = router;
