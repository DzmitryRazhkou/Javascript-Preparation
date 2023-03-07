class Airport {
    constructor(city, state, name) {
        this.city = city
        this.state = state
        this.name = name
    }
    static print() {
        console.log(`The airport accepts all flights from airport around country. `)
    }
}

Airport.print()