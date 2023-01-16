const squares = document.querySelectorAll(".square");
const animal = document.querySelector(".animal");
const timeLeft = document.getElementById("time-left");
const score = document.getElementById("score");

let result = 0;
let touchPosition;
let currentTime = 30;

function randomSquare() {
  squares.forEach((square) => {
    square.classList.remove("animal");
  });

  let randomSquare = squares[Math.floor(Math.random() * 9)];
  randomSquare.classList.add("animal");

  touchPosition = randomSquare.id;
}

squares.forEach((square) => {
  square.addEventListener("mousedown", () => {
    if (square.id == touchPosition) {
      result++;
      score.textContent = result;
      // console.log(score)
      touchPosition = null;
    }
  });
});

function moveAnimal() {
  let timerId = null; //stop this timer
  timerId = setInterval(randomSquare, 500);
  console.log(timerId);
}

moveAnimal();

function countDown() {
  currentTime--;
  timeLeft.textContent = currentTime;
  if (currentTime == 0) {
    clearInterval(countDownTimerId);
    alert(`GAME OVER!! Your final score is ${result}`);
    window.location.reload();
  }
}

let countDownTimerId = setInterval(countDown, 1000);
