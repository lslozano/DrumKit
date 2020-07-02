const buttons = document.querySelectorAll(".drum");

function handleClick() {
  const audio = new Audio("./sounds/tom-1.mp3");
  audio.play();
}

buttons.forEach(button => button.addEventListener("click", handleClick));

/*
There is another way to get all the buttons with a for loop.

const numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    console.log("Button clicked!");
  });
}
*/