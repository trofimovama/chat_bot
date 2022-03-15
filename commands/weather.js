const readline = require("../readline");
const fetch = require("node-fetch");
require('dotenv').config();

const getWeather = async (callback) => {
  readline.question(
    "Введи название города в формате - Moscow,ru: ",
    async (cityName) => {
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${process.env.API_KEY}&lang=ru`
      );
      const data = await response.json();
      if (data.cod === "404" || !cityName) {
        console.log("Упс! Такой город не найден!");
      } else {
        let skyDescription = data.weather[0].description;
        console.log(skyDescription);
        const temperature = data.main.temp;
        console.log("Текущая температура: ", temperature, "*C");
        let minTemperature = data.main.temp_min;
        console.log("Минимальная температура сегодня: ", minTemperature, "*C");
        let maxTemperature = data.main.temp_max;
        console.log("Максимальная температура сегодня: ", maxTemperature, "*C");
        callback();
      }
    }
  );
};

module.exports = getWeather;
