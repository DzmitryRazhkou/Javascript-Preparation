function fizzBuzz(bound) {
    for (let i = 1; i < bound; i++) {
        if (i % 5 === 0 && i % 3 === 0) {
            console.log("Fizz Buzz")
        } else if (i % 3 == 0) {
            console.log("Fizz")
        } else if (i % 5 === 0) {
            console.log("Buzz")
        } else {
            console.log(i)
        }
    }
}

fizzBuzz(50);
