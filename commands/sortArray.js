const readline = require("../readline");

const sortArray = (callback) => {
  readline.question("Введи числа через запятую: ", (userInput) => {
    let userArray = Object.values(userInput.split(","));

    numbersArray = userArray.map((str) => {
      if (str.trim() === "") {
        return NaN;
      }
      return Number(str);
    });
    numbersArray.sort();
    numbersSet = new Set(numbersArray);
    modifiedArray = [...numbersSet];

    resultArray = numbersArray.filter((i) => !isNaN(i));
    resultArray.length ? console.log("Отсортировано успешно! ", resultArray) : console.log("Тут пусто!");

    callback();
  });
};

module.exports = sortArray;
