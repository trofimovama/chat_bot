const randomNumber = (callback) => {
     random = Math.floor(Math.random() * 10) + 1;
     console.log(random);
    callback();
};

module.exports = randomNumber;
