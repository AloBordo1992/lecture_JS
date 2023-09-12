// ===========================Методи для роботи з обєктами=============
// -------------Метод Object.create()----------
// Object.create створює і повертає новий об'єкт, зв'язуючи його з
//  об'єктом animal. Тому можна отримати значення властивості legs,
//  звернувшись до нього як dog.legs, хоча він відсутній в
// об'єкті dog - це невласна властивість з об'єкта animal
// const animal = {
//     legs: 4,
//   };
//   const dog = Object.create(animal);
//   dog.name = "Манго";

//   console.log(dog); // {name: 'Манго'}
//   console.log(dog.name); // 'Манго'
//   console.log(dog.legs); // 4

// ---------------Метод Object.keys----------------------------------
// Object.keys(obj), який приймає об'єкт і повертає масив ключів його
// власних властивостей. Якщо об'єкт не має властивостей, метод
// поверне порожній масив.

// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     rating: 8.38,
//   };
//   const keys = Object.keys(book);
//   console.log(keys); // ['title', 'author', 'genres', 'rating']

// ----------------Метод Object.values()-----------------
// Object.values(obj) повертає масив значень його власних властивостей.
// Якщо в об'єкті відсутні властивості, метод Object.values(obj)
//поверне порожній масив.

// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(keys); // ['title', 'author', 'rating']

// const values = Object.values(book);
// console.log(values); // ['The Last Kingdom', 'Bernard Cornwell', 8.38]

//---------------Метод Object.entries()---------------
//Object.entries(obj) повертає масив записів, кожен елемент якого,
// буде ще один масив з 2-х елементів: імені властивості і значення
//цієї властивості з об'єкта obj.
// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   rating: 8.38,
// };
// const entries = Object.entries(book);
// console.log(entries);
// // [["title", "The Last Kingdom"], ["author", "Bernard Cornwell"], ["rating", 8.38]]

//-----------Синтаксис spread і rest----------------------------------------------
// const arr1 = [12, 22, 3, 14, 45, 16, 57];
// // const min = Math.min(...arr1);
// // console.log(min);
// // const arr2 = [...arr1];
// // console.log(arr1 === arr2);
// function foo(first, second) {
//   console.log(first, second);
// }
// foo(...arr1);
// ================Деструкткризація===================================================

// const arr = [1, 2, 3];
// const [, , third] = arr;
// console.log(third);
//---------------------------------------------------------------------
// const user = {
//   name: 'Test',
//   age: 11,
//   skills: {
//     html: true,
//     css: true,
//     js: false,
//     cars: {
//       audi: 'a6',
//       bmw: 'x5',
//     },
//   },
//   longuages: [{ html: true }, { css: false }],
// };

// // for (const longuages of user.longuages) {
// //   console.log(longuages);
// // }

// // const{ longuages:[html]}= user;
// // console.log(html);

// // const { age, name: userName } = user;
// // console.log(userName);
// // console.log(age);
// //

// // const {
// //   name,
// //   skills: { js },
// // } = user;
// // console.log(js);
//--------------------------------------------------------------------
// const user = [
//   { name: 'User1', lanugage: 'html', cars: { audi: 'A6', bmw: 'X5' } },
//   { name: 'User2', lanugage: 'scc', cars: { audi: 'A8', bmw: 'X6' } },
//   { name: 'User3', lanugage: 'js', cars: { audi: 'A7' } },
// ];
// for (const {
//   name,
//   cars: { audi, bmw = 'None' },
// } of user) {
//   console.log(name, bmw);
// }
// -------------------------------------------------------------------
// function foo({ name, cars: { bmw = 'None' } = {} }) {
//   console.log(bmw);
// }
// foo({ name: 'User1', lanugage: 'html', cars: { audi: 'A6', bmw: 'X5' } });
// foo({ name: 'User2', lanugage: 'scc', cars: { audi: 'A8' } });
// -------------------------------------------------------------------
// ==================== Завдання ================================================

// const { age, name: userName } = user;
// console.log(userName);
// console.log(age);
// const user = {
//   name: 'yura',
//   age: 30,
//   languages: {
//     html: false,
//     css: true,
//     js: true,
//     'react natiwe': false,
//   },
//   sayHello() {
//     console.log(`My name ${this.name}`);
//   },
//   iKnow() {
//     const keys = Object.keys(this.languages);
//     console.log(keys);
//     // for (const key in this.languages) {
//     //   if (this.languages[key]) console.log(key);
//     // }
//   },
// };

// user.iKnow();
// const user2 = Object.create(user);
// user2.name = 'Den';

// user2.sayHello();
// user.sayHello();
