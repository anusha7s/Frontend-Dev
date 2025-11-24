// Q1: Scope Conflict Resolver – Understanding var, let, global vs local

let bonus = 5000;                    // Global variable (accessible everywhere)
console.log("Global bonus (outside):", bonus);

function calculateSalary() {
    let salary = 40000;                // Local variable (function scope)
    let isPermanent = true;          // Change this to false to see effect

    let totalSalary = salary;

    // Only add bonus if employee is permanent
    if (isPermanent) {
        totalSalary += bonus;        // Uses global bonus
        console.log("Bonus applied:", bonus);
    } else {
        console.log("No bonus (not permanent)");
    }

    console.log("Total Salary inside function:", totalSalary);
}

// Call the function
calculateSalary();

// This will cause error if uncommented → proves salary is NOT global
// console.log(salary); // ReferenceError: salary is not defined

console.log("Global bonus (still unchanged):", bonus); // 5000