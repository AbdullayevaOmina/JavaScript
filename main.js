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
//   "\n",
//   "Familiya:		" + lname,
//   "\n",
// 	"Tug'ilgan sana: 	" + birthday,
//   "\n",
//   "Yashash manzil: 	" + residential_address,
//   "\n",
//   "Email: 	" + email,
//   "\n",
//   "Telefon raqam: 	" + tel,
//   "\n",
//   "Qiziqishlar: 	" + hobby,
//   "\n",
//   "Savol 1: 	" + question1,
//   "\n",
//   "Savol 2: 	" + question2
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
  "\n",
  "Familiya:		" + user_data.lname,
  "\n",
  "Tug'ilgan sana: 	" + user_data.birthday,
  "\n",
  "Yashash manzil: 	" + user_data.residential_address,
  "\n",
  "Email: 	" + user_data.email,
  "\n",
  "Telefon raqam: 	" + user_data.tel,
  "\n",
  "Qiziqishlar: 	" + user_data.hobby,
  "\n",
  "Savol 1: 	" + user_data.question1,
  "\n",
  "Savol 2: 	" + user_data.question2,
);