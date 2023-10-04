const express = require("express");
const db = require("./db/db");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  console.log("Home page");
});

app.listen(4000, () => {
  console.log("Listening to port 3000");
});
