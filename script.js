"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const image = document.querySelector(".image");

const MAX_IMAGES = 5;
const imageUrls = [
  "please_1.jpg", 
  "please_2.jpg", 
  "please_3.jpg", 
  "please_4.jpg", 
  "please_5.jpg"
];
const finalImage = "YEYYY.jpg";

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
  titleElement.innerHTML = "YEYYY!!!";
  buttonsContainer.classList.add("hidden");
  changeImage(finalImage);
  playVoiceMessage();
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
    "Are you sure love?",
    "Aww love naman, sure??",
    "DON'T DO THIS TO MEEEE!!!!",
    "PLEASEEE LOVE LEILAAA!!! HUHUHU"
  ];

  const messageIndex = Math.min(noCount, messages.length - 1);
  return messages[messageIndex];
}

function changeImage(image) {
  if (image === finalImage) {
    image.src = `img/${image}`;
  } else {
    image.src = `img/${imageUrls[image - 1]}`;
  }
}

function updateNoButtonText() {
  noButton.innerHTML = generateMessage(noCount);
}

function playVoiceMessage() {
  const audio = new Audio('voice-message.mp3');
  audio.play();
}
