// let fname = prompt("Ismingizni kirirting");
// let lname = prompt("Familiyangizni kirirting");
// let age = prompt("Yoshingizni kirirting");
// let birthday = prompt("Tug'ilgan sanangizni kiriting. Namuna: dd/mm/yyyy");
// let residential_address = prompt("Yashash manzilingizni kiriting");
// let email = prompt("Emailingizni iriting");
// let tel = prompt("Telefon raqamingizni kriting");
// let hobby = prompt("Yoqtirgan mashg'ulotlaringizni yozing");
// let question1 = prompt("Dasturlash sizga yoqadimi?");
// let question2 = prompt("Coding uchun kuniga qancha vaqt ajratasiz?");


// console.log(
//   "Ism: 	" + fname,
//   "\nFamiliya:		" + lname,
// 	"\nTug'ilgan sana: 	" + birthday,
//   "\nYashash manzil: 	" + residential_address,
//   "\nEmail: 	" + email,
//   "\nTelefon raqam: 	" + tel,
//   "\nQiziqishlar: 	" + hobby,
//   "\nSavol 1: 	" + question1,
//   "\nSavol 2: 	" + question2
// );



// ----- ojectiv ------

let user_data = {
  fname: prompt("Ismingizni kirirting"),
  lname: prompt("Familiyangizni kirirting"),
  age: prompt("Yoshingizni kirirting"),
  birthday: prompt("Tug'ilgan sanangizni kiriting. Namuna: dd/mm/yyyy"),
  residential_address: prompt("Yashash manzilingizni kiriting"),
  email: prompt("Emailingizni iriting"),
  tel: prompt("Telefon raqamingizni kriting"),
  hobby: prompt("Yoqtirgan mashg'ulotlaringizni yozing"),
  question1: prompt("Dasturlash sizga yoqadimi?"),
  question2: prompt("Coding uchun kuniga qancha vaqt ajratasiz?"),
};

console.log(
  "Ism: 	" + user_data.fname,
  "\nFamiliya:		" + user_data.lname,
  "\nTug'ilgan sana: 	" + user_data.birthday,
  "\nYashash manzil: 	" + user_data.residential_address,
  "\nEmail: 	" + user_data.email,
  "\nTelefon raqam: 	" + user_data.tel,
  "\nQiziqishlar: 	" + user_data.hobby,
  "\nSavol 1: 	" + user_data.question1,
  "\nSavol 2: 	" + user_data.question2,
);