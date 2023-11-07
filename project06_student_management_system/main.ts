class Student {
  static nextStudentID = 10000;

  name: string;
  studentID: number;
  courses: string[];
  balance: number;

  constructor(name: string) {
    this.name = name;
    this.studentID = Student.nextStudentID++;
    this.courses = [];
    this.balance = 0;
  }

  enroll(course: string) {
    this.courses.push(course);
  }

  viewBalance() {
    console.log(`Balance for ${this.name}: $${this.balance}`);
  }

  payTuition(amount: number) {
    if (amount > 0) {
      this.balance += amount;
      console.log(`${this.name} has paid $${amount} towards tuition.`);
    } else {
      console.log("Invalid payment amount.");
    }
  }

  showStatus() {
    console.log(`Student Name: ${this.name}`);
    console.log(`Student ID: ${this.studentID}`);
    console.log(`Courses Enrolled: ${this.courses.join(", ")}`);
    this.viewBalance();
  }
}

const students: Student[] = [];

function addStudent() {
  const name:string =String(prompt("Enter student name: "));
  const newStudent = new Student(name);
  students.push(newStudent);
  console.log(
    `Student ${newStudent.name} with ID ${newStudent.studentID} added.`
  );
}

function enrollStudent() {
  const studentID:number= Number(parseInt(prompt("Enter student ID: ")));
  const student = students.find((s) => s.studentID === studentID);
  if (student) {
    const course =String(prompt("Enter course to enroll: "));
    student.enroll(course);
    console.log(`${student.name} has enrolled in ${course}.`);
  } else {
    console.log("Student not found.");
  }
}

function manageStudent() {
  const studentID:number= Number(parseInt(prompt("Enter student ID: ")));
  const student = students.find((s) => s.studentID === studentID);
  if (student) {
    console.log(`Student found: ${student.name}`);
    while (true) {
      console.log("Choose an option:");
      console.log("1. View Balance");
      console.log("2. Pay Tuition");
      console.log("3. Show Status");
      console.log("4. Exit");
      const option:any=Number(parseInt(prompt("Enter option: ")));
      switch (option) {
        case 1:
          student.viewBalance();
          break;
        case 2:
          const amount = Number(parseInt(prompt("Enter payment amount: ")));
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
  } else {
    console.log("Student not found.");
  }
}

while (true) {
  console.log("Choose an option:");
  console.log("1. Add Student");
  console.log("2. Enroll Student");
  console.log("3. Manage Student");
  console.log("4. Exit");
  const option = Number(parseInt(prompt("Enter option: ")));
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
