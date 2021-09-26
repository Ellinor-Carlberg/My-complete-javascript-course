'use strict';

const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const score0 = document.querySelector('#score--0');
const score1 = document.querySelector('#score--1');
const current0 = document.querySelector('#current--0');
const current1 = document.querySelector('#current--1');
const dice = document.querySelector('.dice');
const btnNewGame = document.querySelector('.btn--new');
const btnRollDice = document.querySelector('.btn--roll');
const btnHoldScore = document.querySelector('.btn--hold');

let activePlayer;
let gameOver = true;
const changeActivePlayer = function () {
  if (player0.classList.contains('player--active')) {
    player0.classList.remove('player--active');

    activePlayer = 1;
    player1.classList.add('player--active');
  } else {
    player1.classList.remove('player--active');

    activePlayer = 0;
    player0.classList.add('player--active');
  }
};

const checkWinner = function () {
  if (Number(current0.textContent) >= 100) {
    player0.classList.remove('player--active');
    player0.classList.add('player--winner');
    gameOver = true;
  } else if (Number(current1.textContent) >= 100) {
    player1.classList.remove('player--active');
    player1.classList.add('player--winner');
    gameOver = true;
  }
};

const clearCurrentScore = function () {
  if (!activePlayer) {
    current0.textContent = 0;
  } else {
    current1.textContent = 0;
  }
};
btnNewGame.addEventListener('click', function () {
  gameOver = false;
  score0.textContent = 0;
  score1.textContent = 0;
  current0.textContent = 0;
  current1.textContent = 0;
  activePlayer = 0;
  console.log(activePlayer);
});

btnRollDice.addEventListener('click', function () {
  if (gameOver) return;
  else {
    const newDiceNumber = Math.floor(Math.random() * 6) + 1;
    console.log(newDiceNumber);
    dice.src = `dice-${newDiceNumber}.png`;
    currentScore(newDiceNumber);
  }
});

const currentScore = function (rolledDice) {
  if (!activePlayer) {
    if (rolledDice === 1) {
      clearCurrentScore();
      changeActivePlayer();
    } else {
      current0.textContent = Number(current0.textContent) + rolledDice;
    }
  } else {
    if (rolledDice === 1) {
      clearCurrentScore();
      changeActivePlayer();
    } else {
      current1.textContent = Number(current1.textContent) + rolledDice;
    }
  }
};

btnHoldScore.addEventListener('click', function () {
  if (gameOver) return;
  else {
    if (!activePlayer) {
      score0.textContent =
        Number(score0.textContent) + Number(current0.textContent);
      clearCurrentScore();
      changeActivePlayer();
      checkWinner();
    } else {
      score1.textContent =
        Number(score1.textContent) + Number(current1.textContent);
      clearCurrentScore();
      changeActivePlayer();
      checkWinner();
    }
  }
});
