"use strict";

const btnAgain = document.querySelector(".again");
const btnCheck = document.querySelector(".check");
const number = document.querySelector(".number");
const body = document.querySelector("body");

let randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
let gameOver = false;
let attempts = 0;

const resetStyles = () => {
  body.classList.remove("win", "lose");
};

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

btnCheck.addEventListener("click", () => {
  if (gameOver) return;
  console.log(randomNumber);

  const guess = +document.querySelector(".guess").value;
  attempts++;

  if (!guess) {
    displayMessage("Вы не ввели число!");
  } else if (guess === randomNumber) {
    gameOver = true;
    displayMessage("Вы выиграли!");
    number.textContent = guess;
    body.classList.add("win");

    if (highscore === 0 || attempts < highscore) {
      highscore = attempts;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== randomNumber) {
    if (score > 1) {
      if (guess > randomNumber) {
        displayMessage("Число меньше");
        score--;
        document.querySelector(".score").textContent = score;
      } else if (guess < randomNumber) {
        displayMessage("Число больше");
        score--;
        document.querySelector(".score").textContent = score;
      }
    } else {
      displayMessage("Вы проиграли!");
      gameOver = true;
      document.querySelector(".score").textContent = 0;
      body.classList.add("lose");
      number.textContent = randomNumber;
    }
  }
});

btnAgain.addEventListener("click", () => {
  gameOver = false;
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  displayMessage("Начните угадывать...");
  document.querySelector(".score").textContent = score;
  document.querySelector("body").classList.add("main");
  number.textContent = "?";
  document.querySelector(".guess").value = "";

  resetStyles();
});
