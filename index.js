const buttons = document.querySelectorAll(".drum");
const tom1 = new Audio("./sounds/tom-1.mp3");
const tom2 = new Audio("./sounds/tom-2.mp3");
const tom3 = new Audio("./sounds/tom-3.mp3");
const tom4 = new Audio("./sounds/tom-4.mp3");
const crash = new Audio("./sounds/crash.mp3");
const kickBass = new Audio("./sounds/kick-bass.mp3");
const snare = new Audio("./sounds/snare.mp3");

function handleClick() {
  const buttonText = this.innerText;
  playSound(buttonText);
  buttonAnimation(buttonText);
}

function playSound(key) {
  switch(key) {
    case "w":
      if (!tom1.play()) return;
      tom1.currentTime = 0;
      tom1.play();
      break;

    case "a":
      if (!tom2.play()) return;
      tom2.currentTime = 0;
      tom2.play();
      break;

    case "s":
      if (!tom3.play()) return;
      tom3.currentTime = 0;
      tom3.play();
      break;

    case "d":
      if (!tom4.play()) return;
      tom4.currentTime = 0;
      tom4.play();
      break;

    case "j":
      if (!crash.play()) return;
      crash.currentTime = 0;
      crash.play();
      break;

    case "k":
      if (!kickBass.play()) return;
      kickBass.currentTime = 0;
      kickBass.play();
      break;

    case "l":
      if (!snare.play()) return;
      snare.currentTime = 0;
      snare.play()
      break;

    default:
      console.log("A non valid key was pressed.");
  }
}

function buttonAnimation(currentKey) {
  let activeButton = document.querySelector(`.${currentKey}`);
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100)
}

buttons.forEach(button => button.addEventListener("click", handleClick));
document.addEventListener("keydown", function(event) {
  playSound(event.key);
  buttonAnimation(event.key);
});

/*
NOTES:

There is another way to get all the buttons with a for loop.

const numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    console.log("Button clicked!");
  });
}

*/