'use strict';

let secretNumber = Math.floor(Math.random() * 20) + 1;
console.log('START secretnumber', secretNumber);

let score = 20;

let highScore = Number(document.querySelector('.highscore').textContent);

const displayMessage = function (msg) {
  document.querySelector('.message').textContent = msg;
};

//click on guess button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log('highScore', highScore);

  //user click the button but have won this round already
  if (document.querySelector('.message').textContent === 'Congrats!') return;
  //round still going
  else {
    //guess is not between 1-20
    if (guess === 0 || guess > 20) {
      displayMessage('Guess between 1-20');
    }
    //The game is over, all guesses have been made for this round
    else if (score === 0) {
      displayMessage('You lose...');
    }
    //The game is still going, the guess is valid
    else {
      score = score - 1;
      document.querySelector('.score').textContent = score;
      //right guess
      if (guess === secretNumber) {
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = ' 30rem';
        displayMessage('Congrats!');
        if (highScore < score) {
          highScore = score;
          document.querySelector('.highscore').textContent = highScore;
        }
        //wrong guess
      } else displayMessage(guess > secretNumber ? 'Lower...' : 'Higher...');
    }
  }
});

//click on play again button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  secretNumber = Math.floor(Math.random() * 20) + 1;
  console.log('AGAIN secretnumber', secretNumber);
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#000';
  document.querySelector('.number').style.width = ' 15rem';
  document.querySelector('.guess').value = '';
  displayMessage('Start guessing...');
});
