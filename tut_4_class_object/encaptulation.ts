// Access Modifires : public, protected, private, readonly

class Users {
  public userName: string; //userName is public, so it can be accessed and modified from anywhere.
  protected age: number; //age is protected, so it can be accessed and modified within the Users class and its subclasses.

  constructor(userName: string, age: number) {
    this.userName = userName;
    this.age = age;
  }

  display(): void {
    console.log(`Name : ${this.userName}`);
    console.log(`Age : ${this.age}`);
  }
}

class Students extends Users {
  private studentId: number; //studentId is private, so it can only be accessed and modified within the Students class.
  readonly program: string; // program is readonly, so it cannot be modified after initialized. Once a readonly property is assigned a value, it cannot be changed.

  constructor(
    userName: string,
    age: number,
    studentId: number,
    program: string
  ) {
    super(userName, age);
    this.studentId = studentId;
    this.program = program;
  }

  display1(): void {
    this.display();
    console.log(`ID : ${this.studentId}`);
    console.log(`Program : ${this.program}`);
  }

  // set and get private properties from outside the class we need to create a public method
  setStudentId(studentId: number): void {
    this.studentId = studentId;
  }

  getStudentId(): number {
    return this.studentId;
  }
}

let user1 = new Users("Supriyo", 36);
user1.userName = "Sanu";
user1.display();

let student1 = new Students("Rupa Das", 26, 1234, "BCA");
student1.display1();
student1.setStudentId(4321);
console.log(student1.getStudentId());
