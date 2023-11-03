const mySql = require("mysql");

const anwesenheit = mySql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "anwesenheit2",
});

module.exports = anwesenheit;