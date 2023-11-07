"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var prompt = promptSync();
var Person = /** @class */ (function () {
    function Person(name, personality) {
        this.name = name;
        this.personality = personality;
    }
    Person.prototype.askQuestion = function (answer) {
        if (answer === 1) {
            console.log("Extrovert");
        }
        else {
            console.log("Introvert");
        }
    };
    Person.prototype.getPersonality = function () {
        return this.personality;
    };
    return Person;
}());
var Program = /** @class */ (function () {
    function Program(input) {
        this.input = input;
    }
    Program.prototype.getInputOutput = function () {
        try {
            console.log("Type 1 if you like to talk with others");
            this.input = String(prompt(" "));
            var person = new Person("Ilyas", "introvert");
            person.askQuestion(parseInt(this.input));
        }
        catch (error) {
            console.error("An error occurred:", error);
        }
    };
    return Program;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, personality) {
        return _super.call(this, name, personality) || this;
    }
    Student.prototype.getStudentName = function () {
        console.log("Student name is ".concat(this.name));
    };
    Student.prototype.setStudentName = function (newName) {
        this.name = newName;
    };
    return Student;
}(Person));
// Example usage:
var student = new Student("John", "extrovert");
student.getStudentName(); // Outputs: Student name is John
student.setStudentName("Alice");
student.getStudentName(); // Outputs: Student name is Alice
