import { Students } from "./Student";
import { Uses } from "./Users";

let user1 = new Uses("Supriyo Das", 36);
let student1 = new Students("Rupa Das", 26, 10123);

console.log("User Object : ");
user1.display();
console.log("_________________");
console.log("Student Object : ");
student1.display1();
