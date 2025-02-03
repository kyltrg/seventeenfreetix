let yesBtn = document.getElementById('yes');
let noBtn = document.getElementById('no');
let message = document.getElementById('message');
let image = document.getElementById('image');
let container = document.getElementById('container');
let currentStage = 1;
let yesScale = 1;

yesBtn.addEventListener('click', () => {
  if (currentStage < 6) {
    // Go to Yey Screen after Yes is clicked
    if (currentStage === 1 || currentStage > 1) {
      image.src = 'img/YEYYY.jpg'; // Image change for final screen
      message.innerText = 'YEYYYYYY!!!';
      yesBtn.style.display = 'none';  // Hide buttons
      noBtn.style.display = 'none';
    }
  } else {
    // If Yes clicked when the button covers the whole screen
    message.innerText = "YES!!!";
    yesBtn.style.fontSize = '50px';
    yesBtn.style.width = '100%';
    yesBtn.style.height = '100vh';
  }
});

noBtn.addEventListener('click', () => {
  // Show next screen when No is clicked
  if (currentStage < 5) {
    currentStage++;
    image.src = `img/please_${currentStage}.jpg`;
    message.innerText = 'Loveee Leila, will u be my valentine?';
    adjustYesButton();
  } else if (currentStage === 5) {
    currentStage++;
    image.src = 'img/please_5.jpg';
    message.innerText = 'Loveee Leila, will u be my valentine?';
    adjustYesButton();
  }
});

function adjustYesButton() {
  yesScale += 1;  // Increase scale each time
  yesBtn.style.transform = `scale(${1 + yesScale / 10})`;  // Enlarge the Yes button
  yesBtn.style.fontSize = `${20 + yesScale * 5}px`;  // Increase font size of Yes
  if (currentStage === 2) {
    noBtn.innerText = 'Can you please click Yes?';
  } else if (currentStage === 3) {
    noBtn.innerText = 'Are you sure love?';
  } else if (currentStage === 4) {
    noBtn.innerText = 'Aww love naman, sure??';
  } else if (currentStage === 5) {
    noBtn.innerText = "DON'T DO THIS TO MEEEE!!!!";
  }
}
