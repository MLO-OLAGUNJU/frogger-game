const timeLeftDisplay = document.querySelector("#time-left");
const resultDisplay = document.querySelector("#result");
const startNPauseButton = document.querySelector("#start-pause-button");
const squares = document.querySelectorAll(".grid div");

const logsLeft = document.querySelectorAll(".log-left");
const logRight = document.querySelectorAll(".log-right");

let currentIndex = 76;
const width = 9;

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

const autoMoveLogs = () => {
  logsLeft.forEach((logsLeft) => moveLogLeft(logsLeft));
  logRight.forEach((logRight) => moveLogRight(logRight));
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
setInterval(autoMoveLogs, 1000);
