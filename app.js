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
    readline.question("Введите команду: ", (inputCommandName) => {
      const handler = this.commands.find(
        (item) => item.name.toLowerCase() === inputCommandName.toLowerCase()
      );
if (!handler?.callback) {
  // если команды нет:
  console.log("Такой команды нет, попробуйте еще раз!");
   return this.listenToCommand();
} else {
 // а если есть такая команда:
     handler.callback(this.listenToCommand);
    }
  });
  };

  start() {
    this.registerCommand("дата", () => getDate);
    this.registerCommand("комплимент", () => getCompliment());
    this.registerCommand("случайное число", () => randomNumber);
    this.registerCommand("погода", (callback) => getWeather(callback));
    this.registerCommand("выйти", () => exitApp());
    console.log(this.showCommands());
    this.listenToCommand();
  }
}

const app = new App();
module.exports = app;
