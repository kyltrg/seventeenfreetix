"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".cat-img");

const MAX_IMAGES = 5;

let play = true;
let noCount = 0;

yesButton.addEventListener("click", handleYesClick);

noButton.addEventListener("click", function () {
  if (play) {
    noCount++;
    const imageIndex = Math.min(noCount, MAX_IMAGES);
    changeImage("please_" + imageIndex); // Load the correct 'please_' image dynamically
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
  changeImage("YEYYY");  // Load 'YEYYY.jpg' when Yes is clicked
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
    "Aww love naman, sure?? :((",
    "DON'T DO THIS TO MEEEE!!!!",
    "I'm gonna cry...",
  ];

  const messageIndex = Math.min(noCount, messages.length - 1);
  return messages[messageIndex];
}

function changeImage(image) {
  // Ensure the image names are correctly mapped to 'please_1.jpg', 'please_2.jpg', ... or 'YEYYY.jpg'
  catImg.src = `img/${image}.jpg`;  
  catImg.style.width = "90px";  // Resize image
  catImg.style.height = "auto"; // Maintain aspect ratio
}

function updateNoButtonText() {
  noButton.innerHTML = generateMessage(noCount);
}
