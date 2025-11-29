// Monthly expenses in 5 categories (in ₹ or $)
const expenses = [
    { category: "Food",     amount: 8000 },
    { category: "Travel",   amount: 3000 },
    { category: "Rent",     amount: 15000 },
    { category: "Bills",    amount: 4500 },
    { category: "Leisure",  amount: 3500 }
];

// Calculate total
let total = 0;
for (let exp of expenses) {
    total += exp.amount;
}

// Calculate average and add 10% tax
const average = total / expenses.length;
const tax = total * 0.10;              // 10% tax
const finalAmount = total + tax;

// Display results with 2 decimal places
console.log("=== Monthly Expense Report ===");
console.log(`Total Expenses: ₹${total.toFixed(2)}`);
console.log(`Average Expense: ₹${average.toFixed(2)}`);
console.log(`Tax (10%): ₹${tax.toFixed(2)}`);
console.log(`Final Amount After Tax: ₹${finalAmount.toFixed(2)}`);