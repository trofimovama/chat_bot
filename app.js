const {
  getCompliment,
  getDate,
  getWeather,
  exitApp,
  randomNumber,
} = require("./commands/commands.js");
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
        console.log("Такой команды нет, попробуйте еще раз!");
        this.listenToCommand();
      }
      console.log(handler.callback(this.listenToCommand)); // if we remove console.log - undefined(weather func) str is not displayed but other commands stop working
      this.listenToCommand();
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
