const User = require('./user')
const readline = require('./readline');


readline.question('Как тебя зовут? ', function (name) {
   const user = new User();
   user.greeting(name);
   if (user.name != null) {
      let end1 = 'ая';
      let end2 = 'ая';
      const userName = user.name.charAt(0).toUpperCase() + user.name.slice(1);
      if (user.gender == 'male') {
         end1 = 'ой';
         end2 = 'ый';
      }
      console.log(`Привет, ${userName}! Ты так${end1} красив${end2} сегодня!`);
   }
   readline.close();
});


readline.on('close', function () {
   process.exit(0);
});

