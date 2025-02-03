"use strict";

// Get elements
const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector("#yes");
const noButton = document.querySelector("#no");
const catImg = document.querySelector(".cat-img");

const MAX_IMAGES = 5;
let play = true;
let noCount = 0;

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
  titleElement.innerHTML = "YESSSSS!!! ILOVEYOUU LOVE LOVE :3";
  buttonsContainer.classList.add("hidden");
  changeImage("YEYYY");
}

function resizeYesButton() {
  const computedStyle = window.getComputedStyle(yesButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  const newFontSize = fontSize * 1.6;
  yesButton.style.fontSize = `${newFontSize}px`;
}

function generateMessage(noCount) {
  const messages = [
    "No",
    "Can you please click Yes?",
    "Are you sure love?",
    "Aww love naman, sure?? :(",
    "DON'T DO THIS TO MEEEE!!!!",
    "I'm gonna cry...",
  ];

  const messageIndex = Math.min(noCount, messages.length - 1);
  return messages[messageIndex];
}

function changeImage(image) {
  const imagePaths = {
    YEYYY: 'img/YEYYY.jpg',
    1: 'img/please_1.jpg',
    2: 'img/please_2.jpg',
    3: 'img/please_3.jpg',
    4: 'img/please_4.jpg',
    5: 'img/please_5.jpg',
  };

  // Check if image is valid and change source accordingly
  if (imagePaths[image]) {
    catImg.src = imagePaths[image]; // Update the src of the image
  } else {
    console.error('Image path not found');
  }
}

function updateNoButtonText() {
  noButton.innerHTML = generateMessage(noCount);
}
