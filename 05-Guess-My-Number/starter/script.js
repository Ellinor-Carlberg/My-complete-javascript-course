'use strict';

/* console.log((document.querySelector('.message').textContent = 'halloj'));
document.querySelector('.message');
document.querySelector('.guess').value = 23;
 */

let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highScore = document.querySelector('.highscore').textContent;
console.log(secretNumber);
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = 'No number...';
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = 'Lower...';
    document.querySelector('.score').textContent = score > 0 ? score-- : 0;
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = 'Higher...';
    document.querySelector('.score').textContent = score > 0 ? score-- : 0;
    console.log('Higher...', score);
  } else {
    document.querySelector('.message').textContent = 'Congrats!';
    document.querySelector('.highscore').textContent =
      score > highScore ? score : highScore;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.floor(Math.random() * 20) + 1;
});
