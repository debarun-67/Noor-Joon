function checkAnswer() {
    let answer = document.getElementById("answer").value.trim().toLowerCase();
    if (answer.includes("joon")) {
        window.location.href = "./codes/question.html";
    } else {
        window.location.href = "./codes/rejection.html";
    }
}

function goToFinal() {
    window.location.href = "./third.html";
}

function showEmojiPage() {
    window.location.href = "./emoji.html"
}

function meaning() {
    window.location.href = "./meaning.html"
}

// Function to create floating hearts
function createHearts() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.bottom = "-20px"; // Start below the screen
    heart.style.fontSize = `${Math.random() * 1.5 + 1}rem`; // Varying heart sizes
    heart.style.animationDuration = `${3 + Math.random() * 2}s`; // Random float speed
    document.body.appendChild(heart);

    // Remove the heart after animation completes
    setTimeout(() => heart.remove(), 5000);
}

// Generate hearts at intervals
setInterval(createHearts, 1500);
