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
var UsersData = /** @class */ (function () {
    function UsersData(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    return UsersData;
}());
var StudentData = /** @class */ (function (_super) {
    __extends(StudentData, _super);
    function StudentData(userName, age, studentId) {
        var _this = _super.call(this, userName, age) || this;
        _this.studentId = studentId;
        return _this;
    }
    StudentData.prototype.display = function () {
        console.log("Student Name : ".concat(this.userName));
        console.log("Student Age : ".concat(this.age));
        console.log("Student ID : ".concat(this.studentId));
    };
    return StudentData;
}(UsersData));
var std1 = new StudentData("Supeiyo Das", 36, 21913030024);
std1.display();
