"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.test = void 0;
class Student {
    constructor(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
let user = new Student("Jane", "M.", "User");
//document.body.textContent = greeter(user);
exports.test = greeter(user);
//# sourceMappingURL=greeter.js.map