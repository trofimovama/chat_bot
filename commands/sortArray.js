const readline = require("../readline");

const sortArray = (callback) => {
  readline.question("Введи числа через запятую: ", (userInput) => {
    const newSet = new Set([userInput]);
    console.log("Вы ввели: ", newSet);
    let userArray = Object.values(userInput.split(","));
    let sortedArray = [];
    let length = userArray.length ;

    userArray.sort();

    let temporary;

    for (let i = 0; i < length; i++) {
      if(userArray[i] !== temporary) {
        sortedArray.push(userArray[i]);
        temporary = userArray[i];
      }
    }

    console.log("Отсортировано успешно! ", sortedArray);
    callback();
  });
};

module.exports = sortArray;
