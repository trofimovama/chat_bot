const readline = require("../readline");

const getWeather = (callback) => {
  const request = require("request");
  readline.question(
    "Введи название города в формате - Moscow,ru: ",
    (cityName) => {
      request(
        `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=31437cba04d38b2ed41b44a1882df5f7&lang=ru`,
        (_error, _response, body) => {
          const data = JSON.parse(body);
          if (data.cod === "404") {
            console.log("Такой город не найден!");
            getWeather(); // даём попытку ввести город правильно
            return;
          } else {
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
            callback(); // не завершаем программу, опции
          }
        }
      );
    }
  );
};

module.exports = getWeather;
