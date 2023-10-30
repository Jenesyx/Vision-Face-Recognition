const express = require("express");
const anwesenheit = require("./../database/anwesenheit");
const mainRouter = express.Router();

mainRouter.get("/", (req, res) => {
  let getAllCurrentPositionQuery = `SELECT Schueler.Vorname, Schueler.Nachname, cast(anwesenheit.Ankunftszeit as time) AS Ankunftszeit, cast(anwesenheit.Gangzeit as time) AS Gangzeit, DATE(Anwesenheit.Ankunftszeit) AS Datum, TIMEDIFF(Anwesenheit.Gangzeit, Anwesenheit.Ankunftszeit) AS Anwesenheitsdauer FROM Anwesenheit INNER JOIN Schueler ON Anwesenheit.Schueler_ID = Schueler.Schueler_ID`;
  anwesenheit.query(getAllCurrentPositionQuery, (err, result) => {
    if (err) {
      res.status(404).send({ message: "not Founded!!!!" });
    } else {
      res.status(200).send(result);
    }
  });
});

module.exports = mainRouter