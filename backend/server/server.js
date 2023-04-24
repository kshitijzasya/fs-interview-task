const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./routes/route.js");
const { DB_CONNECTION_URL, PORT } = require("./confiq");
const auth = require("./middleware/auth");

const app = express();
app.use(cors());

mongoose
  .connect(DB_CONNECTION_URL)
  .then(() => {
    console.log("Connected to the Database successfully");
  })
  .catch(() => console.log("Not Connected to the Database"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(auth);

app.use("/", routes);
app.listen(PORT, () => {
  console.log("Server is listening on Port:", PORT);
});
