const exitApp = () => {
  let counter = 5;
    console.log("Осталось: ", counter, " секунд")
  let exitCountdown = setInterval( () => {
    counter--;
    if (counter === 4 || counter === 3 || counter === 2) {
      console.log("Осталось: ", counter, " секунды");
    }
    if (counter === 1) {
      console.log("Осталась: ", counter, " секунда");
    }
    if (counter === 0) {
      clearInterval(exitCountdown);
      process.exit(0);
    }
  }, 1000);
};

module.exports = exitApp;
