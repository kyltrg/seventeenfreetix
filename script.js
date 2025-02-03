"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.getElementById("yes");
const noButton = document.getElementById("no");
const catImg = document.querySelector(".cat-img");

const MAX_IMAGES = 5;

let play = true;
let noCount = 0;
let yesScale = 1; // Track scale of the "Yes" button

yesButton.addEventListener("click", handleYesClick);

noButton.addEventListener("click", function () {
  if (play) {
    noCount++;
    const imageIndex = Math.min(noCount, MAX_IMAGES);
    changeImage(imageIndex);
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
  enlargeYesButton();
}

function enlargeYesButton() {
  // If we are at the final "I'm gonna cry..." stage, enlarge the Yes button to full screen
  if (noCount >= MAX_IMAGES) {
    yesButton.classList.add("full-screen-btn");
    yesButton.innerHTML = "YES!!!";
    yesButton.style.fontSize = "6rem"; // Larger font size
  } else {
    yesScale *= 1.6; // Increase scale factor
    yesButton.style.transform = `scale(${yesScale})`; // Apply scale transformation
    const computedStyle = window.getComputedStyle(yesButton);
    const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
    const newFontSize = fontSize * 1.6; // Increase font size proportionally
    yesButton.style.fontSize = `${newFontSize}px`; // Apply new font size
  }
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

function changeImage(imageIndex) {
  if (imageIndex === "yes") {
    catImg.src = `img/YEYYY.jpg`; // Final "yes" image
  } else {
    catImg.src = `img/please_${imageIndex}.jpg`; // Custom images for each "No"
  }
}

function updateNoButtonText() {
  noButton.innerHTML = generateMessage(noCount);
}
