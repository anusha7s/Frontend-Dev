"use strict";

// Q1: Dynamic Data Parser – Clean and categorize mixed API data

const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

const validNumbers = [];
const invalidEntries = [];

console.log("Dynamic Data Parser Report\n" + "=".repeat(40));

for (let item of apiData) {
    console.log(`Processing: "${item}" (type: ${typeof item})`);

    // Convert to Number
    const numValue = Number(item);

    // Check if conversion is valid (not NaN, not from non-numeric strings)
    if (!isNaN(numValue) && item !== "" && item !== " " && typeof item !== "boolean") {
        validNumbers.push(numValue);
        console.log(`Valid number → ${numValue}`);
    } else {
        invalidEntries.push({
            original: item,
            attemptedNumber: numValue,
            reason: isNaN(numValue) ? "Not a number" :
                    item === "" || item === " " ? "Empty/whitespace" :
                    typeof item === "boolean" ? "Boolean" : "Invalid format"
        });
        console.log(`Invalid → skipped`);
    }
}

console.log("\nFinal Report");
console.log("Valid Numbers   :", validNumbers);
console.log("Invalid Entries :", invalidEntries);
console.log(`Total Valid: ${validNumbers.length} | Invalid: ${invalidEntries.length}`);