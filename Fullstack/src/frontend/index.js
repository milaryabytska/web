const {Router} = require("express");
const {index} = require("./controller");

const frontendRouter = new Router();

frontendRouter.get("/", index);

module.exports = frontendRouter;