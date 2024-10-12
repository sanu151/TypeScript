var Users = /** @class */ (function () {
    function Users(id, name, age) {
        var _this = this;
        this.id = id;
        this.name = name;
        this.age = age;
        this.formatUser = function () {
            return "ID : ".concat(_this.id, ", Name : ").concat(_this.name, ", Age : ").concat(_this.age);
        };
    }
    return Users;
}());
var user1 = new Users(101, "Supriyo Das", 37);
console.log(user1.formatUser());
