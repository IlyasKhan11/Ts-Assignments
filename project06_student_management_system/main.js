var Student = /** @class */ (function () {
    function Student(name) {
        this.name = name;
        this.studentID = Student.nextStudentID++;
        this.courses = [];
        this.balance = 0;
    }
    Student.prototype.enroll = function (course) {
        this.courses.push(course);
    };
    Student.prototype.viewBalance = function () {
        console.log("Balance for ".concat(this.name, ": $").concat(this.balance));
    };
    Student.prototype.payTuition = function (amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log("".concat(this.name, " has paid $").concat(amount, " towards tuition."));
        }
        else {
            console.log("Invalid payment amount.");
        }
    };
    Student.prototype.showStatus = function () {
        console.log("Student Name: ".concat(this.name));
        console.log("Student ID: ".concat(this.studentID));
        console.log("Courses Enrolled: ".concat(this.courses.join(", ")));
        this.viewBalance();
    };
    Student.nextStudentID = 10000;
    return Student;
}());
var students = [];
function addStudent() {
    var name = String(prompt("Enter student name: "));
    var newStudent = new Student(name);
    students.push(newStudent);
    console.log("Student ".concat(newStudent.name, " with ID ").concat(newStudent.studentID, " added."));
}
function enrollStudent() {
    var studentID = Number(parseInt(prompt("Enter student ID: ")));
    var student = students.find(function (s) { return s.studentID === studentID; });
    if (student) {
        var course = String(prompt("Enter course to enroll: "));
        student.enroll(course);
        console.log("".concat(student.name, " has enrolled in ").concat(course, "."));
    }
    else {
        console.log("Student not found.");
    }
}
function manageStudent() {
    var studentID = Number(parseInt(prompt("Enter student ID: ")));
    var student = students.find(function (s) { return s.studentID === studentID; });
    if (student) {
        console.log("Student found: ".concat(student.name));
        while (true) {
            console.log("Choose an option:");
            console.log("1. View Balance");
            console.log("2. Pay Tuition");
            console.log("3. Show Status");
            console.log("4. Exit");
            var option = Number(parseInt(prompt("Enter option: ")));
            switch (option) {
                case 1:
                    student.viewBalance();
                    break;
                case 2:
                    var amount = Number(parseInt(prompt("Enter payment amount: ")));
                    student.payTuition(amount);
                    break;
                case 3:
                    student.showStatus();
                    break;
                case 4:
                    return;
                default:
                    console.log("Invalid option.");
            }
        }
    }
    else {
        console.log("Student not found.");
    }
}
while (true) {
    console.log("Choose an option:");
    console.log("1. Add Student");
    console.log("2. Enroll Student");
    console.log("3. Manage Student");
    console.log("4. Exit");
    var option = Number(parseInt(prompt("Enter option: ")));
    switch (option) {
        case 1:
            addStudent();
            break;
        case 2:
            enrollStudent();
            break;
        case 3:
            manageStudent();
            break;
        case 4:
            console.log("Goodbye!");
            process.exit(0);
        default:
            console.log("Invalid option.");
    }
}
