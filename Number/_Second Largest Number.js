function findSecondHighestNumber(numbers) {
    let sorted = numbers.sort((z, v) => v - z)
    let secondMax = sorted[1]
    console.log(secondMax)
}
function findSecondMax(num) {
    let sorted = num.sort((x, y) => x - y)
    let secMax = sorted[sorted.length - 2]
    console.log(secMax)
}

let y = [67, 125, 99, 4, 4]
findSecondHighestNumber(y)
findSecondMax(y)