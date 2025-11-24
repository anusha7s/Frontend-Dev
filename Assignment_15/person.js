// Q5: Prototype Chain Inheritance (Prototypal Inheritance)

function Person(name) {
    this.name = name;
}

// Method on Person prototype
Person.prototype.greet = function() {
    console.log(`Hello, I'm ${this.name}`);
};

function Student(name, branch) {
    Person.call(this, name);     // Inherit properties
    this.branch = branch;
}

// Set up prototype chain
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

// Add method specific to Student
Student.prototype.showDetails = function() {
    console.log(`Student: ${this.name} | Branch: ${this.branch}`);
};

const student1 = new Student("Rahul", "Computer Science");

console.log("=== Prototype Chain Demo ===");
student1.greet();       // Inherited from Person
student1.showDetails(); // Own method

// Verify prototype chain
console.log("Is student1 instance of Student?", student1 instanceof Student);     // true
console.log("Is student1 instance of Person?", student1 instanceof Person);       // true
console.log("Is student1 instance of Object?", student1 instanceof Object);       // true