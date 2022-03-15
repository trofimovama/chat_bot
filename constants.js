const {
  getDate,
  getCompliment,
  randomNumber,
  getWeather,
  commandFibonacci,
  exitApp,
} = require("./commands/commands");

const COMMAND = [
  {
    name: "дата",
    value: getDate,
  },
  {
    name: "комплимент",
    value: getCompliment,
  },
  {
    name: "случайное число",
    value: randomNumber,
  },
  {
    name: "погода",
    value: getWeather,
  },
  {
    name: "фибоначчи",
    value: commandFibonacci,
  },
  {
    name: "выйти",
    value: exitApp,
  },
];

module.exports = COMMAND;
