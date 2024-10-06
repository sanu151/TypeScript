abstract class UsersData {
  userName: string;
  age: number;

  constructor(userName: string, age: number) {
    this.userName = userName;
    this.age = age;
  }

  abstract display(): void;
}

class StudentData extends UsersData {
  studentId: number;

  constructor(userName: string, age: number, studentId: number) {
    super(userName, age);
    this.studentId = studentId;
  }

  display(): void {
    console.log(`Student Name : ${this.userName}`);
    console.log(`Student Age : ${this.age}`);
    console.log(`Student ID : ${this.studentId}`);
  }
}

let std1 = new StudentData("Supeiyo Das", 36, 21913030024);

std1.display();
