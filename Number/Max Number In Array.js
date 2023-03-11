const array = [75, 12, 90, 50, 12, 35, 0, 7]

// 1. Method #1
function maxArray(str) {
    let max = Math.max(...str)
    console.log(max)
}

maxArray(array)

// 2. Method #2
function maxArrayElement(str) {
    let max = str.reduce((x, y) => {
        return x > y ? x : y
    })
    console.log(max)
}

maxArrayElement(array)

// 3. Method #3
function maxArrayThird(arr) {
    let max = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    console.log(max)
}

maxArrayThird(array)

function maxElementIndexArray(arr) {
    const max = arr.reduce((a, b) => (a > b ? a : b));
    let index = arr.indexOf(max);
    console.log("Max Element Array Index is: " + index)
}
maxElementIndexArray(array)