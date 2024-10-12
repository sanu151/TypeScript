// Generics can handel any type of data.
function userInfo<X, Y, Z>(id: X, name: Y, age: Z) {
  console.log(`ID: ${id}, Name: ${name}, Age: ${age}`);
}
userInfo(101, "Supriyo Das", "32");
userInfo("102", null, 42);

const todos = <X>(todo: X) => {
  console.log(todo);
};
todos({ name: "Rupa Das", age: 25, gpa: 3.45 });
todos("Hello World");
todos(true);
