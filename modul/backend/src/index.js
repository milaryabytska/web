//імпортуємо фреймворк, налаштування та роутер
const express = require("express");
const options = require("./options");
const userRouter = require("./users");
// створюємо новий екземпляр серверу
const app = express();
// використовуємо вбудовані функції для декодування json тіла запитів та запитів в переданих через рядок
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// визначаэмо шлях для роутера http://localhost:3000/users
app.use("/users", userRouter);
//для решти шляхів повертаємо 404
app.all("*", (req, res) => {
  res.status(404).send("URL not found");
});
// запускаємо сервер, слухаємо порт вказаний в опціях
app.listen(options.port, () => {
  console.log(`Backend runs on http://localhost:${options.port}`);
});