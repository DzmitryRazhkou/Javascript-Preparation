function makeInputVerifier(minimum, maximum) {
    let min = minimum
    let max = maximum

    return function verify(arg) {
        if (arg > max) return "Input is more than maximum value"
        if (arg >= min && arg <= max) return "Input is in range"
        return "Input is less than minimum value"
    }
}

function makeInputVerifier_(minimum, maximum) {
    let min = minimum
    let max = maximum

    return function verify(arg) {
        if (arg > max) {
            console.log("Input is more than maximum value")
        } else if (arg >= min && arg <= max) {
            console.log("Input is in range")
        } else {
            console.log("Input is less than minimum value")
        }
    }
}

function raisingPower(arr) {
    let arrayModulos = []
    let index = 0

    for (let index of arr) {
        arrayModulos.push(Math.pow(arr[index], arr[index + 1]) % (Math.pow(10, 9) + 7))
        index++;
    }
    let maxValue = arrayModulos.maxValue
    return arrayModulos.indexOf(maxValue)
}

function groupTransaction(transaction) {
    let counts = []
    for (let i = 0; i < transaction.length; i++) {
        counts[transaction[i]] = (counts[transaction[i]] || 0) + 1
    }
    return Object.keys(counts).sort().map((z) => z+ " -> " +counts[z])
}

let arr = [12, 7, 12, 98, 75]
console.log(groupTransaction(arr))