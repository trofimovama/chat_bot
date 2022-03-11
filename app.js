const {
  getCompliment,
  getDate,
  getWeather,
  exitApp,
  randomNumber,
  sortArray,
  commandFibonacci,
} = require("./commands/commands.js");
const readline = require("./readline");

class App {
  commands = [];

  registerCommand = (commandName, callback) => {
    this.commands = [...this.commands, { commandName, callback }];
  };

  showCommands = () => {
    return `Привет, я чат-бот! Список моих команд: ${this.commands
      .map((item) => item.commandName)
      .join(", ")}`;
  };

  listenToCommand = () => {
    readline.question("Введите команду: ", (inputCommandName) => {
      const handler = this.commands.find(
        (item) =>
          item.commandName.toLowerCase() === inputCommandName.toLowerCase()
      );
      if (!handler) {
        console.log("Такой команды нет, попробуйте еще раз!");
        return this.listenToCommand();
      }
      handler.callback(this.listenToCommand); // if we remove console.log - undefined(weather func) str is not displayed but other commands stop working
    });
  };

  start () {
    this.registerCommand("дата", getDate);
    this.registerCommand("комплимент", getCompliment);
    this.registerCommand("случайное число", randomNumber);
    this.registerCommand("погода", getWeather);
    this.registerCommand("фибоначчи", commandFibonacci);
    this.registerCommand("массив", sortArray);
    this.registerCommand("выйти", exitApp);
    console.log(this.showCommands(this.commands));
    this.listenToCommand(this.commands);
  };
}

const app = new App();
module.exports = app;
