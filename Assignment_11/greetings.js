const userName = "Anusha";                    // Change this to your name
const currentHour = new Date().getHours();    // Gets current hour (0–23)

// Determine greeting based on time of day
let greeting;

if (currentHour < 12) {
    greeting = `Good Morning, ${userName}!`;
} else if (currentHour >= 12 && currentHour <= 17) {
    greeting = `Good Afternoon, ${userName}!`;
} else {
    greeting = `Good Evening, ${userName}!`;
}

// Output using template literal
console.log(greeting);