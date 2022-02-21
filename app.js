const getDate = require("./commands/date");
const getCompliment = require("./commands/compliment");
const randomNumber = require("./commands/random");
const exitApp = require("./commands/exit");
const getWeather = require("./commands/weather");
const readline = require("./readline");

class App {
  commands = [];

  registerCommand(name, callback) {
    const object = { name, callback };
    this.commands.push(object);
  }

  showCommands() {
    const names = this.commands.map((item) => item.name).join(", ");
    return "Список моих команд: " + names;
  }

  listenToCommand = () => {
    readline.question("Введите команду: ", (userCommand) => {
      const userRequest = this.commands.find(
        (item) => item.name.toLowerCase() === userCommand.toLowerCase()
      );

      if (userRequest?.callback) console.log(userRequest.callback());
      if (userRequest === undefined) {
        console.log("Такой команды нет, попробуйте еще раз!");
      }
      readline.close();
      this.listenToCommand();
    });
  }

  start() {
    this.registerCommand("дата", () => getDate);
    this.registerCommand("комплимент", () => getCompliment());
    this.registerCommand("случайное число", () => randomNumber);
    this.registerCommand("погода", () => getWeather());
    this.registerCommand("выйти", () => exitApp());
    console.log(this.showCommands());
    this.listenToCommand();
  }
}

const app = new App();
module.exports = app;
