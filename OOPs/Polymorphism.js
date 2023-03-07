class Car {
    constructor(make, model, body) {
        this.make = make
        this.model = model
        this.body = body
    }

    startEngine() {
        console.log(`${this.make} ${this.model} ${this.body} starts engine with ignition. `)
    }

    languageKnown() {
        console.log("JavaScript Java Typescript")
    }

}

class EV extends Car {
    constructor(make, model, battery) {
        super(make, model)
        this.battery = battery
    }

    startEngine() {
        console.log(`${this.make} ${this.model} starts electric engine ${this.battery} kWt. `)
    }

    languageKnown() {
        console.log("PHP Swift Groovy")
    }

}

const ev = new EV("Tesla", "Y", 65)
ev.startEngine()
ev.languageKnown();
