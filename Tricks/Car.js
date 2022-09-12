class Car {
  constructor(model, name) {
    this.model = model;
    this.name = name;
  }

  start() {
    console.log(this.name);
  }

  end() {
    console.log("Car stopped");
  }
}

class ElectricCar extends Car {
  dashboard() {
    console.log("Child method");
  }

  start() {
    super.start();
    super.end();
    this.dashboard();
  }
}

evCar = new ElectricCar("Tesla", "Model S");
evCar.start();
