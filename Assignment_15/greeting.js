// Q1: Callback Function Flow

function showEndMessage() {
    console.log("Welcome to the course!");
}

function greetUser(name, callback) {
    console.log(`Hello ${name}`);
    
    // Execute the callback after greeting
    callback();
}

// Demonstrate callback execution
console.log("=== Callback Example ===");
greetUser("Anusha", showEndMessage);