const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const homePageRouter = require("./Routes/homePageRouter")

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/api/main", homePageRouter);
app.listen(4000);
