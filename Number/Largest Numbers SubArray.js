function largestNumbersSubArray(numbers) {
    let result = []
    for (let i = 0; i < numbers.length; i++) {
        let largestNumber = numbers[i][0]
        for (let j = 0; j < numbers[i].length; j++) {
            if (numbers[i][j] > largestNumber){
                largestNumber = numbers[i][j]
            }
        }
        result.push(largestNumber)
    }
    return result
}

let inputArray = [[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39]];
let max = largestNumbersSubArray(inputArray)
console.log(max)
