class Car {
  constructor(make, model, year) {
    this.model = model;
    this.make = make;
    this.year = year;
  }

  start() {
    console.log(this.make + " just started the engine.");
  }
}

class EV extends Car {
  start() {
    console.log(this.make + " got 96% of the battery. ");
  }
}

let car = new Car("Tesla", "Cybertruck", "2019");
car.start();

let r = new EV("Chevy", "Silverado EV", 2023);
r.start();
