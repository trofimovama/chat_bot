const WeatherFunction = require("../get_weather_package");
const readline = require("../readline");

const getWeather = (callback) => {
      readline.question ("Введи название города в формате - Moscow,ru: ", (cityName) =>
      {
        WeatherFunction(cityName);
        callback();
      }  
    )  
}



module.exports = getWeather;
