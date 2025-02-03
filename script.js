"use strict";

// Get elements
const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.getElementById("yes");
const noButton = document.getElementById("no");
const catImg = document.querySelector(".cat-img");

const MAX_IMAGES = 5;
let noCount = 0;
let play = true;

// Event listeners
yesButton.addEventListener("click", handleYesClick);
noButton.addEventListener("click", handleNoClick);

// Handle Yes button click
function handleYesClick() {
  titleElement.innerHTML = "YESSSSS!!! ILOVEYOUU LOVE LOVE :3";
  buttonsContainer.classList.add("hidden");
  changeImage("YEYYY");
  enlargeYesButton();
}

// Handle No button click
function handleNoClick() {
  if (play) {
    noCount++;
    const imageIndex = Math.min(noCount, MAX_IMAGES);
    changeImage(`please_${imageIndex}`);
    updateNoButtonText();
    if (noCount === MAX_IMAGES) {
      play = false;
    }
  }
}

// Enlarge the Yes button
function enlargeYesButton() {
  yesButton.style.transform = "scale(10)";
}

// Change the image based on clicks
function changeImage(image) {
  const imagePath = `img/${image}.jpg`; // Correct path
  catImg.src = imagePath;
  catImg.alt = `Image ${image}`; // Alt text for accessibility
}

// Update the No button text
function updateNoButtonText() {
  const messages = [
    "No",
    "Can you please click Yes?",
    "Are you sure love?",
    "Aww love naman, sure?? :((",
    "DON'T DO THIS TO MEEEE!!!!",
    "I'm gonna cry...",
  ];
  const messageIndex = Math.min(noCount, messages.length - 1);
  noButton.innerHTML = messages[messageIndex];
}
