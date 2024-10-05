// Create Class
var UserData = /** @class */ (function () {
    // constructor
    function UserData(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    // method
    UserData.prototype.display = function () {
        console.log("User Name : ".concat(this.userName, ", Age : ").concat(this.age));
    };
    return UserData;
}());
// Create Object
var person1 = new UserData("Supriyo Das", 36);
var person2 = new UserData("Rupa Das", 26);
person1.display();
person2.display();
