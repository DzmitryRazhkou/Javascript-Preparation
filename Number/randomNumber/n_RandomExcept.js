function generateRandomExcept(except, min, max) {
    let random = Math.floor(Math.floor() * (max - min + 1) + min)
    return ([except].includes(random)) ? generateRandomExcept(min, max) : random
}

let r = generateRandomExcept(5, 1, 15)
console.log(r)