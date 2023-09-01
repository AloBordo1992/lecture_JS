// Примітивні типи даних: імутабельнв типи даних
// - Namber
// -String
// -Boolean
// -undefined
// -Null

// Типи даних:
// -імутабельні
// -мутабельні

//  Метот  indexOf повертає індех значення

//----------------
// const apples = 47;
// const grapes = 135;
// const total = apples + grapes;
// console.log(total);
// const diff = grapes - apples;
// console.log(diff);
// ------------
// let students = 100;
// students = students + 50;
// students += 50;
// console.log(students);
// -----------
// const result = (108 + 223 - 2) * 5;
// console.log(result);
// -----------------
// const value = 27.5;
// // округлює до більшого
// console.log(Math.ceil(value));
// // округляє до меншого
// console.log(Math.floor(value));
// // округлює згідно математичних правил
// console.log(Math.round(value));
// --------------------

// ========================ітерація по масиву=====================================
// ітерація по масиву
// const clients = ['Kolo', 'Petro', 'Sasha', 'Andrij'];

// for (let i = 0; i < clients.length; i += 1) {
//   console.log(clients[i]);
// }

// for (const client of clients) {
//   console.log(client);
// }
// ======================методи масиву=============
// -------------метод split i join-----------------
// Метод splite(delimiter) перкворює рядок в масив
// const name = 'Mango';
// const name_split = name.split('');
// console.log(name_split);

// const messenge = ' JavaScript - це цікаво';
// const messenge_split = messenge.split(' ');
// console.log(messenge_split);

// // Метод join(delimiter) Об'єднує елементи масиву в рядок
// console.log(messenge_split.join(''));
// console.log(messenge_split.join('_'));

//------------метод includes()----------------------
// includes(value) перевіряє, чи містить масив елемент з значенням value
// i повертає true або folse
// const clients = ['Kola', 'Petro', 'Sasha', 'Andrij'];
// console.log(clients.includes('Kola')); //true
// console.log(clients.includes('Tolik')); //folse

// ----------метод push() і pop()----------------------
// Push() додає один або декілька елементів в кінець масиву
// pop() видаляє остатній елемент з кінця масиву і повертає видалений елемент
// const numbers = [3, 4];
// numbers.push(5, 6);
// console.log(numbers);
// numbers.pop(1, 2);
// console.log(numbers);

// ----------------------метод slice (копіює масив)-------
// slice(begin, end) повертає новий масив, що містить копію частини вихідного
// масиву, не змінюючи його.
// const clients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// console.log(clients.slice(1, 3)); // ["Ajax", "Poly"]
// console.log(clients.slice()); // ["Mango", Ajax", "Poly", "Kiwi"]
// console.log(clients.slice(1)); // ["Ajax", "Poly", "Kiwi"]
// console.log(clients.slice(2)); // ["Poly", "Kiwi"]

// ---------------------метод splise-------------
// splice() видаляє, додає і замінює елементи у довільному місці
// const scores = [1, 2, 3, 4, 5];
// // Видаляємо три елементи масиву, починаючи з першого елемента (індекс 0)
// console.log(scores.splice(0, 3));

// const colors = ["red", "green", "blue"];
// colors.splice(2, 0, "purple");
// console.log(colors); // ["red", "green", "purple", "blue"]

// const languages = ["C", "C++", "Java", "JavaScript"];
// // Заміняємо елемент з індексом 1 на новий
// languages.splice(1, 1, "Python");
// console.log(languages); // ["C", "Python", "Java", "JavaScript"]
// // Заміняємо один елемент (з індексом 2) на декілька
// languages.splice(2, 1, "C#", "Swift", "Go");
// console.log(languages); // ["C", "Python", "C#", "Swift", "Go", "JavaScript"]

// -------------------метод concat (повертає новий масив)------------------
//concat()об'єднує два або більше масивів в один.
// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Monkong', 'Singu'];
// const add = oldClients.concat(newClients);
// console.log(add);
