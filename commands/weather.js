const readline = require("../readline");
const fetch = require("node-fetch");
require("dotenv").config();

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
        const skyDescription = data.weather[0].description;
        console.log(skyDescription);
        const temperature = data.main.temp;
        const minTemperature = data.main.temp_min;
        const maxTemperature = data.main.temp_max;

        const weatherData = [
          {
            title: "Текущая температура: ",
            value: temperature,
          },
          {
            title: "Минимальная температура сегодня: ",
            value: minTemperature,
          },
          {
            title: "Максимальная температура сегодня: ",
            value: maxTemperature,
          },
        ];
        
        weatherData.forEach(element => {
          console.log(element.title, element.value, '*C');
        })

        callback();
      }
    }
  );
};

module.exports = getWeather;
