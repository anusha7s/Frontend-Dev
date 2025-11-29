const studentName = "Rahul";
const marks = [88, 92, 76, 45, 91];  // 5 subjects
const totalMarks = marks.reduce((sum, mark) => sum + mark, 0);
const percentage = (totalMarks / (marks.length * 100)) * 100;

// Check if student failed in any subject (<35)
const hasFailedSubject = marks.some(mark => mark < 35);

let result;

if (hasFailedSubject) {
    result = "Detained (Failed in one or more subjects)";
} else if (percentage >= 85) {
    result = "Promoted with Distinction";
} else if (percentage >= 50) {
    result = "Promoted";
} else {
    result = "Detained";
}

console.log(`Student: ${studentName}`);
console.log(`Marks: ${marks.join(", ")}`);
console.log(`Percentage: ${percentage.toFixed(2)}%`);
console.log(`Result: ${result}`);