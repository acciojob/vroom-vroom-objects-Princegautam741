// Create a constructor function called Car
function Car(make, model) {
  this.make = make;
  this.model = model;
}

// Add a method to the Car prototype called getMakeModel()
Car.prototype.getMakeModel = function() {
  return `${this.make} ${this.model}`;
};

// Create a constructor function called SportsCar
function SportsCar(make, model, topSpeed) {
  // Call the Car constructor with the make and model
  Car.call(this, make, model);
  this.topSpeed = topSpeed;
}

// Inherit the Car prototype in the SportsCar prototype
SportsCar.prototype = Object.create(Car.prototype);

// Add a method to the SportsCar prototype called getTopSpeed()
SportsCar.prototype.getTopSpeed = function() {
  return this.topSpeed;
};

// Example usage
const myCar = new Car("Toyota", "Camry");
console.log("Car Make and Model:", myCar.getMakeModel()); // Output: Toyota Camry

const mySportsCar = new SportsCar("Ferrari", "458 Italia", 200);
console.log("Sports Car Make and Model:", mySportsCar.getMakeModel()); // Output: Ferrari 458 Italia
console.log("Sports Car Top Speed:", mySportsCar.getTopSpeed()); // Output: 200
