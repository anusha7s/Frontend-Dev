"use strict";

// Q3: Transaction Validator with custom errors

const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

const validTransactions = [];
const errors = [];

console.log("Transaction Validation Report\n" + "=".repeat(45));

for (let i = 0; i < transactions.length; i++) {
    const tx = transactions[i];

    try {
        if (tx === null || tx === undefined) {
            throw new Error("Transaction is null or undefined");
        }
        if (!tx.id || tx.id <= 0) {
            throw new Error("Missing or invalid ID");
        }
        if (!tx.hasOwnProperty("amount")) {
            throw new Error("Missing amount property");
        }
        if (tx.amount < 0) {
            throw new Error("Negative amount not allowed");
        }

        validTransactions.push(tx);
        console.log(`Success: ID ${tx.id} → ₹${tx.amount}`);

    } catch (err) {
        errors.push({
            index: i,
            transaction: tx,
            error: err.message
        });
        console.log(`Failed: Index ${i} → ${err.message}`);
    }
}

console.log("\nSummary");
console.log(`Valid Transactions  : ${validTransactions.length}`);
console.log(`Failed Transactions : ${errors.length}`);