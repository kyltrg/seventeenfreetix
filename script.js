"use strict";

// Get the elements
const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.getElementById("yes");
const noButton = document.getElementById("no");
const catImg = document.querySelector(".cat-img");

// Set max images
const MAX_IMAGES = 5;
let noCount = 0;
let play = true;

// Event listener for Yes button
yesButton.addEventListener("click", handleYesClick);

// Event listener for No button
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
  titleElement.innerHTML = "YESSSSS!!! ILOVEYOUU LOVE LOVE :3";
  buttonsContainer.classList.add("hidden");
  changeImage("YEYYY");
  enlargeYesButton(); // Enlarge the Yes button 10x at the end
}

function resizeYesButton() {
  // Resize the Yes button
  const newFontSize = parseFloat(getComputedStyle(yesButton).fontSize) * 1.6;
  yesButton.style.fontSize = `${newFontSize}px`;
}

function enlargeYesButton() {
  // Make the Yes button 10x bigger
  yesButton.style.transform = "scale(10)";
}

function generateMessage(noCount) {
  const messages = [
    "No",
    "Can you please click Yes?",
    "Are you sure love?",
    "Aww love naman, sure?? :((",
    "DON'T DO THIS TO MEEEE!!!!",
    "I'm gonna cry...",
  ];
  const messageIndex = Math.min(noCount, messages.length - 1);
  return messages[messageIndex];
}

function changeImage(image) {
  // Change the image based on what's clicked
  const imagePath = `img/${image}.jpg`; // Use the .jpg extension
  catImg.src = imagePath;
  catImg.alt = `Image ${image}`; // Set alt text for accessibility
}

function updateNoButtonText() {
  // Update the No button text
  noButton.innerHTML = generateMessage(noCount);
}
