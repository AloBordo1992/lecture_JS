// ===========================колбек==============================
// function first(y) {
//   console.log(1);
//   y();
// }

// function second(a, b) {
//   console.log(a * b);
// }

// first(function () {
//   second(5, 7);
// });
// // second(2, 2);

// ====================Перебераючий метод масиву for Each============
// повертає undefained
// мотує масив
// const arr = [2, 6, 1, 7, 3];
// // item- ітеруючий елемент
// // idx- індекс поточного елементу
// // arr- масив який ітеруємо
// arr.forEach(function (item, idx, arr) {});

// ===================== метод map (повертає новий масив)==============
// Метод map(callback) використовується для трансформації масиву. Він
// викликає колбек-функцію для кожного елемента вихідного масива, а
// результат її роботи записує у новий масив, який і буде результатом
// виконання методом
// const arr = [1, 2, 3, 4, 5, 6, 7];
//-----------
// const result = arr.map((item, idx, arr) => item * 2);
//-----------
// const result = arr.map(item => {
//   if (!(item % 2)) {
//     return item * 2;
//   }
//   return item;
// });
// -----------
// const result = arr.map(item => (!(item % 2) ? item * 2 : item));
//------------
// console.log(result);
// console.log(arr);
//-----------

// ==================Метод flatMap() (повертає новий масив)===========
// Метод flatMap(callback) застосовується у випадках, коли результат-
// це багатовимірний масив, який необхідно розглядати.
// const arr = [
//   { name: 'User1', skills: ['html', 'css'] },
//   { name: 'User2', skills: ['js', 'react'] },
//   { name: 'User3', skills: ['node.js', 'express'] },
// ];
//----------------
// const result = arr.flatMap(item => item.skills);
//----------------
// const result = arr.map(item => item.skills.map(skill => skill));

// console.log(result);

// ================== Метод find()====================================
// Метод find(callback) дозволяє знайти і повернути перший відповідний
// елемент, після чого  перебирання припинняється. Тобто він шукає до
// першого збігу
// --------------
// const arr = [1, 2, 3, 4, 5, 6, 7];
// const result = arr.find(item => item > 5);
// console.log(result);
// --------------
// const arr = [
//   { name: 'User1', skills: ['html', 'css'] },
//   { name: 'User2', skills: ['js', 'react'] },
//   { name: 'User3', skills: ['node.js', 'express'] },
// ];

// const result = arr.find(item => item.skills.includes('js'));
// console.log(result);

// ==================== Метод findIndex()==============================
// Метод findIndex(callback) - це сучасна заміна методу indexOf().
//  Дозволяє виконувати пошук за складнішими умовами, ніж просто
//рівність. Використовується як для пошуку у масиві примітивів, так і
//в масиві об'єктів.
//---------
// const arr = [
//   { name: 'User1', skills: ['html', 'css'] },
//   { name: 'User2', skills: ['js', 'react'] },
//   { name: 'User3', skills: ['node.js', 'express'] },
// ];

// const result = arr.findIndex(item => item.skills.includes('node.js'));
// console.log(result);

// ====================== Метод filter()повертає новий масив===========
// Метод filter(callbeck) використовується дл  єдиної операції -
// фільтрації масиву ,коли необхідно вибрати більше одного елементу з
// колекції за певним критерієм.
// const numbers = [1, 2, 3, 4, 5, 6, 7];
//----------
// const result = numbers.filter(item => !(item % 2));
//----------
// const result = numbers
//   .filter(item => !(item % 2))
//   .map((item, _, arr) => {
//     console.log(arr);
//     return item * 2;
//   });
// console.log(result);

// ==================== Метод every() =================================
// Перевіряє, чи проходять всі елементи масиву тест колбек-функції.
// Повертає true або folse.

// const numbers = [1, 2, 3, 4, 5, 6, 7];
// const numbers2 = [2, 4, 6, 8];
// const result = numbers2.every(item => !(item % 2));

// console.log(result);
//-----------------------
// const arr = [
//   { name: 'User1', age: 22 },
//   { name: 'User2', age: 18 },
//   { name: 'User3', age: 36 },
// ];

// const result = arr.every(item => item.age >= 18);

// console.log(result);

// =================== метод some() ===================================
//Перевіряє, чи проходить хоча б один елемент масиву тест
// колбек-функції. Повертає true або false.
// const arr = [
//   { name: 'User1', age: 7 },
//   { name: 'User2', age: 12 },
//   { name: 'User3', age: 36 },
// ];
// const result = arr.some(item => item.age >= 18);
// console.log(result);

//=================== Метод sort (мотує вихідний масив)================
// Метод sort() сортує елементи масиву, але на відміну від інших
// методів перебирання, він сортує вихідний масив

// const numbers = [15, 35, 2, 65, 31, 12];
// const result = numbers.sort((a, b) => a - b);
// const result = [...numbers].sort((a, b) => a - b);
// console.log(numbers);
// console.log(result);
//--------------------------------------

// const str = ['g', 'w', 'a', 'b', 'f', 'F'];
//----------------------
// const resultstr = [...str].sort();
//----------------------
// const resultstr = [...str].sort((a, b) => a.localeCompare(b));
// console.log(str);
// console.log(resultstr);
//----------------------------------------------
// const arr = [
//   { name: 'Den', age: 7 },
//   { name: 'Slava', age: 12 },
//   { name: 'Max', age: 36 },
// ];
// arr.sort((a, b) => a.name.localeCompare(b.name));
// console.table(arr);

// =============== Метод reduce() не мотую масив =======================

// const numbers = [15, 35, 2, 65, 31, 12];
// // numbers.reduce((acc, item)
// // const result = numbers.reduce((acc, item) => {
// //   console.log('acc', acc);
// //   console.log('item', item);
// //   console.log('--------------------');
// //   return acc + item;
// // }, 0);
// //-------------------------------------
// const result = numbers.reduce((acc, item) => {
//   console.log('acc', acc);
//   console.log('item', item);
//   acc.push(item * 2);
//   return acc;
// }, []);
// //------------------------------------
// // const result = numbers.reduce((acc, item) => {
// //     console.log('acc', acc);
// //     console.log('item', item);
// //     return acc.push(item * 2);
// //   }, []);
// //------------------------------------
// console.log(result);
