"use strict";
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
exports.__esModule = true;
//useful terminal functions
//tsc main.ts
//node main.ts
//tsc main --watch
//variable declarations
var message = "Hello World";
console.log(message);
var x = 10; //let is for variables that change like sum
var y = 20; //const is for not so changing variables like title
console.log("-------------------------------------------");
//------------------------------------------------------------------------------------------------------------
//variable types
var isBeginner = true;
var total = 0;
var planet = "Mercury";
var sentence = "The first planet from the Sun is " + planet + "\nEarth is the third planet from the Sun";
console.log(sentence);
var n = null;
var u = undefined;
var isNew = null;
var myName = undefined;
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
var person1 = ["Chris", 22];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var Apparel;
(function (Apparel) {
    Apparel[Apparel["Hat"] = 5] = "Hat";
    Apparel[Apparel["Socks"] = 6] = "Socks";
    Apparel[Apparel["Gloves"] = 7] = "Gloves";
})(Apparel || (Apparel = {}));
;
var color = Color.Blue;
var apparel = Apparel.Gloves;
console.log(color);
console.log(apparel);
var randomValue = 10;
randomValue = true;
randomValue = "Battery";
var unknownVariable = "Thor";
function hasName(obj) {
    return !!obj &&
        typeof obj == "object" && "name" in obj;
}
if (hasName(unknownVariable)) {
    console.log(unknownVariable.name);
}
console.log(unknownVariable.toUpperCase());
var a;
a = 10;
a = true;
var b = 20;
//b = true; infers the type
var multiType;
multiType = 20;
multiType = true;
console.log("-------------------------------------------");
//------------------------------------------------------------------------------------------------------------
//functions
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(5, 10));
function subtract(num1, num2, num3) {
    if (num3)
        return num1 - num2 - num3;
    else
        return num1 - num2;
}
console.log(subtract(50, 10));
function multiply(num1, num2, num3) {
    if (num3 === void 0) { num3 = 10; }
    if (num3)
        return num1 * num2 * num3;
    else
        return num1 * num2;
}
console.log(multiply(10, 10, 100));
var person2 = {
    firstName: "Bruce",
    lastName: "Wayne"
};
function fullName(person) {
    console.log(person.firstName + " " + person.lastName);
}
fullName(person2);
console.log("-------------------------------------------");
var person3 = {
    firstName: "Peter",
    lastName: "Parker"
};
var person4 = {
    firstName: "Kratos"
};
function fullNameUsingInterface(person) {
    console.log(person.firstName + " " + person.lastName);
}
fullNameUsingInterface(person3);
fullNameUsingInterface(person4);
console.log("-------------------------------------------");
//------------------------------------------------------------------------------------------------------------
//Classes and access modifiers(public - accessed anywhere, private - accessed only in the contained class, protected - accessed in the contained and derived classes (inheritance))
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good Morning " + this.employeeName);
    };
    return Employee;
}());
var employee1 = new Employee("Nathan Drake");
console.log(employee1.employeeName);
employee1.greet();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super); //inheritance
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log("Manager delegating tasks");
    };
    return Manager;
}(Employee //inheritance
));
var manager1 = new Manager("Booker");
manager1.delegateWork();
manager1.greet();
console.log(manager1.employeeName);
