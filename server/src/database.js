const low = require("lowdb");
const omit = require("lodash/omit");
const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync("db.json");
const db = low(adapter);

// select the workouts that have the same month/year as the start date
function byDate(startDate) {
  if (!startDate) return () => true;

  return (workout) => {
    const date = new Date(workout.startDate);
    const sameYear = date.getFullYear() === startDate.getFullYear();
    const sameMonth = date.getMonth() === startDate.getMonth();
    return sameMonth && sameYear;
  };
}

// select the workouts that have one of the given categories
function byCategories(categories) {
  if (!categories) return () => true;

  const cats = Array.isArray(categories) ? categories : [categories];
  return (workout) => cats.includes(workout.category);
}

exports.getAllWorkouts = function ({ startDate, categories }) {
  return db
    .get("workouts")
    .map((workout) => omit(workout, "description"))
    .filter(byDate(startDate))
    .filter(byCategories(categories))
    .sortBy("startDate")
    .value();
};

exports.getWorkout = function (id) {
  return db.get("workouts").find({ id }).value();
};
