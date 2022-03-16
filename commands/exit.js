const exitApp = () => {
  let counter = 6;

  let exitCountdown = setInterval(() => {
    const transformSeconds = (counter, txt, cases = [2, 0, 1, 1, 1, 2]) => txt[counter % 100 > 4 && counter % 100 < 20 ? 2 
      : cases[counter % 10 < 5 
        ? counter % 10 : 5]];

    counter--;
    console.log(`Осталось:  ${counter} ${transformSeconds(counter, ["секунда", "секунды", "секунд"])}`);
    if (counter === 0) {
      clearInterval(exitCountdown);
      process.exit(0);
    }
  }, 1000);
};

module.exports = exitApp;
