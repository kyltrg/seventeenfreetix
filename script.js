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
        image.src = images[5];  // Show the YEYYY image
        text.innerHTML = texts[5];  // Show YEYYY text
        yesBtn.style.width = "100vw";  // Expand the Yes button to cover the whole screen
        yesBtn.style.height = "100vh";  // Expand the Yes button to cover the whole screen
        noBtn.style.display = "none";  // Hide the 'No' button
        // Play voice message
        const audio = new Audio('your-audio-file.mp3');
        audio.play();
    } else {
        clickCount++;
        yesBtn.style.transform = `scale(${1 + clickCount * 0.5})`;  // Scale the Yes button
        text.innerHTML = texts[clickCount];  // Update the text
        image.src = images[clickCount];  // Update the image

        // Adjust 'No' button text after each click
        if (clickCount < 5) {
            noBtn.innerHTML = texts[clickCount + 1] || "Can you please click Yes?";
        }

        // Dynamically adjust the No button position to prevent overlap
        noBtn.style.transform = `translateY(${clickCount * 10}px)`;  // Move No button based on Yes button scaling
    }
});

// Function to handle No button clicks
noBtn.addEventListener("click", function() {
    // Increase 'Yes' button size on 'No' click
    yesBtn.style.transform = `scale(${1 + clickCount * 0.5})`;

    // Dynamically adjust the No button position to prevent overlap with the enlarged Yes button
    noBtn.style.transform = `translateY(${clickCount * 10}px)`;  // Move No button based on Yes button scaling
});
