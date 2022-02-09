class User {
   name;
   gender;
   greeting(name) {
      if (name.replace(/\s/g, '').length < 3) {
         console.log('Введи имя, содержащее более двух букв!')
      } else if (/\d+/g.test(name)) {
         console.log('Имя не должно содержать цифры!')       
      } else if (/[-~]/gm.test(name)) {
         console.log('Имя не должно содержать специальные символы!')
      } else {
         this.name = name.replace(/\s/g, '');
         const vowels = ['a', 'e', 'i', 'o', 'u', 'y', 'а', 'у', 'о', 'ы', 'э', 'я', 'ю', 'ё', 'и', 'е'];
         const lastChar = this.name.charAt(this.name.length - 1);
         if (vowels.includes(lastChar)) {
            this.gender = 'female';
         } else {
            this.gender = 'male';
         }
      }
   }
   get name() {
      return this.name;
   }
   get gender() {
      return this.gender;
   }
}

module.exports = User;
