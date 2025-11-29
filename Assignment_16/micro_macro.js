// Q2: Microtask vs Macrotask – Event Loop Priority

console.log("Start");

setTimeout(() => {
    console.log("Macrotask: setTimeout ran"); // Runs last
}, 0);

Promise.resolve()
    .then(() => console.log("Microtask: Promise.then #1"))
    .then(() => console.log("Microtask: Promise.then #2"));

console.log("Synchronous: End");

