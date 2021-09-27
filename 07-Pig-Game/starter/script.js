'use strict';

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0 = document.querySelector('#score--0');
const score1 = document.querySelector('#score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const dice = document.querySelector('.dice');
const btnNewGame = document.querySelector('.btn--new');
const btnRollDice = document.querySelector('.btn--roll');
const btnHoldScore = document.querySelector('.btn--hold');

let gameOver = false;
let activePlayer = 0;
let currentScore = 0;

const changeActivePlayer = function () {
  if (!activePlayer) {
    player0El.classList.remove('player--active');
    current0El.textContent = 0;
    activePlayer = 1;
    player1El.classList.add('player--active');
  } else {
    player1El.classList.remove('player--active');
    current1El.textContent = 0;
    activePlayer = 0;
    player0El.classList.add('player--active');
  }
};

const checkWinner = function () {
  if (Number(score0.textContent) >= 100) {
    player0El.classList.add('player--winner');
    gameOver = true;
  } else if (Number(score1.textContent) >= 100) {
    player1El.classList.add('player--winner');
    gameOver = true;
  } else {
    changeActivePlayer();
  }
};

const updateCurrentScore = function (rolledDice) {
  if (rolledDice === 1) {
    currentScore = 0;
    changeActivePlayer();
  } else {
    currentScore = rolledDice + currentScore;
    if (!activePlayer) {
      current0El.textContent = currentScore;
    } else {
      current1El.textContent = currentScore;
    }
  }
};

btnNewGame.addEventListener('click', function () {
  if (gameOver) {
    if (!activePlayer) player0El.classList.remove('player--winner');
    else {
      player1El.classList.remove('player--active');
      player1El.classList.remove('player--winner');
      player0El.classList.add('player--active');
    }
  } else {
    if (activePlayer) player1El.classList.remove('player--active');
    player0El.classList.add('player--active');
  }
  gameOver = false;

  dice.classList.add('hidden');
  score0.textContent = 0;
  score1.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  activePlayer = 0;
});

btnRollDice.addEventListener('click', function () {
  if (!gameOver) {
    const newDiceNumber = Math.floor(Math.random() * 6) + 1;
    dice.src = `dice-${newDiceNumber}.png`;
    if (dice.classList.contains('hidden')) dice.classList.remove('hidden');
    updateCurrentScore(newDiceNumber);
  }
});

btnHoldScore.addEventListener('click', function () {
  if (!gameOver) {
    if (!activePlayer) {
      score0.textContent = Number(score0.textContent) + currentScore;
    } else {
      score1.textContent = Number(score1.textContent) + currentScore;
    }
    currentScore = 0;
    checkWinner();
  }
});
