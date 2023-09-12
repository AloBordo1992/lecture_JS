// const container = document.querySelector('.container');

// container.addEventListener('click', onClick);

// function onClick(evt) {
//   if (!evt.target.classList.contains('js-box')) {
//     // console.log(evt.currentTarget);
//     return;
//   }
//   console.log(evt.target.dataset.color);
// }

//==============================================================
//==============================================================
// const container = document.querySelector('.js-content');
// let player = 'X';
// let markup = '';
// let historiX = [];
// let histori0 = [];
// const wins = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
//   [1, 4, 7],
//   [2, 5, 8],
//   [3, 6, 9],
//   [1, 5, 9],
//   [3, 5, 7],
// ];

// function createMarkap() {
//   let markup = '';
//   for (let i = 1; i < 10; i += 1) {
//     markup += `<div class=" item js-item" data-id='${i}'></div>`;
//   }
//   container.innerHTML = markup;
// }
// createMarkap();

// container.addEventListener('click', onClick);

// function onClick(evt) {
//   const { target } = evt;
//   if (!target.classList.contains('js-item') || target.textContent) {
//     return;
//   }
//   let = result = false;
//   const id = Number(target.dataset.id);
//   if (player === 'X') {
//     historiX.push(id);
//     result = isWinner(historiX);
//   } else {
//     histori0.push(id);
//     result = isWinner(histori0);
//   }
//   if (result) {
//     console.log(`Winer${player}`);
//     resetGame();
//     return;
//   }
//   isWinner(historiX);
//   target.textContent = player;
//   player = player === 'X' ? '0' : 'X';
// }
// function isWinner(arr) {
//   return wins.some(item => item.every(id => arr.includes(id)));
// }
// function resetGame() {
//   createMarkap();
//   historiX = [];
//   histori0 = [];
//   player = 'x';
// }
//=============================================================
//=============================================================
// const input = document.querySelector('.js-input');
// input.addEventListener('input', _.throttle(onSearch, 800));

// function onSearch(evt) {
//   console.log(evt.target.value);
// }
//============================================================
const input = document.querySelector('.js-input');
input.addEventListener('input', _.debounce(onSearch, 800));

function onSearch(evt) {
  console.log(evt.target.value);
}
