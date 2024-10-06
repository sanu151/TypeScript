// Parent Class
class Users {
  userName: string;
  age: number;

  constructor(userName: string, age: number) {
    this.userName = userName;
    this.age = age;
  }

  display(): void {
    console.log(`Name : ${this.userName}`);
    console.log(`Age : ${this.age}`);
  }
}

let user1 = new Users("Supriyo Das", 37);

// Child class inherite parent class
class Student extends Users {
  studentId: number;

  constructor(userName: string, age: number, studentId: number) {
    super(userName, age);
    this.studentId = studentId;
  }

  displayStudent(): void {
    this.display();
    console.log(`Student ID : ${this.studentId}`);
  }
}

let student1 = new Student("Rishika Das", 6, 24113);

user1.display();
student1.displayStudent();
