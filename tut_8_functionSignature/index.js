// function - void: return nothing
var display = function () {
    console.log("Hello World!");
};
display();
// function with paramater : number
var addNumbers = function (num1, num2) {
    var result = num1 + num2;
    return result;
};
console.log(addNumbers(22, 45));
// function with parameter : object
var person = function (name, age, gender) {
    var data = {
        name: name,
        age: age,
        gender: gender,
    };
    return data;
};
var person1 = person("Supriyo Das", 37, "Male");
console.log("Name : ".concat(person1.name));
console.log("Age : ".concat(person1.age));
console.log("Gender : ".concat(person1.gender));
