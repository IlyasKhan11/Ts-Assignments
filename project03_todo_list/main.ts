import inquirer from "inquirer";

// Define a Todo type
type Todo = {
  id: number;
  task: string;
  done: boolean;
};

// Initialize an array to store todos
const todos: Todo[] = [];

// Function to display todos
function displayTodos() {
  console.log("\nTodos:");
  todos.forEach((todo) => {
    console.log(`${todo.id}. [${todo.done ? "x" : " "}] ${todo.task}`);
  });
}

// Function to add a todo
function addTodo() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "task",
        message: "Enter a new task:",
      },
    ])
    .then((answers) => {
      const newTodo: Todo = {
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
  inquirer
    .prompt([
      {
        type: "number",
        name: "todoId",
        message: "Enter the ID of the task to mark as done:",
      },
    ])
    .then((answers) => {
      const index = findTodoIndexById(answers.todoId);
      if (index !== -1) {
        todos[index].done = true;
      } else {
        console.log("Todo not found.");
      }
      displayTodos();
      main();
    });
}

// Function to delete a todo
function deleteTodo() {
  inquirer
    .prompt([
      {
        type: "number",
        name: "todoId",
        message: "Enter the ID of the task to delete:",
      },
    ])
    .then((answers) => {
      const index = findTodoIndexById(answers.todoId);
      if (index !== -1) {
        todos.splice(index, 1);
      } else {
        console.log("Todo not found.");
      }
      displayTodos();
      main();
    });
}

// Helper function to find a todo's index by ID
function findTodoIndexById(id: number): number {
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id === id) {
      return i;
    }
  }
  return -1; // Not found
}

// Main function
function main() {
  inquirer
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
    .then((answers) => {
      const { action } = answers;

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
