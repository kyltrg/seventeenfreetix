"use strict";

// Selecting DOM elements
const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".cat-img");

const MAX_IMAGES = 5;
let play = true;
let noCount = 0;
let yesScale = 1; // Initial scale for the Yes button

// Event listeners
yesButton.addEventListener("click", handleYesClick);
noButton.addEventListener("click", function () {
  if (play) {
    noCount++;
    const imageIndex = Math.min(noCount, MAX_IMAGES);
    changeImage(imageIndex);
    resizeYesButton();
    updateNoButtonText();
    if (noCount === MAX_IMAGES) {
      play = false;
    }
  }
});

function handleYesClick() {
  titleElement.innerHTML = "Yayyy!! :3";
  buttonsContainer.classList.add("hidden");
  changeImage("yes");
  enlargeYesButton(); // Enlarge the Yes button when clicked
}

function resizeYesButton() {
  const computedStyle = window.getComputedStyle(yesButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  const newFontSize = fontSize * 1.6;

  yesButton.style.fontSize = `${newFontSize}px`;
}

function enlargeYesButton() {
  yesScale *= 1.5; // Increase the scale by 1.5 each time

  // Condition for enlarging the button to fill the entire screen
  if (yesScale >= 4) {
    yesButton.style.transform = `scale(4)`; // Scale button to fill the screen
    yesButton.style.width = "100vw"; // Full-screen width
    yesButton.style.height = "100vh"; // Full-screen height
    yesButton.style.fontSize = "5rem"; // Large text for visibility
    yesButton.style.display = "flex";
    yesButton.style.alignItems = "center";
    yesButton.style.justifyContent = "center";
    yesButton.style.backgroundColor = "#40c057"; // Green background for the final screen
    yesButton.innerHTML = "YES!!!"; // Change text to YES!!!
  } else {
    yesButton.style.transform = `scale(${yesScale})`; // Gradually enlarge the Yes button
  }

  // Ensure the image keeps its aspect ratio and enlarges without distortion
  catImg.style.transform = `scale(2)`; // Scale the image to 2x
  catImg.style.objectFit = "contain"; // Ensure the image stays proportional
  catImg.style.maxWidth = "100%"; // Limit the width of the image to 100% of its container
  catImg.style.maxHeight = "50vh"; // Limit the height to 50% of the viewport height
}

function generateMessage(noCount) {
  const messages = [
    "No", // First No message
    "Can you please click Yes?", // Second No message
    "Are you sure love?", // Third No message
    "Aww love naman, sure?? :(((", // Fourth No message
    "DON'T DO THIS TO MEEEE!!!!", // Fifth No message
    "I'm gonna cry...", // Sixth No message
  ];

  const messageIndex = Math.min(noCount, messages.length - 1);
  return messages[messageIndex];
}

function changeImage(image) {
  // Use different image paths based on the game state
  catImg.src = `img/${image}.jpg`;
}

function updateNoButtonText() {
  noButton.innerHTML = generateMessage(noCount);
}
