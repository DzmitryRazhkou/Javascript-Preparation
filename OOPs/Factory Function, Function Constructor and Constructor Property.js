let person1 = {
    name: "Mike",
    age: 37,
    drink_beer: function () {
        console.log(`${this.name} loves to drink beer. `)
    }
}

let drinker2 = {
    name: "Jack",
    age: 39,
    drink_beer: function () {
        console.log(`${this.name} loves to dink whiskey. `)
    }
}

// Factory Function:
function drinker(name, age) {
    return {
        name: name,
        age: age,
        drink_beer: function () {
            console.log(`${this.name} loves to dink whiskey. `)
        }
    }
}

drinker("Sammy", 75)

// Constructor Function:
function Person(name, age) {
    console.log(this)
    this.name = name
    this.age = age
    this.drink = function () {
        console.log(`${this.name} loves drink whiskey. `)
    }
}

let p = new Person("Ammy", 35)
p.drink()