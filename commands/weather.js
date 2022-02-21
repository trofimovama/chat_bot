const readline = require("../readline");  

const getWeather = () => {
  const request = require("request");
   readline.question( "Введи название города в формате - Moscow,ru: ", (cityName) => {
      request(
        `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=31437cba04d38b2ed41b44a1882df5f7&lang=ru`,
        (_error, _response, body) => {
          const data = JSON.parse(body);
          console.log(data);
          if (data.cod === "404") {
            console.log("Такой город не найден!");
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
          }
        }
      );
    }
  );
  // readline.close();
};

module.exports = getWeather;


// const request = require("request");
// const dotenv = require("dotenv").config();

// const getWeather = () => {
//   const readline = require("readline");
//   const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
//   });
//   rl.question(
//     'Введи название города в формате "Например: Minsk,by:" ',
//     function (address) {
//       const url = `http://api.openweathermap.org/data/2.5/weather?q=${address}&units=metric&appid=${process.env.API_KEY}&lang=ru`;
//       // fetch
//       console.log(url);
//       if (address === process.argv[2]) {
//         request(url, (error, response, body) => {
//           const data = JSON.parse(body);
//           console.log(`Сейчас за окошком  ${data.main.temp}С`);
//         });
//       } else {
//         return console.log("Введи корректно название города!");
//       }
//     }
//   );
// };


// const url = `http://api.openweathermap.org/data/2.5/weather?q=${address}&units=metric&appid=${process.env.API_KEY}&lang=ru`;

// if (!address) {
//     return console.log('Введи корректно название города!')
// };

// request(url, (error, response, body) => {
// const data = JSON.parse(body);
// console.log(`Сейчас за окошком  ${data.main.temp}С`);
// });
