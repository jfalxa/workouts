const pt = require("path");
const fs = require("fs/promises");
const faker = require("faker");

const db = { workouts: [] };
const categories = ["c1", "c2", "c3", "c4", "c5", "c6", "c7"];

for (let i = 0; i < 1000; i++) {
  const workout = {
    id: i,
    name: faker.random.words(2),
    description: faker.lorem.sentence(24),
    startDate: faker.date.between("2020-01-01", "2020-12-31"),
    category: faker.random.arrayElement(categories)
  };

  db.workouts.push(workout);
}

const path = pt.resolve("db.json");
const json = JSON.stringify(db, null, "  ");

fs.writeFile(path, json, "utf-8")
  .then(() => console.log("DB generated!"))
  .catch((err) => console.log("An error happened during DB generation", err));
