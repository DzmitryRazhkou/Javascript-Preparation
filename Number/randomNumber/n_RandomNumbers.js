function n_RandomNumbersArray(length) {
    let array = []
    while (array.length < length) {
        let result = Math.floor(Math.random() * 100) + 1
        array.push(result)
    }
    console.log(array)
}
n_RandomNumbersArray(12)
