// Q1: Student Result Processing using Class and reduce()

class Student {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks; // Array of numbers
    }

    calculateAverage() {
        const total = this.marks.reduce((sum, mark) => sum + mark, 0);
        return total / this.marks.length;
    }

    getGrade() {
        const avg = this.calculateAverage();
        if (avg >= 90) return "A";
        if (avg >= 80) return "B";
        if (avg >= 70) return "C";
        return "F";
    }

    displayResult() {
        console.log(`Student: ${this.name}`);
        console.log(`Marks: ${this.marks.join(", ")}`);
        console.log(`Average: ${this.calculateAverage().toFixed(2)}`);
        console.log(`Grade: ${this.getGrade()}\n`);
    }
}

// Test with 3 students
const students = [
    new Student("Anusha", [95, 88, 92, 97, 90]),
    new Student("Priya", [78, 82, 75, 80, 88]),
    new Student("Rahul", [65, 58, 70, 62, 68])
];

console.log("=== Student Results ===\n");
students.forEach(student => student.displayResult());