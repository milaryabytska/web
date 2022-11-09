//імпортуємо фреймворк, налаштування та роутер
const express = require("express");
const options = require("./options");
const userRouter = require("./users");
const frontendRouter = require("./frontend");
// створюємо новий екземпляр серверу
const app = express();
// використовуємо вбудовані функції для декодування json тіла запитів та запитів в переданих через рядок
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// визначаэмо шлях для роутера http://localhost:3000/users
app.use("/users", userRouter);


//роздача файлів фронтенду
app.set("view engine", "ejs");
app.use(express.static("./public"));
app.get("/", frontendRouter);


//для решти шляхів повертаємо 404
app.all("*", (req, res) => {
  res.status(404).send("URL not found");
});
// запускаємо сервер, слухаємо порт вказаний в опціях
app.listen(options.port, () => {
  console.log(`Backend runs on http://localhost:${options.port}`);
});