function checkAnswer() {
    let answer = document.getElementById("answer").value.trim().toLowerCase();
    if (answer.includes("rovers")) {
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

