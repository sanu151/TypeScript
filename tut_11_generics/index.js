// Generics can handel any type of data.
function userInfo(id, name, age) {
    console.log("ID: ".concat(id, ", Name: ").concat(name, ", Age: ").concat(age));
}
userInfo(101, "Supriyo Das", "32");
userInfo("102", null, 42);
var todos = function (todo) {
    console.log(todo);
};
todos({ name: "Rupa Das", age: 25, gpa: 3.45 });
todos("Hello World");
todos(true);
