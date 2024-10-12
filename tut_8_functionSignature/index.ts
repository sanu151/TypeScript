// function - void: return nothing
const display = (): void => {
  console.log("Hello World!");
};
display();

// function with paramater : number
const addNumbers = (num1: number, num2: number): number => {
  let result = num1 + num2;
  return result;
};
console.log(addNumbers(22, 45));

// function with parameter : object
const person = (name: string, age: number, gender: string) => {
  let data: { name: string; age: number; gender: string } = {
    name: name,
    age: age,
    gender: gender,
  };
  return data;
};
const person1 = person("Supriyo Das", 37, "Male");
console.log(`Name : ${person1.name}`);
console.log(`Age : ${person1.age}`);
console.log(`Gender : ${person1.gender}`);
