// function - void: return nothing
var display;
display = function () {
    console.log("Hello World!");
};
display();
// function with paramater : number, returns : number
var addNumbers;
addNumbers = function (num1, num2) {
    var result = num1 + num2;
    return result;
};
console.log(addNumbers(22, 45));
// function with parameter : object, returns: void
var person;
person = function (name, age, gender) {
    var data = {
        name: name,
        age: age,
        gender: gender,
    };
    console.log("Name : ".concat(data.name));
    console.log("Age : ".concat(data.age));
    console.log("Gender : ".concat(data.gender));
};
var person1 = person("Supriyo Das", 37, "Male");
person1;
