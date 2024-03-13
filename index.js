// importing external files and modules
const express = require("express");
const fs = require("fs");
const path = require("path");
const body_parser = require("body-parser");
const app = express();


global.users_db = path.join(__dirname, "./data/users_db.json");

const api_route = require("./routes/api");
const web_route = require("./routes/web");

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// setting PORT to 3000
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/css", express.static("public/css"));
app.use("/javascript", express.static("public/javascript"));

app.use("/api", api_route);
app.use("/", web_route);

console.log("The work of 00016040 successfully works!")

app.listen(PORT, () => console.log(`The server running on port ${PORT}`));