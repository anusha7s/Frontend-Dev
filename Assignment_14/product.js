// Q1: E-Commerce Product Manager using ES6 Classes

class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    // Apply discount and return new price
    applyDiscount(percentage) {
        if (percentage < 0 || percentage > 100) return this.price;
        this.price = this.price * (1 - percentage / 100);
        return this.price;
    }

    // Formatted product details
    getDetails() {
        return `${this.name.padEnd(20)} | ₹${this.price.toFixed(2).padStart(8)} | ${this.category}`;
    }
}

// Create products
const products = [
    new Product(101, "iPhone 15", 79999, "Electronics"),
    new Product(102, "Nike Shoes", 5999, "Fashion"),
    new Product(103, "MacBook Pro", 199000, "Electronics"),
    new Product(104, "Coffee Mug", 399, "Home"),
    new Product(105, "Smart Watch", 24999, "Electronics")
];

// Apply 10% discount on first product
products[0].applyDiscount(10);

console.log("All Products:");
products.forEach(p => console.log(p.getDetails()));

console.log("\nProducts with price > 1000:");
products
    .filter(p => p.price > 1000)
    .forEach(p => console.log("→", p.getDetails()));