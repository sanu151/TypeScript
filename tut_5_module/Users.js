"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Uses = void 0;
var Uses = /** @class */ (function () {
    function Uses(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    Uses.prototype.display = function () {
        console.log("Name : ".concat(this.userName));
        console.log("Age : ".concat(this.age));
    };
    return Uses;
}());
exports.Uses = Uses;
