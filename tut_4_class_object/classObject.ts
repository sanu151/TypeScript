// Create Class
class UserData {
  // properties
  userName: string;
  age: number;

  // constructor
  constructor(userName: string, age: number) {
    this.userName = userName;
    this.age = age;
  }

  // method
  display(): void {
    console.log(`User Name : ${this.userName}, Age : ${this.age}`);
  }
}

// Create Object
let person1 = new UserData("Supriyo Das", 36);
let person2 = new UserData("Rupa Das", 26);

person1.display();
person2.display();
