var users = [];
var user1 = {
    name: "Supriyo Das",
    age: 37,
    gender: "Male",
};
var user2 = {
    name: "Rupa Das",
    age: 27,
    gender: "Female",
};
users.push(user1);
users.push(user2);
var printUserInfo = function (user) {
    console.log("Name: ".concat(user.name));
    console.log("Age: ".concat(user.age));
    console.log("Gender: ".concat(user.gender));
    console.log(" ");
};
users.forEach(function (user) { return printUserInfo(user); });
