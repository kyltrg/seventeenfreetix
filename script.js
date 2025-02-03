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
  enlargeYesButton(); // Enlarge the Yes button
}

function resizeYesButton() {
  const computedStyle = window.getComputedStyle(yesButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  const newFontSize = fontSize * 1.6;

  yesButton.style.fontSize = `${newFontSize}px`;
}

function enlargeYesButton() {
  yesScale *= 1.2; // Increase the scale by 1.2 each time
  yesButton.style.transform = `scale(${yesScale})`;

  if (yesScale >= 4) { 
    yesButton.style.width = "100vw";
    yesButton.style.height = "100vh";
    yesButton.style.fontSize = "5rem"; 
    yesButton.style.display = "flex";
    yesButton.style.alignItems = "center";
    yesButton.style.justifyContent = "center";
    yesButton.style.backgroundColor = "#40c057"; 
    yesButton.innerHTML = "YES!!!";
  }
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
  catImg.src = `img/${image}.jpg`;
}

function updateNoButtonText() {
  noButton.innerHTML = generateMessage(noCount);
}
