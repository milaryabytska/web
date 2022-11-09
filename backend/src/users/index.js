// описвуэмо роутер з використанням контролеру
const Router = require("express").Router;
const bookController = require("./controller");

const userRouter = new Router();

//CRUD - визначаємо яку функцію викликати при якому запиту
userRouter.get("/", bookController.getAll);
userRouter.get("/:id", bookController.getById);
userRouter.delete("/:id", bookController.delete);
userRouter.post("/", bookController.post);
userRouter.patch("/:id", bookController.patch);

//експортуэмо роутер
module.exports = userRouter;