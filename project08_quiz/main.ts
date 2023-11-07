import * as promptSync from "prompt-sync";

const prompt = promptSync();

// Define an array of quiz questions and answers
const quizQuestions = [
  {
    question: "What is the capital of Pakistan?",
    answer: "Islamabad",
  },
  {
    question: "How many continents are there on Earth?",
    answer: "7",
  },
  {
    question: "What is the largest planet in our solar system?",
    answer: "Jupiter",
  },
];

let score = 0;

console.log("Welcome to the TypeScript Quiz!");

// Iterate through the quiz questions
for (const { question, answer } of quizQuestions) {
  const userAnswer = prompt(question + " ");

  if (userAnswer.toLowerCase() === answer.toLowerCase()) {
    console.log("Correct!\n");
    score++;
  } else {
    console.log("Incorrect. The correct answer is: " + answer + "\n");
  }
}

console.log(
  `Quiz completed! You scored ${score} out of ${quizQuestions.length}.`
);
