// Q3: Product Discount System using Constructor and Prototype

function Product(name, price) {
    this.name = name;
    this.price = price;
}

// Prototype method - shared by all products (abstraction)
Product.prototype.applyDiscount = function(percent) {
    if (percent < 0 || percent > 100) {
        console.log("Invalid discount percentage");
        return this.price;
    }
    const discountAmount = this.price * (percent / 100);
    const newPrice = this.price - discountAmount;
    console.log(`${this.name}: ₹${this.price} → ₹${newPrice.toFixed(2)} (${percent}% off)`);
    return newPrice;
};

// Create 3 products
const p1 = new Product("iPhone 15", 79999);
const p2 = new Product("AirPods Pro", 24900);
const p3 = new Product("MacBook Air", 99900);

console.log("=== Discount Applied ===\n");
p1.applyDiscount(10);
p2.applyDiscount(15);
p3.applyDiscount(5);

// Abstraction benefit: One method works for all products!