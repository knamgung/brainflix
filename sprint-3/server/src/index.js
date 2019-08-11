const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const chalk = require("chalk");
const videoRoute = require("./routes/video");

const cors = require("cors");
const PORT = process.env.PORT || process.argv[2] || 8080;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log(
    chalk.italic(`Now listening on ${chalk.bold.underline.yellow(PORT)}...`)
  );
});

app.use("/videos", videoRoute);
