document.addEventListener("DOMContentLoaded", () => {
    // Sprinkle Effect
    function sprinkleConfetti() {
        const duration = 5 * 1000; // 3 seconds
        const animationEnd = Date.now() + duration;
        const colors = ["#ff1493", "#ff69b4", "#ffb6c1", "#db7093", "#ff0000", "#FFD700", "#FFFFFF", "#800080"];

        (function frame() {
            confetti({
                particleCount: 50,
                angle: 70,
                spread: 20000,
                origin: { x: Math.random(), y: 0 },
                colors: colors,
            });

            if (Date.now() < animationEnd) {
                requestAnimationFrame(frame);
            }
        })();
    }

    // Love Letter Opening Effect
    function revealLetter() {
        const letter = document.getElementById("love-letter");
        gsap.fromTo(
            letter,
            { scale: 0, opacity: 0, rotateX: -90 },
            { scale: 1, opacity: 1, rotateX: 0, duration: 10, ease: "power3.out" }
        );
    }

    // Run animations
    sprinkleConfetti();
    setTimeout(revealLetter, 1000);
});
