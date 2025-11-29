// Q1: The Startup Morning – Async Coffee Maker with Promise Chaining

function boilWater() {
    return new Promise((resolve, reject) => {
        console.log("Boiling water...");
        setTimeout(() => {
            if (Math.random() > 0.2) {
                resolve("Water boiled");
            } else {
                reject("Kettle broke!");
            }
        }, 1500);
    });
}

function brewCoffee() {
    return new Promise((resolve) => {
        console.log("Brewing coffee...");
        setTimeout(() => resolve("Coffee brewed"), 1200);
    });
}

function pourIntoCup() {
    return new Promise((resolve) => {
        console.log("Pouring into cup...");
        setTimeout(() => resolve("Coffee poured"), 800);
    });
}

// Promise chaining with error handling
console.log("Starting coffee preparation...\n");

boilWater()
    .then(result => {
        console.log(result);
        return brewCoffee();
    })
    .then(result => {
        console.log(result);
        return pourIntoCup();
    })
    .then(result => {
        console.log(result);
        console.log("\nCoffee ready for the team!");
    })
    .catch(error => {
        console.error("Coffee failed:", error);
    });