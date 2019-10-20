const express = require("express");

const routes = express.Router();
const FireController = require("./controllers/FireController");

routes.get("/", FireController.show);
routes.post("/fires",FireController.show)

module.exports = routes;
