<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $answer = strtolower(trim($_POST["answer"])); // Convert to lowercase & trim spaces
    if ($answer === "joon") {
        header("Location: question.html");
    } else {
        header("Location: rejection.html");
    }
    exit();
};
?>
