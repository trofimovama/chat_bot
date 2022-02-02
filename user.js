class User {
   name;
   gender;
   greeting(name) {
      if (name.length < 3) {
         console.log('Введите имя, содержащее более двух букв!')
      } else if (/\d+/g.test(name)) {
         console.log('Имя не должно содержать цифры!')
         
      } else if (/[^a-zA-Z ]/g.test(name)) {
         console.log('Имя не должно содержать специальные символы!')
      } else {
         this.name = name.replace(/[^\x00-\x7F]/gm, '');
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
