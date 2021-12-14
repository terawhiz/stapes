"use strict";
require("dotenv").config();
const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const apiRoute = require("./router/apiRoute");
const redirect = require("./middlewares/redirect");

const PORT = process.env.PORT || 3000;
const MONGO_URL =
  process.env.MONGO_PROD_URL || "mongodb://127.0.0.1:27017/stapes";

mongoose.connect(
  MONGO_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => console.log("DB CONNECTED")
);

// REACT APP
app.use(express.static(path.join(__dirname, "app/build")));

app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "app/build", "index.html"));
});

app.use("/api", apiRoute);
app.get("/:id", redirect);

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Listening on port ${PORT}`);
});
