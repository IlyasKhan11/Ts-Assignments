function startCountdown(seconds: number) {
  const interval = 1000; // 1 second

  const countdown = setInterval(() => {
    if (seconds <= 0) {
      clearInterval(countdown);
      console.log("Countdown expired!");
    } else {
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = seconds % 60;
      console.log(`${minutes}:${remainingSeconds}`);
      seconds--;
    }
  }, interval);
}

// Start the countdown with a specified number of seconds (e.g., 120 seconds)
startCountdown(120);
