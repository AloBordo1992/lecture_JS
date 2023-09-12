// декларейшин експрешин
// function foo() {}

//арол фанкшин

// 'use strict';

// function foo() {
//   console.log(this);
// }
// foo();
// //-------------------
// const boo = function name() {
//   console.log(this);
// };
// boo();
// //------------------
// const arrow = () => {
//   console.log(this);
// };
// arrow();
// ==============================
// const objA = {
//   name: 'User name',
//   nickName() {
//     console.log(this);
//   },
// };
// objA.nickName();
//----------------------------
// const objB = {
//   name: 'User name',
//   nickName: () => {
//     console.log(this);
//   },
// };
// objB.nickName();
//------------------------------
// const objA = {
//   name: 'User name',
//   skills: {
//     mySkill: 'html',
//     nickName() {
//       console.log(this);
//     },
//   },
// };
// objA.skills.nickName();
// ---------------------------------
// const objA = {
//   name: 'User name',
//   skills: {
//     mySkill: 'html',
//     sameValue: {
//       value: 10,
//       nickName() {
//         console.log(this);
//       },
//     },
//   },
// };
// objA.skills.sameValue.nickName();
//----------------------------------
// const objA = {
//   name: 'User name',
//   skills: {
//     mySkill: 'html',
//     sameValue: {
//       value: 10,
//       foo: () => {
//         const nickName = () => {
//           console.log(this);
//         };
//         nickName();
//       },
//     },
//   },
// };
// objA.skills.sameValue.foo();

// ======================== Методти функції=====================

// ====================Метод call() ======================================
// Метод call() передає контаекст this іншому методу обєкта.
// Виклиикає тут і зараз
// foo.call(obj, arg1, arg2, ...)

// const objA = {
//   name: 'A',
//   myAge(a, b) {
//     console.log(this, a, b);
//   },
// };
// objA.myAge(22, 44);
// //------
// const objB = {
//   name: 'B',
// };
// objA.myAge.call(1, 2);

// ======================= Метод apply================
// Метод apply - це аналог методу call за винятком того, що синтаксис
// передачі аргументів вимагає не перерахування, а масив, навіть якщо
/// аргумент всього один.
// foo.apply(obj, [arg1, arg2, ...])

// const objA = {
//   name: 'A',
//   myAge(a, b) {
//     console.log(this, a, b);
//   },
// };
// objA.myAge(22, 44);
// //------
// const objB = {
//   name: 'B',
// };
// objA.myAge.apply([1, 2]);

//======================== Метод bind===============================
// Метод bind створює і повертає копію функції foo з прив'язаним
// контекстом obj і аргументами arg1, arg2 тощо. Утворюється
//копія функції, яку можна передати куди завгодно і викликати коли
//завгодно.
// foo.bind(obj, arg1, arg2, ...)

// const objA = {
//   name: 'A',
//   myAge(a, b, c, d) {
//     console.log(this, a, b, c, d);
//     return 'some value';
//   },
// };
// const objB = {
//   name: 'B',
// };
// const result = objA.myAge.bind(objB);
// result(10, 20, 30, 40);
// ===============================================================
// ======================КЛАСИ====================================
// ===============================================================
class User {
  static counter = 0;
  static addUser() {
    this.counter += 1;
    console.log(`Number of users ${this.counter}`);
  }
  #location;
  constructor({ name, email, age = 18, location = 'world', password } = {}) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.#location = location;
    this.password = password;
    User.addUser();
  }
  sayHello() {
    console.log(this.name);
  }
  //повертає значення ключа
  get locale() {
    return this.#location;
  }
  // змінбє значення ключа
  set locale(city) {
    const value = prompt('Enter password');
    if (value === this.password) {
      this.#location = city;
      console.log(this.#location);
    } else {
      console.log('Хакер ? ');
    }
  }
}

const test = new User({
  name: 'User A',
  email: 'test@gmail.com',
  location: 'Lviv',
  password: 'qwerty111',
});
const test1 = new User({
  name: 'User B',
  email: 'gmeil@gmail.com',
  age: 99,
});

// console.log(test);
// console.log(test1);
