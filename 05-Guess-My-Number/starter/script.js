'use strict';

let secretNumber = Math.floor(Math.random() * 20) + 1;
console.log('START secretnumber', secretNumber);

let score = 20;

let highScore = Number(document.querySelector('.highscore').textContent);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log('highScore', highScore);
  if (document.querySelector('.message').textContent === 'Congrats!') return;
  else {
    if (guess === 0 || guess > 20) {
      document.querySelector('.message').textContent = 'Guess between 1-20';
    } else if (score === 0) {
      document.querySelector('.message').textContent = 'You lose...';
    } else {
      score = score - 1;
      document.querySelector('.score').textContent = score;

      if (guess > secretNumber) {
        document.querySelector('.message').textContent = 'Lower...';
      } else if (guess < secretNumber) {
        document.querySelector('.message').textContent = 'Higher...';
      } else {
        //when winning
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.message').textContent = 'Congrats!';

        if (highScore < score) {
          highScore = score;
          document.querySelector('.highscore').textContent = highScore;
        }
      }
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  secretNumber = Math.floor(Math.random() * 20) + 1;
  console.log('AGAIN secretnumber', secretNumber);
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#000';
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Start guessing...';
});
