// Q5: Ride-Sharing App with User → Driver → Trip

class User {
    constructor(name, rating = 5.0) {
        this.name = name;
        this.rating = rating;
    }
}

class Driver extends User {
    constructor(name, rating, vehicle) {
        super(name, rating);
        this.vehicle = vehicle;
    }

    displayInfo() {
        console.log(`Driver: ${this.name} | Rating: ${this.rating} | Vehicle: ${this.vehicle}`);
    }
}

class Trip {
    constructor(driver, fromLocation, toLocation, distance) {
        this.driver = driver;
        this.fromLocation = fromLocation;
        this.toLocation = toLocation;
        this.distance = distance;
    }

    calculateFare() {
        try {
            if (!this.distance || this.distance <= 0) {
                throw new Error("Distance must be a positive number!");
            }

            const baseFare = 50;
            const perKmRate = 12;
            const totalFare = baseFare + (this.distance * perKmRate);

            console.log(`Trip: ${this.fromLocation} → ${this.toLocation}`);
            console.log(`Distance: ${this.distance} km`);
            console.log(`Fare: ₹${totalFare}\n`);
            return totalFare;

        } catch (error) {
            console.error("Trip Booking Failed:", error.message);
        }
    }
}

// Test the system
const driver = new Driver("Rajesh Kumar", 4.8, "Swift Dzire");
driver.displayInfo();

const trip1 = new Trip(driver, "Andheri", "Bandra", 8);
trip1.calculateFare();

const trip2 = new Trip(driver, "Airport", "Powai", -5); // Invalid
trip2.calculateFare();