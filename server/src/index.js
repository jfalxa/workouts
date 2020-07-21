const express = require("express");
const cors = require("cors");

const routes = require("./routes");

const app = express();

app.use(cors());
app.use(routes);

app.listen(3001, () =>
  console.log(`Server listening at http://localhost:3001`)
);
