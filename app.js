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

  listenToCommand() {
    const readline = require("readline");
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question("Введите команду: ", (userCommand) => {
      const userRequest = this.commands.find(
        (item) => item.name.toLowerCase() === userCommand.toLowerCase()
      );
      console.log(userRequest?.callback());
      if (userRequest === undefined) {
        console.log("Такой команды нет, попробуйте еще раз!");
      }
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
    this.registerCommand("выйти", () => process.exit(0));
    console.log(this.showCommands());
    this.listenToCommand();
  }
}

const app = new App();
module.exports = app;
