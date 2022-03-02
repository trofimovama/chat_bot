const exitApp = () => {
  let counter = 6;
  let exitCountdown = setInterval(function () {
    counter--;
    if (counter === 5) {
      console.log("Осталось: ", counter, " секунд");
    }
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
  }, 1500);
};

module.exports = exitApp;
