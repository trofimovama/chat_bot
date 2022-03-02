const readline = require("../readline");

const sortArray = (callback) => {
  readline.question("Введи числа через запятую: ", (userInput) => {
    const newSet = new Set([userInput]);
    console.log("Вы ввели: ", newSet);
    let userArray = Object.values(userInput.split(","));
    userArray.sort();
    console.log("Отсортировано успешно! ", userArray);
    callback();
  });
};

module.exports = sortArray;
