const mySql = require("mysql");

const anwesenheit = mySql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "anwesenheit",
});

module.exports = anwesenheit;