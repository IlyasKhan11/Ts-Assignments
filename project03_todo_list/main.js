"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
// Initialize an array to store todos
var todos = [];
// Function to display todos
function displayTodos() {
    console.log("\nTodos:");
    todos.forEach(function (todo) {
        console.log("".concat(todo.id, ". [").concat(todo.done ? "x" : " ", "] ").concat(todo.task));
    });
}
// Function to add a todo
function addTodo() {
    inquirer_1.default
        .prompt([
        {
            type: "input",
            name: "task",
            message: "Enter a new task:",
        },
    ])
        .then(function (answers) {
        var newTodo = {
            id: todos.length + 1,
            task: answers.task,
            done: false,
        };
        todos.push(newTodo);
        displayTodos();
        main();
    });
}
// Function to mark a todo as done
function markAsDone() {
    inquirer_1.default
        .prompt([
        {
            type: "number",
            name: "todoId",
            message: "Enter the ID of the task to mark as done:",
        },
    ])
        .then(function (answers) {
        var index = findTodoIndexById(answers.todoId);
        if (index !== -1) {
            todos[index].done = true;
        }
        else {
            console.log("Todo not found.");
        }
        displayTodos();
        main();
    });
}
// Function to delete a todo
function deleteTodo() {
    inquirer_1.default
        .prompt([
        {
            type: "number",
            name: "todoId",
            message: "Enter the ID of the task to delete:",
        },
    ])
        .then(function (answers) {
        var index = findTodoIndexById(answers.todoId);
        if (index !== -1) {
            todos.splice(index, 1);
        }
        else {
            console.log("Todo not found.");
        }
        displayTodos();
        main();
    });
}
// Helper function to find a todo's index by ID
function findTodoIndexById(id) {
    for (var i = 0; i < todos.length; i++) {
        if (todos[i].id === id) {
            return i;
        }
    }
    return -1; // Not found
}
// Main function
function main() {
    inquirer_1.default
        .prompt([
        {
            type: "list",
            name: "action",
            message: "Choose an action:",
            choices: [
                "Display Todos",
                "Add Todo",
                "Mark as Done",
                "Delete Todo",
                "Exit",
            ],
        },
    ])
        .then(function (answers) {
        var action = answers.action;
        switch (action) {
            case "Display Todos":
                displayTodos();
                break;
            case "Add Todo":
                addTodo();
                break;
            case "Mark as Done":
                markAsDone();
                break;
            case "Delete Todo":
                deleteTodo();
                break;
            case "Exit":
                console.log("Goodbye!");
                return;
        }
    });
}
// Start the application
console.log("Welcome to the Simple To-Do List App\n");
main();
