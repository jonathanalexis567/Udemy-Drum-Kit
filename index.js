var numberOfDrumsButtons = document.querySelectorAll(".drum").length;

// Preload all sounds once
var sounds = {
  "w": new Audio("sounds/tom-1.mp3"),
  "a": new Audio("sounds/tom-2.mp3"),
  "s": new Audio("sounds/tom-3.mp3"),
  "d": new Audio("sounds/tom-4.mp3"),
  "j": new Audio("sounds/snare.mp3"),
  "k": new Audio("sounds/crash.mp3"),
  "l": new Audio("sounds/kick-bass.mp3")
};

// Allow sounds to be reused quickly
for (let key in sounds) {
  sounds[key].preload = "auto";
}

// Handle clicks/taps with pointerdown (works on both phone + desktop)
for (var i = 0; i < numberOfDrumsButtons; i++) {
  let button = document.querySelectorAll(".drum")[i];
  button.addEventListener("pointerdown", handlePress);
}

// Keyboard press
document.addEventListener("keydown", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function handlePress(e) {
  var buttonInnerHTML = this.innerHTML;
  makeSound(buttonInnerHTML);
  buttonAnimation(buttonInnerHTML);
}

function makeSound(key) {
  let sound = sounds[key];
  if (sound) {
    sound.currentTime = 0; // rewind so it can play repeatedly
    sound.play();
  }
}

// Animation
function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  if (!activeButton) return;

  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
