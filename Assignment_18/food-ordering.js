// Q2: Online Food Ordering with map(), reduce() and error handling

const menu = {
    pizza: 599,
    burger: 199,
    pasta: 399,
    salad: 149,
    coke: 59
};

function calculateBill(orderItems) {
    try {
        if (!Array.isArray(orderItems) || orderItems.length === 0) {
            throw new Error("Order cannot be empty!");
        }

        const prices = orderItems.map(item => {
            const price = menu[item.toLowerCase()];
            if (price === undefined) {
                throw new Error(`Item "${item}" is not on the menu!`);
            }
            return price;
        });

        const total = prices.reduce((sum, price) => sum + price, 0);

        console.log("Order Items:", orderItems);
        console.log("Bill Details:");
        orderItems.forEach((item, i) => {
            console.log(`  ${item.padEnd(10)} → ₹${prices[i]}`);
        });
        console.log(`Total Bill: ₹${total}\n`);
        return total;

    } catch (error) {
        console.error("Order Failed:", error.message);
    }
}

// Test cases
calculateBill(["Pizza", "Coke", "Burger"]);
calculateBill(["pasta", "Salad"]);
calculateBill(["Pizza", "Noodles"]); // Invalid item
calculateBill([]); // Empty order