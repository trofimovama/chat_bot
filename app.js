const { request } = require("http");

class App {
  commands = [];

  registerCommand(name, callback) {
    const object = { name: name, callback: callback };
    this.commands.push(object);
  }

  showCommands() {
    const names = this.commands.map((item) => item.name);
    return "Привет, я чат-бот! Список моих команд: " + names.join(", ") + " :)";
  }

  listenToCommand() {
    const readline = require("readline");
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question("Введите команду: ", (userCommand) => {
      const command1 = this.commands.find(item => item.name === userCommand);
      console.log(command1?.callback());
      rl.close();
      this.listenToCommand();
    });
  }

  start() {
    this.registerCommand("дата", () => new Date());
    this.registerCommand("комплимент", () => "Ты в классной форме!");
    this.registerCommand(
      "случайное число",
      () => Math.floor(Math.random() * 10) + 1
    );
    this.registerCommand("до встречи", () => process.exit(0));
    console.log(this.showCommands());
    this.listenToCommand();
  }
}

module.exports = App;
