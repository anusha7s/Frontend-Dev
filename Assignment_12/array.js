// Generate 8 random scores between 30 and 100
const scores = Array.from({length: 8}, () => 
    Math.floor(Math.random() * 71) + 30
);

console.log("Student Scores:", scores);

// Calculations
const highest = Math.max(...scores);
const lowest = Math.min(...scores);
const average = scores.reduce((sum, score) => sum + score, 0) / scores.length;

const passedStudents = scores.filter(score => score >= 50).length;

console.log("Performance Summary");
console.log("Highest Score :", highest);
console.log("Lowest Score  :", lowest);
console.log("Average Score :", average.toFixed(2));
console.log("Passed (≥50)  :", passedStudents + "/8 students");

if (average >= 75) {
    console.log("Class Performance: Excellent");
} else if (average >= 60) {
    console.log("Class Performance: Good");
} else {
    console.log("Class Performance: Needs Improvement");
}