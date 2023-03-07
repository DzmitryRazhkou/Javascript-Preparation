class Car {
    constructor(make, model, body) {
        this.make = make
        this.model = model
        this.body = body
    }

    startEngine() {
        console.log(`${this.make} ${this.model} ${this.body} starts engine with ignition. `)
    }
}

const car = new Car("Lexus", "RX350", "SUV")
car.startEngine();
console.log(car.make)