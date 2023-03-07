class Airport {
    constructor(city, state, name) {
        this.city = city
        this.state = state
        this.name = name
    }

    print() {
        console.log(`The airport of ${this.city} accepts from airport around country. `)
    }

//     Setter --->
    set setAirport(name) {
        this.name = name
    }

//     Getter --->
    get getAirport() {
        console.log(`${this.city} ${this.state} ${this.name}`)
    }
}

const air = new Airport("Philadelphia", "PA", "PHI")
air.getAirport
air.print()