const express = require("express");
const path = require("path");
const open = require("open");

import webpack from "webpack";
import config from "../webpack.config.dev.js";

const port = 8001;
const app = express();
const compiler = webpack(config);

app.use(
  require("webpack-dev-middleware")(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
  })
);

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../client/src/app/index.html"));
});

app.get("/users", function (req, res) {
  // Mocking an API call
  res.json([
    {
      id: 1,
      firstName: "John",
      lastName: "Smith",
      email: "john.smith@gmail.com",
    },
    {
      id: 2,
      firstName: "Tina",
      lastName: "Lee",
      email: "tina.lee@gmail.com",
    },
    {
      id: 3,
      firstName: "Jane",
      lastName: "Doe",
      email: "jane.doe@gmail.com",
    },
  ]);
});

app.listen(port, function (err) {
  if (err) {
    console.log(err);
  } else {
    open("http://localhost:" + port);
  }
});
