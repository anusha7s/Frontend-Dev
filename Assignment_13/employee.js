"use strict";

// Q2: Employee Bonus Calculator with strict mode and error handling

const employees = [
    { name: "Amit", salary: "45000", years: "5" },
    { name: "Sara", salary: "38000", years: "2" },
    { name: "Kiran", salary: "52000", years: "7" }
];

console.log("Employee Bonus Report\n" + "=".repeat(50));

employees.forEach(emp => {
    try {
        // Strict conversion – will throw if not possible
        const salary = parseFloat(emp.salary);
        const years = parseInt(emp.years, 10);

        if (isNaN(salary) || isNaN(years)) {
            throw new Error("Invalid salary or years");
        }

        const bonusRate = years > 3 ? 0.10 : 0.05;
        const bonus = salary * bonusRate;
        const totalPay = salary + bonus;

        console.log(`${emp.name.padEnd(10)} | Years: ${years} | Salary: ₹${salary.toLocaleString()} | Bonus: ₹${bonus.toLocaleString()} (${bonusRate * 100}%) | Total: ₹${totalPay.toLocaleString()}`);

    } catch (error) {
        console.log(`Error processing ${emp.name}: ${error.message}`);
    }
});