const x = 16.75;

const rounded = Math.round(x);
const squareRoot = Math.sqrt(x);
const cube = Math.pow(x, 3);

// Random number between 10 and 50 (inclusive)
const randomNum = Math.floor(Math.random() * 41) + 10;

console.log("Math Utility Dashboard");
console.log("=".repeat(30));
console.log(`Number           : ${x}`);
console.log(`Rounded          : ${rounded}`);
console.log(`Square Root      : ${squareRoot.toFixed(4)}`);
console.log(`x³ (Cube)        : ${cube.toFixed(4)}`);
console.log(`Random (10–50)   : ${randomNum}`);