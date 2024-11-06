// Function to move the "No" button to a random position
function moveNoButton() {
    const noButton = document.getElementById("no-button");
    const x = Math.floor(Math.random() * (window.innerWidth - noButton.clientWidth));
    const y = Math.floor(Math.random() * (window.innerHeight - noButton.clientHeight));
    noButton.style.position = "absolute";
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
}

// Show alert with love emojis when "Yes" button is clicked
function showLoveAlert() {
    alert("Yay! You like me! ❤️😍💖");
}

// Attach event listeners
document.getElementById("no-button").addEventListener("mouseover", moveNoButton);
document.getElementById("no-button").addEventListener("touchstart", moveNoButton);
document.getElementById("yes-button").addEventListener("click", showLoveAlert);