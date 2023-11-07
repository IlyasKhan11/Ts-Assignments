function startCountdown(seconds) {
    var interval = 1000; // 1 second
    var countdown = setInterval(function () {
        if (seconds <= 0) {
            clearInterval(countdown);
            console.log("Countdown expired!");
        }
        else {
            var minutes = Math.floor(seconds / 60);
            var remainingSeconds = seconds % 60;
            console.log("".concat(minutes, ":").concat(remainingSeconds));
            seconds--;
        }
    }, interval);
}
// Start the countdown with a specified number of seconds (e.g., 120 seconds)
startCountdown(120);
