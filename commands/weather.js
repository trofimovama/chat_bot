const readline = require("../readline");
const fetch = require("node-fetch");

const getWeather = async function getWeather(callback) {
  readline.question(
    "Введи название города в формате - Moscow,ru: ",
    (cityName) => {
      fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=31437cba04d38b2ed41b44a1882df5f7&lang=ru`
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          const temperature = data.main.temp;
          const skyDescription = data.weather[0].description;
          const minTemperature = data.main.temp_min;
          const maxTemperature = data.main.temp_max;
          console.log(skyDescription);
          console.log("Текущая температура: ", temperature, "*C");
          console.log(
            "Минимальная температура сегодня: ",
            minTemperature,
            "*C"
          );
          console.log(
            "Максимальная температура сегодня: ",
            maxTemperature,
            "*C"
          );
          callback();
        })
        .catch((_error) => {
          console.log("Такой город не найден!");
          callback();
        });
    }
  );
};

module.exports = getWeather;
