const express = require("express");
const anwesenheit = require("./../database/anwesenheit");
const homePageRouter = express.Router();

homePageRouter.get("/", (req, res) => {
  let getAllCurrentPositionQuery = `SELECT * FROM anwesenheit`;
  anwesenheit.query(getAllCurrentPositionQuery, (err, result) => {
    if (err) {
      res.status(404).send({ message: "not Founded!!!!" });
    } else {
      res.status(200).send(result);
    }
  });
});

module.exports = homePageRouter