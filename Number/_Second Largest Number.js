function findSecondHighestNumber(numbers) {
    let sorted = numbers.sort((z, v) => v - z)
    let secondMax = sorted[1]
    console.log(secondMax)
}

let y = [67, 125, 99, 4, 4]
findSecondHighestNumber(y)