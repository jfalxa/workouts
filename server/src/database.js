const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync("db.json");
const db = low(adapter);

exports.getAllWorkouts = () => {
  return db.get("workouts").value();
};

exports.getWorkout = (id) => {
  return db.get("workouts").find({ id }).value();
};
