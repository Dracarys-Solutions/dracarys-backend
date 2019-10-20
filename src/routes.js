const express = require("express");

const routes = express.Router();
const FireController = require("./controllers/FireController");

routes.get("/teste", FireController.show);
routes.post("/fires",FireController.store)

module.exports = routes;
