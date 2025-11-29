// Q5: Refactor Callback Hell → Clean async/await

// Helper function that returns a Promise
function delayStep(stepName, delay = 1000) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`${stepName} completed`);
            resolve();
        }, delay);
    });
}

// Callback Hell Version (Ugly!)
console.log("Callback Hell Version:");
delayStep("Design", 1000, () => {
    delayStep("Build", 1000, () => {
        delayStep("Test", 1000, () => {
            delayStep("Deploy", 1000, () => {
                delayStep("Celebrate", 1000, () => {
                    console.log("Pipeline done (callback hell)");
                });
            });
        });
    });
});

// Clean async/await version
async function runPipeline() {
    console.log("\nClean async/await Version:");
    try {
        await delayStep("Design");
        await delayStep("Build");
        await delayStep("Test");
        await delayStep("Deploy");
        await delayStep("Celebrate");
        console.log("Pipeline done – clean and readable!");
    } catch (err) {
        console.error("Pipeline failed:", err);
    }
}

runPipeline();

/*
Why async/await is better:
- Flat, readable, sequential code
- Easier error handling with try/catch
- No pyramid of doom
- Looks like synchronous code but is fully async
*/