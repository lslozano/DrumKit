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

  switch(buttonText) {
    case "w":
      tom1.play();
      break;

    case "a":
      tom2.play();
      break;

    case "s":
      tom3.play();
      break;

    case "d":
      tom4.play();
      break;

    case "j":
      crash.play();
      break;

    case "k":
      kickBass.play();
      break;

    case "l":
      snare.play()
      break;

    default:
      console.log(buttonText);
  }
}

buttons.forEach(button => button.addEventListener("click", handleClick));

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