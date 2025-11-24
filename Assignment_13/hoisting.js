"use strict";

console.log("Hoisting Lab Fixed Version\n" + "=".repeat(35));

// var is hoisted → undefined
var score;
console.log("score (var hoisted):", score); // undefined

// Function declaration is fully hoisted
function announce() { console.log("Game started"); } // Works

announce();

score = 50;
console.log("score after assignment:", score);

// let/const are NOT hoisted (Temporal Dead Zone)
let status = "ready"; // Must be declared before use

function startGame() {
    console.log("Status inside function:", status);
}
startGame();

// Arrow function version – NOT hoisted!
const announceArrow = () => console.log("Arrow: Game started");
announceArrow(); // Works only if declared before call

console.log("\nKey Points:");
console.log("• var → hoisted + initialized as undefined");
console.log("• function declarations → fully hoisted");
console.log("• let/const/arrow functions → NOT hoisted (TDZ)");