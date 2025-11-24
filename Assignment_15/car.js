// Q4: Constructor + Prototype Method Sharing

function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

// Add method to prototype (shared by all instances)
Car.prototype.getDetails = function() {
    console.log(`Car: ${this.brand} ${this.model}`);
};

const car1 = new Car("Toyota", "Camry");
const car2 = new Car("Honda", "Civic");

console.log("=== Prototype Method Sharing ===");
car1.getDetails(); // Toyota Camry
car2.getDetails(); // Honda Civic

// Proof: Both objects share the same method
console.log(car1.getDetails === car2.getDetails); // true