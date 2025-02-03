let clickCount = 0;
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const text = document.getElementById("text");
const image = document.getElementById("image");

const images = [
    "img/please_1.jpg", "img/please_2.jpg", "img/please_3.jpg", "img/please_4.jpg", "img/please_5.jpg", "img/YEYYY.jpg"
];

const texts = [
    "Loveee Leila, will u be my valentine?",
    "Are you sure love?",
    "Aww love naman, sure??",
    "DON'T DO THIS TO MEEEE!!!!",
    "PLEASEEE LOVE LEILAAA!!! HUHUHU",
    "YEYYY!!!"
];

// Function to handle Yes button clicks
yesBtn.addEventListener("click", function() {
    if (clickCount === 5) {
        image.src = images[5];
        text.innerHTML = texts[5];
        yesBtn.style.width = "100vw";  // Expand button only horizontally
        yesBtn.style.height = "100vh"; // Expand button only vertically
        noBtn.style.display = "none"; // Hide 'No' button when 'Yes' is clicked
        // Play voice message
        const audio = new Audio('your-audio-file.mp3');
        audio.play();
    } else {
        clickCount++;
        yesBtn.style.transform = `scale(${1 + clickCount * 0.5})`;  // Only scale the Yes button
        text.innerHTML = texts[clickCount];
        image.src = images[clickCount];
        // Adjust 'No' button text after each click
        if (clickCount < 5) {
            noBtn.innerHTML = texts[clickCount + 1] || "Can you please click Yes?";
        }
    }
});

// Function to handle No button clicks
noBtn.addEventListener("click", function() {
    // Increase 'Yes' button size on 'No' click
    yesBtn.style.transform = `scale(${1 + clickCount * 0.5})`;
});
