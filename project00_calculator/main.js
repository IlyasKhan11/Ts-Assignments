"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var inquirer_1 = require("inquirer");
var prompt = promptSync();
function Add(a, b) {
    var answer = a + b;
    return answer;
}
function Subtract(a, b) {
    return a - b;
}
function Multiply(a, b) {
    return a * b;
}
function Divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}
inquirer_1.default
    .prompt([
    {
        type: "input",
        name: "num1",
        message: "Enter the first number:",
    },
    {
        type: "input",
        name: "num2",
        message: "Enter the second number:",
    },
    {
        type: "list",
        name: "operation",
        message: "Choose an operation:",
        choices: ["Add", "Subtract", "Multiply", "Divide"],
    },
])
    .then(function (answers) {
    var num1 = parseFloat(answers.num1);
    var num2 = parseFloat(answers.num2);
    switch (answers.operation) {
        case "Add":
            console.log("Result: ".concat(Add(num1, num2)));
            break;
        case "Subtract":
            console.log("Result: ".concat(Subtract(num1, num2)));
            break;
        case "Multiply":
            console.log("Result: ".concat(Multiply(num1, num2)));
            break;
        case "Divide":
            try {
                console.log("Result: ".concat(Divide(num1, num2)));
            }
            catch (error) {
                console.error(error.message);
            }
            break;
    }
});
