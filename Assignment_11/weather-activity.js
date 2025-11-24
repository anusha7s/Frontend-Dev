// Q5: Weather Activity Planner

const temperature = 28;        // in °C
const isRaining = false;
const windSpeed = 15;          // in km/h

let activity;

if (isRaining) {
    activity = "Stay indoors with hot coffee.";
} else if (temperature > 35) {
    activity = "Go swimming.";
} else if (temperature < 15 && windSpeed > 20) {
    activity = "Too cold and windy — stay home.";
} else {
    activity = "Perfect day for a walk.";
}

console.log(`Temperature: ${temperature}°C`);
console.log(`Raining: ${isRaining}`);
console.log(`Wind Speed: ${windSpeed} km/h`);
console.log(`Recommendation: ${activity}`);