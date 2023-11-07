import * as promptSync from "prompt-sync";

const prompt = promptSync();

class Person {
  private name: string; // Define the 'name' property here.
  private personality: string;

  constructor(name: string, personality: string) {
    this.name = name;
    this.personality = personality;
  }

  askQuestion(answer: number) {
    if (answer === 1) {
      console.log("Extrovert");
    } else {
      console.log("Introvert");
    }
  }

  getPersonality() {
    return this.personality;
  }
}

class Program {
  input: string;

  constructor(input: string) {
    this.input = input;
  }

  getInputOutput() {
    try {
      console.log("Type 1 if you like to talk with others");
      this.input = String(prompt(" "));
      const person = new Person("Ilyas", "introvert");
      person.askQuestion(parseInt(this.input));
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }
}

class Student extends Person {
  constructor(name: string, personality: string) {
    super(name, personality);
  }

  getStudentName() {
    console.log(`Student name is ${this.name}`);
  }

  setStudentName(newName: string) {
    this.name = newName;
  }
}

// Example usage:

const student = new Student("John", "extrovert");
student.getStudentName(); // Outputs: Student name is John
student.setStudentName("Alice");
student.getStudentName(); // Outputs: Student name is Alice
