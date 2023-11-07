import * as promptSync from "prompt-sync";
import inquirer from "inquirer";

const prompt = promptSync();

function Add(a: number, b: number): number {
  let answer: number = a + b;
  return answer;
}

function Subtract(a: number, b: number): number {
  return a - b;
}

function Multiply(a: number, b: number): number {
  return a * b;
}

function Divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

inquirer
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
  .then((answers: any) => {
    const num1 = parseFloat(answers.num1);
    const num2 = parseFloat(answers.num2);

    switch (answers.operation) {
      case "Add":
        console.log(`Result: ${Add(num1, num2)}`);
        break;
      case "Subtract":
        console.log(`Result: ${Subtract(num1, num2)}`);
        break;
      case "Multiply":
        console.log(`Result: ${Multiply(num1, num2)}`);
        break;
      case "Divide":
        try {
          console.log(`Result: ${Divide(num1, num2)}`);
        } catch (error: any) {
          console.error(error.message);
        }
        break;
    }
  });
