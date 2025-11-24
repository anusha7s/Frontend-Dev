"use strict";

// Q4: Debugging Mystery – Strict Mode catches undeclared assignment

// This will THROW an error in strict mode:
// greeting = "Welcome";  // ReferenceError: greeting is not defined

function showMessage() {
    let greeting = "Welcome Guest!";  // Fixed: Proper declaration with let
    console.log(greeting);
}

showMessage();


console.log("Strict mode prevents accidental global variables!");