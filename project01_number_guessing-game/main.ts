import readlineSync = require('readline-sync');

function playGame() {
  const rounds = 3; // Number of rounds
  let totalScore = 0;

  for (let round = 1; round <= rounds; round++) {
    console.log(`Round ${round}`);

    const randomNumber = Math.floor(Math.random() * 10) + 1;
    let attempts = 3;
    let roundScore = 0;

    while (attempts > 0) {
      const userInput = readlineSync.questionInt(
        `Guess the number (1-10). You have ${attempts} attempts: `
      );

      if (isNaN(userInput) || userInput < 1 || userInput > 10) {
        console.log("Please enter a valid number between 1 and 10.");
        continue;
      }

      if (userInput === randomNumber) {
        roundScore = attempts * 10;
        console.log(`Congratulations! You guessed it. Your score for this round: ${roundScore}`);
        break;
      } else if (userInput < randomNumber) {
        console.log("Too low.");
      } else {
        console.log("Too high.");
      }

      attempts--;
    }

    totalScore += roundScore;
  }

  console.log(`Game over! Your total score is: ${totalScore}`);
}

playGame();
