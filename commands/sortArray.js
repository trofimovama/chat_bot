const readline = require("../readline");

const sortArray = (callback) => {
  readline.question("Введи числа через запятую: ", (userInput) => {
    let userArray = Object.values(userInput.split(","));

    let sortedArray = [];
    let temporary;

    numbersArray = userArray.map((str) => {  // преобразовали массив строк в массив чисел
      if (str.trim() === "") {
        return NaN;
      }
      return Number(str);
    });

    modifiedArray = numbersArray.filter((i) => !isNaN(i)); // избавились от всех НЕ чисел

    modifiedArray.sort();
    let length = modifiedArray.length;

    for (let i = 0; i < length; i++) {
      if (modifiedArray[i] !== temporary) {   // оставили только уникальные значени без повторений
        
        sortedArray.push(modifiedArray[i]);
        temporary = modifiedArray[i];
      }
    }

    if (sortedArray.length) {
        console.log("Отсортировано успешно! ", sortedArray); 
    } else {
        console.log("Тут пусто!"); // исключили возможность вводить только пробелы
    }
    callback();
  });
};

module.exports = sortArray;
