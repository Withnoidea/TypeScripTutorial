"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var name = "Alice";
var age = 13;
//类型判断
var score = 90;
var Student = /** @class */ (function () {
    function Student(name, age) {
        this.name = name;
        this.age = age;
    }
    Student.prototype.greet = function () {
        console.log("Hello my name is ".concat(this.name));
    };
    return Student;
}());
var s = new Student("张三", 12);
s.greet();
