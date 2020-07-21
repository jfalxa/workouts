const { Router } = require("express");
const db = require("./database");

const router = new Router();

router.get("/workouts", (req, res) => {
  const query = req.query;

  const page = parseInt(query.page, 10);
  const limit = parseInt(query.limit, 10);

  const startDate = query.startDate ? new Date(query.startDate) : null;
  const categories = query.categories ? query.categories : null;

  const workouts = db.getAllWorkouts({ startDate, categories });
  const total = Math.ceil(workouts.length / limit);

  const meta = { page, total }; // send the total number of pages for front-end pagination
  const data = workouts.slice(page * limit, page * limit + limit); // grab only the chunk of workouts we want

  res.json({ meta, data });
});

router.get("/workouts/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  const workout = db.getWorkout(id);

  res.json({ data: workout });
});

module.exports = router;
