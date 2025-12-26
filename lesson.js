'use strict'

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", () => {
  console.log(secretNumber);
  // обворачиваем элемент в Number или + что бы прировнять его к числу
  const guess = +document.querySelector(".guess").value;
  // Проверка на число, ! означает что если guess не число, буквально если не guess то .....
  if (!guess) {
    displayMessage("Вы не ввели число!");
  } else if (guess === secretNumber) {
    // Логика если выиграли
    displayMessage("Вы выиграли!");
    document.querySelector("body").style.background = "green";
    document.querySelector(".number").textContent = guess;

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore; // если количество за которое ты угадал число больше чем рекорд то оно записываеться
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      if (guess > secretNumber) {
        displayMessage("Число меньше");
        score--;
        document.querySelector(".score").textContent = score;
      } else if (guess < secretNumber) {
        displayMessage("Число больше");
        score--;
        document.querySelector(".score").textContent = score;
      }
    } else {
      displayMessage("Вы проиграли!");
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.background = "red";
    }
  }
});

document.querySelector(".again").addEventListener("click", () => {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20
  displayMessage("Начните угадывать...");
  document.querySelector(".score").textContent = score;
  document.querySelector("body").style.background = "black";
  document.querySelector(".number").textContent = "?";
});