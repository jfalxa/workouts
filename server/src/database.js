const low = require("lowdb");
const omit = require("lodash/omit");
const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync("db.json");
const db = low(adapter);

exports.getAllWorkouts = function () {
  return db
    .get("workouts")
    .map((workout) => omit(workout, "description"))
    .sortBy("startDate")
    .value();
};

exports.getWorkout = function (id) {
  return db.get("workouts").find({ id }).value();
};
