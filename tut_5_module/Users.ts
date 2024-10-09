export class Uses {
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
