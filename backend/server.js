require("dotenv").config();

const express = require("express");

const app = express();
const workoutRoutes = require("./routes/workout");
const mongoose = require("mongoose");

//middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//register route
app.use("/api/workouts", workoutRoutes);

//database connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
