let yesButton = document.getElementById('yesButton');
let noButton = document.getElementById('noButton');
let currentScreen = 0; // Track the current screen
let maxScreen = 5;     // Total number of screens before final "YES" button

yesButton.addEventListener('click', () => {
  if (currentScreen < maxScreen) {
    // Proceed to the next screen
    currentScreen++;
    loadScreen(currentScreen);
  } else {
    // Show the fullscreen YES button on the last screen
    showFullScreenYesButton();
  }
});

noButton.addEventListener('click', () => {
  if (currentScreen < maxScreen) {
    // Proceed to the next screen with enlargement of the YES button
    currentScreen++;
    loadScreen(currentScreen);
  }
});

// Function to load the next screen
function loadScreen(screenNumber) {
  // Update the images and text based on the screen number
  document.getElementById('image').src = `img/please_${screenNumber + 1}.jpg`;
  document.getElementById('text').textContent = "Loveee Leila, will u be my valentine?";
  
  // Enlarge the YES button for each screen
  yesButton.classList.add('enlarged');
  
  // Change NO button text based on screen number
  if (screenNumber === 1) {
    noButton.textContent = "Are you sure love?";
  } else if (screenNumber === 2) {
    noButton.textContent = "Aww love naman, sure??";
  } else if (screenNumber === 3) {
    noButton.textContent = "DON'T DO THIS TO MEEEE!!!!";
  } else if (screenNumber === 4) {
    noButton.textContent = "PLEASEEE LOVE LEILAAA!!! HUHUHU";
  }
}

// Show the fullscreen YES button
function showFullScreenYesButton() {
  yesButton.classList.add('fullscreen');
  yesButton.textContent = "YES!!!";
  // You can also play a sound here if you'd like
  playSuccessMessage();
}

function playSuccessMessage() {
  // Play the voice message when YES is clicked
  let audio = new Audio('path/to/your/voice-message.mp3');
  audio.play();
}
