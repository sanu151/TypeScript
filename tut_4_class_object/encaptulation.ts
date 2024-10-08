// Access Modifires : public, protected, private

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

  constructor(userName: string, age: number, studentId: number) {
    super(userName, age);
    this.studentId = studentId;
  }

  display1(): void {
    this.display();
    console.log(`ID : ${this.studentId}`);
  }
}

let user1 = new Users("Supriyo", 36);
user1.userName = "Sanu";

let student1 = new Students("Rupa Das", 26, 1234);

user1.display();
student1.display1();
