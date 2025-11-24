// Q3: this behavior in arrow vs normal functions

const user = {
    name: "Sara",

    // Arrow function → does NOT have its own 'this'
    showNameArrow: () => {
        console.log("Arrow →", this.name); // 'this' refers to global (undefined in strict mode)
    },

    // Normal function → 'this' refers to the object
    showNameNormal() {
        console.log("Normal →", this.name);
    }
};

console.log("=== this in Arrow vs Normal Functions ===");
user.showNameArrow();   // Output: undefined
user.showNameNormal();  // Output: Sara

// Fix: Use normal function or bind arrow
const userFixed = {
    name: "Sara",
    showName: function() {
        console.log("Fixed →", this.name);
    }
};
userFixed.showName(); // Sara