class User {
   name;
   gender;
   greeting(name) {
      if (name.length < 3) {
         console.log('Insert the right name')
      } else if (/\d+/g.test(name)) {
         console.log('The name should not contain digits')
         
      } else if (/[^a-zA-Z ]/g.test(name)) {
         console.log('The name should not contain symbols')
      } else {
         this.name = name.replace(/\s/g, '');
         const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
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
