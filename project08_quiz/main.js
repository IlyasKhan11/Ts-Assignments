"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var prompt = promptSync();
// Define an array of quiz questions and answers
var quizQuestions = [
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
var score = 0;
console.log("Welcome to the TypeScript Quiz!");
// Iterate through the quiz questions
for (var _i = 0, quizQuestions_1 = quizQuestions; _i < quizQuestions_1.length; _i++) {
    var _a = quizQuestions_1[_i], question = _a.question, answer = _a.answer;
    var userAnswer = prompt(question + " ");
    if (userAnswer.toLowerCase() === answer.toLowerCase()) {
        console.log("Correct!\n");
        score++;
    }
    else {
        console.log("Incorrect. The correct answer is: " + answer + "\n");
    }
}
console.log("Quiz completed! You scored ".concat(score, " out of ").concat(quizQuestions.length, "."));
