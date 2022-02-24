const readline = require("../readline");
const fetch = require("node-fetch");

const getWeather = async function getWeather(callback) {
  readline.question(
    "Введи название города в формате - Moscow,ru: ",
    async (cityName) => {
      let response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=31437cba04d38b2ed41b44a1882df5f7&lang=ru`
      );
      let data = await response.json();
      if (data.cod === "404" || !cityName) {
        console.log("Упс! Такой город не найден!");
      } else {
        let skyDescription = await data.weather[0].description;
        console.log(skyDescription);
        let temperature = await data.main.temp;
        console.log("Текущая температура: ", temperature, "*C");
        let minTemperature = await data.main.temp_min;
        console.log("Минимальная температура сегодня: ", minTemperature, "*C");
        let maxTemperature = await data.main.temp_max;
        console.log("Максимальная температура сегодня: ", maxTemperature, "*C");
        callback();
      }
    }
  );
};

module.exports = getWeather;
