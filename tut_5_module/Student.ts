import { Uses } from "./Users";

export class Students extends Uses {
  studentId: number;

  constructor(userName: string, age: number, studentId: number) {
    super(userName, age);
    this.studentId = studentId;
  }

  display1(): void {
    this.display();
    console.log(`ID : ${this.studentId}`);
  }
}
