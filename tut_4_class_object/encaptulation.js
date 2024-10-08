// Access Modifires : public, protected, private
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Users = /** @class */ (function () {
    function Users(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    Users.prototype.display = function () {
        console.log("Name : ".concat(this.userName));
        console.log("Age : ".concat(this.age));
    };
    return Users;
}());
var Students = /** @class */ (function (_super) {
    __extends(Students, _super);
    function Students(userName, age, studentId) {
        var _this = _super.call(this, userName, age) || this;
        _this.studentId = studentId;
        return _this;
    }
    Students.prototype.display1 = function () {
        this.display();
        console.log("ID : ".concat(this.studentId));
    };
    return Students;
}(Users));
var user1 = new Users("Supriyo", 36);
user1.userName = "Sanu";
var student1 = new Students("Rupa Das", 26, 1234);
user1.display();
student1.display1();
