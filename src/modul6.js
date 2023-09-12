// звернення по тегу
// const title = document.querySelector('h1');
// звернення по id
// const title = document.querySelector("#title");
// звернення за класом
// const title = document.querySelector('.js-title');
// console.dir(title);

// title.textContent = 'заміна тексту';
// --------------classList-маніпуляції з класами (додавання, видалення, заміна...)
// title.classList.add('titlr-color');// робота з класами
//---------------styli - додає інлайнові стилі (погана практика)
// title.style.fontSize = '150px';
// title.style.color = 'green';

// const list = document.querySelector('.js-list');
// console.log(list);
// console.dir(list.children);
// console.log([...list.children]);

//====================додавання елементу
// const li = document.createElement('li');
// li.textContent = list.children.length + 1;
// list.append(li);
// console.log(li);
//--------------------------------------------
// const li = `<li>${list.children.length + 1}</li>`;
// list.insertAdjacentHTML('beforeend', li);
//============================================================================
//============================================================================
// const button = document.querySelector('.js-click');
// const container = document.querySelector('.js-container');
// container.addEventListener('click', onClick);
// // Поганою практикою являється одразу передавати функцію.Краще передати її як
// // кол бек функція
// let step = 0;
// function onClick(event) {
//   // найбільш цікаві елементи currentTarget і target
//   step += 5;
//   container.style.marginLeft = `${step}px`;
//   container.style.marginTop = `${step}px`;

//   console.log(event.currentTarget);
// }
//-------------------------------------
// const title = document.querySelector('.js-title');
// const maxLength = 13;
// const totalLength = maxLength + 3;
// title.addEventListener('click', onClick);

// function onClick(evt) {
//   const title = evt.currentTarget;
//   const str = title.textContent.slice(0, maxLength);
//   if (title.textContent.length > totalLength) {
//     const remainder = title.textContent.slice(maxLength);
//     title.setAttribute('data-title', remainder);
//     title.textContent = str + '...';
//   } else {
//     const remainder = title.dataset.title;
//     title.textContent = str + remainder;
//   }
// }
//--------------------------------------
// тип комунікації
// для input використовуємо значення value
// const userName = document.querySelector('.js-input');

// // userName.addEventListener('input', onInput);
// userName.addEventListener('change', onInput);

// function onInput(evt) {
//   console.dir(evt.currentTarget.value);
// }
//---------------------------------------
// const formEl = document.querySelector('.js-form');
// formEl.addEventListener('submit', onSubmit);

// function onSubmit(evt) {
//   // preventDefault- скидає дефолтну поведінку елемента
//   evt.preventDefault();

//   const { userName, userEmail, userAge } = evt.currentTarget.elements;

//   const data = {
//     name: userName.value,
//     email: userEmail.value,
//     age: userAge.value,
//   };
//   console.log(data);
// }
//------------------keydown----------------------
//цікаві елементи code(сталий, основа), key, keyCode
// const container = document.querySelector('.js-container');
// document.addEventListener('keydown', onKey);

// function onKey(evt) {
//   console.log(evt.code);
//   if (evt.code === 'Escape') {
//     container.classList.toggle('togl');
//   }
// }
