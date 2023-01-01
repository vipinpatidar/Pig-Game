'use strict';
const diceImg = document.querySelector('.dice');
const rollBtn = document.querySelector('.btn-roll');
const player = document.querySelector('.player');
const player1 = document.querySelector('.player-0');
const player2 = document.querySelector('.player-1');
const currentScore1 = document.querySelector('#current-0');
const currentScore2 = document.querySelector('#current-1');
const HoldBtn = document.querySelector('.btn-hold');
const scoreData1 = document.querySelector('#score-0');
const scoreData2 = document.querySelector('#score-1');

scoreData1.textContent = 0;
scoreData2.textContent = 0;

let currentScore = 0;
let score = [0, 0];
let activePlayer = 0;
let isPlaying = true;
diceImg.classList.add('hidden');

const switchPlayer = function () {
  document.querySelector(`#current-${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player1.classList.toggle('player-active');
  player2.classList.toggle('player-active');
};

rollBtn.addEventListener('click', function () {
  if (isPlaying) {
    diceImg.classList.remove('hidden');
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceImg.src = `dice-${dice}.png`;
    currentScore += dice;
    if (dice !== 1) {
      document.querySelector(`#current-${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

HoldBtn.addEventListener('click', function () {
  if (isPlaying) {
    score[activePlayer] += currentScore;
    document.querySelector(`#score-${activePlayer}`).textContent =
      score[activePlayer];

    if (score[activePlayer] >= 100) {
      isPlaying = false;
      diceImg.classList.add('hidden');
      document
        .querySelector(`.player-${activePlayer}`)
        .classList.add('player-winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
});

document.querySelector('.btn-new').addEventListener('click', () => {
  window.location.reload();
});
