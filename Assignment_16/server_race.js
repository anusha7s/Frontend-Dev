// Q4: Promise.all() vs Promise.race() – DevOps Servers

function serverA() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.3) {
                resolve("Server A deployed successfully");
            } else {
                reject("Server A: Deployment failed");
            }
        }, 2000);
    });
}

function serverB() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Server B deployed successfully"), 3000);
    });
}

console.log("Starting deployment to both servers...\n");

// Promise.race() – who wins?
Promise.race([serverA(), serverB()])
    .then(winner => {
        console.log("Fastest response:", winner);
    })
    .catch(err => console.log(err));

// Promise.all() – wait for both
Promise.all([serverA(), serverB()])
    .then(results => {
        console.log("\nDeployment completed for all servers");
        results.forEach(r => console.log("→", r));
    })
    .catch(err => {
        console.error("One server failed:", err);
    });