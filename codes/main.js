function checkAnswer() {
    let answer = document.getElementById("answer").value.trim().toLowerCase();
    if (answer === "joon") {
        window.location.href = "/question.html";
    } else {
        window.location.href = "/rejection.html";
    }
}

function goToFinal() {
    window.location.href = "/third.html";
}

function showEmojiPage() {
    window.location.href = "emoji.html"
}
