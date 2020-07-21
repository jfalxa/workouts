const { Router } = require("express");
const db = require("./database");

const router = new Router();

router.get("/workouts", (req, res) => {
  const workouts = db.getAllWorkouts();

  res.json({ data: workouts });
});

router.get("/workouts/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  const workout = db.getWorkout(id);

  res.json({ data: workout });
});

module.exports = router;
