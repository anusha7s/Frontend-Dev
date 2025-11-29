// Q3: Convert Callback to Promise-based Bug Tracker

function getBugs() {
    return new Promise((resolve, reject) => {
        console.log("Fetching bugs from server...");
        setTimeout(() => {
            const success = Math.random() > 0.3;
            if (success) {
                const bugs = ["UI glitch", "API timeout", "Login failure", "404 Page"];
                resolve(bugs);
            } else {
                reject("Server down – cannot fetch bugs");
            }
        }, 1000);
    });
}

// Use the Promise
getBugs()
    .then(bugs => {
        console.log(`Found ${bugs.length} bugs:`);
        console.table(bugs);
    })
    .catch(error => {
        console.error("Failed to load bugs:", error);
    });