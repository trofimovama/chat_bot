const readline = require("./readline");
const COMMANDS = require('./constants');

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
      handler.callback(this.listenToCommand);
    });
  };

  start () {
    COMMANDS.forEach(commandElement => {
      this.registerCommand(commandElement.name, commandElement.value);
    });
    console.log(this.showCommands(this.commands));
    this.listenToCommand(this.commands);
  };
}

const app = new App();
module.exports = app;
