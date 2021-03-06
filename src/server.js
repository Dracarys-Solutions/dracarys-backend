const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
const server = require("http").Server(app);
mongoose.connect("mongodb://localhost/test", { useNewUrlParser: true });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(require("./routes"));

server.listen(process.env.PORT || 3333);
