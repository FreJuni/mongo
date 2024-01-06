const express = require("express");
const postRouter = require("./Routers/Rpost");
const adminRouter = require("./Routers/Radmin");
const path = require("path");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();
const { conneter } = require("./util/database");

const app = express();

app.use(express.static(path.join(__dirname, "./public")));

app.set("view engine", "ejs");
app.set("views", "Pages");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(postRouter);

app.use("/admin", adminRouter);

conneter();
app.listen(8080);
