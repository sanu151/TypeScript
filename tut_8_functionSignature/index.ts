// function - void: return nothing
let display: () => void;
display = () => {
  console.log("Hello World!");
};
display();

// function with paramater : number, returns : number
let addNumbers: (num1: number, num2: number) => number;
addNumbers = (num1: number, num2: number) => {
  let result = num1 + num2;
  return result;
};
console.log(addNumbers(22, 45));

// function with parameter : object, returns: void
let person: (name: string, age: number, gender: string) => void;
person = (name: string, age: number, gender: string) => {
  let data: { name: string; age: number; gender: string } = {
    name: name,
    age: age,
    gender: gender,
  };
  console.log(`Name : ${data.name}`);
  console.log(`Age : ${data.age}`);
  console.log(`Gender : ${data.gender}`);
};
const person1 = person("Supriyo Das", 37, "Male");
person1;
