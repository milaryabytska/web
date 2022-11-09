// описуємо модель користувача з використанням бібліотеки sequelize
const { Sequelize, DataTypes, Model } = require("sequelize");
const options = require("../options");
// підключаємо до бази даних
const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: options.dbPath,
});
// Успадковуємось від стандартної моделі
class User extends Model { }
//ініціалізуємо модель, вказуємо всі властивості крім id
User.init({
    username: {
        //обов'язково вказуємо тип 
        type: DataTypes.STRING,
    },
    password: {
        type: DataTypes.STRING,
        // також можемо вказати валідатори
        // https://sequelize.org/docs/v6/core-concepts/validations-and-constraints/
        validate: {
            // наприклад довжжина від 3 до 50 символів
            len: [3, 50]
        }
    },
    image: {
        type: DataTypes.STRING,
        // значення може бути не вказаним
        allowNull: true,
    },
}, {
    // підключення до бази даних
    sequelize,
    // назва моделі в однині. В базі повинна бути таблиця в множині (users)
    modelName: "User",
    // вказуємо щоб не створювались поля createdAt та updatedAt
    createdAt: false,
    updatedAt: false,
});

//експортуємо модель
module.exports = User;