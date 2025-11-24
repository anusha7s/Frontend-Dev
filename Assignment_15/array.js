// Q2: applyOperation with callback functions

function applyOperation(numbers, operation) {
    return numbers.map(operation); // Apply callback to each element
}

// Callback functions
const double = (num) => num * 2;
const square = (num) => num ** 2;

const numbers = [1, 2, 3, 4];

console.log("Original:", numbers);
console.log("Doubled :", applyOperation(numbers, double));
console.log("Squared :", applyOperation(numbers, square));