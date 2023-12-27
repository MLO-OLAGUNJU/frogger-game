const timeLeftDisplay = document.querySelector("#time-left");
const resultDisplay = document.querySelector("#result");
const startNPauseButton = document.querySelector("#start-pause-button");
const squares = document.querySelectorAll(".grid div");

const logsLeft = document.querySelectorAll(".log-left");
const logRight = document.querySelectorAll(".log-right");

const carsLeft = document.querySelectorAll(".car-left");
const carsRight = document.querySelectorAll(".car-right");

let currentIndex = 76;
const width = 9;
let timerId;
let currentTime = 20;

const moveFrog = (e) => {
  squares[currentIndex].classList.remove("frog");
  switch (e.key) {
    case "ArrowLeft":
      if (currentIndex % width !== 0) currentIndex -= 1;
      break;
    case "ArrowRight":
      if (currentIndex % width < width - 1) currentIndex += 1;
      break;
    case "ArrowUp":
      if (currentIndex - width >= 0) currentIndex -= width;
      break;
    case "ArrowDown":
      if (currentIndex + width < width * width) currentIndex += width;
      break;
    default:
      return;
      break;
  }
  squares[currentIndex].classList.add("frog");
};

document.addEventListener("keyup", moveFrog);

const autoMoveElement = () => {
  currentTime--;
  timeLeftDisplay.textContent = currentTime;
  logsLeft.forEach((logsLeft) => moveLogLeft(logsLeft));
  logRight.forEach((logRight) => moveLogRight(logRight));
  carsLeft.forEach((carsLeft) => moveCarLeft(carsLeft));
  carsRight.forEach((carsRight) => moveCarRight(carsRight));
  lose();
  win();
};

const moveLogLeft = (logsLeft) => {
  switch (true) {
    case logsLeft.classList.contains("l1"):
      logsLeft.classList.remove("l1");
      logsLeft.classList.add("l2");
      break;

    case logsLeft.classList.contains("l2"):
      logsLeft.classList.remove("l2");
      logsLeft.classList.add("l3");
      break;

    case logsLeft.classList.contains("l3"):
      logsLeft.classList.remove("l3");
      logsLeft.classList.add("l4");
      break;

    case logsLeft.classList.contains("l4"):
      logsLeft.classList.remove("l4");
      logsLeft.classList.add("l5");

    case logsLeft.classList.contains("l5"):
      logsLeft.classList.remove("l5");
      logsLeft.classList.add("l1");
      break;
    default:
      break;
  }
};

const moveLogRight = (logRight) => {
  switch (true) {
    case logRight.classList.contains("l1"):
      logRight.classList.remove("l1");
      logRight.classList.add("l5");
      break;
    case logRight.classList.contains("l2"):
      logRight.classList.remove("l2");
      logRight.classList.add("l1");
      break;
    case logRight.classList.contains("l3"):
      logRight.classList.remove("l3");
      logRight.classList.add("l2");
      break;
    case logRight.classList.contains("l4"):
      logRight.classList.remove("l4");
      logRight.classList.add("l3");
      break;
    case logRight.classList.contains("l5"):
      logRight.classList.remove("l5");
      logRight.classList.add("l4");
      break;
  }
};

const moveCarLeft = (carsLeft) => {
  switch (true) {
    case carsLeft.classList.contains("c1"):
      carsLeft.classList.remove("c1");
      carsLeft.classList.add("c2");
      break;

    case carsLeft.classList.contains("c2"):
      carsLeft.classList.remove("c2");
      carsLeft.classList.add("c3");
      break;

    case carsLeft.classList.contains("c3"):
      carsLeft.classList.remove("c3");
      carsLeft.classList.add("c1");
      break;
  }
};

const moveCarRight = (carsRight) => {
  switch (true) {
    case carsRight.classList.contains("c1"):
      carsRight.classList.remove("c1");
      carsRight.classList.add("c3");
      break;
    case carsRight.classList.contains("c2"):
      carsRight.classList.remove("c2");
      carsRight.classList.add("c1");
      break;
    case carsRight.classList.contains("c3"):
      carsRight.classList.remove("c3");
      carsRight.classList.add("c2");
      break;
  }
};

const lose = () => {
  if (
    squares[currentIndex].classList.contains("c1") ||
    squares[currentIndex].classList.contains("l4") ||
    squares[currentIndex].classList.contains("l5") ||
    currentTime <= 0
  ) {
    resultDisplay.innerHTML = "You Lose!";
    clearInterval(timerId);
    squares[currentIndex].classList.remove("frog");
    document.removeEventListener("keyup", moveFrog);
  }
};

const win = () => {
  if (squares[currentIndex].classList.contains("ending-block")) {
    resultDisplay.innerHTML = "You win!";
    clearInterval(timerId);
    document.removeEventListener("keyup", moveFrog);
  }
};

timerId = setInterval(autoMoveElement, 1000);
