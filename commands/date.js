const getDate = (callback) => {
    date = new Date();
    console.log(date);
    callback();
}

module.exports = getDate;