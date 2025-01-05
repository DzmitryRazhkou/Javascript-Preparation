function binarySearch(array, target) {
    let min = 0;
    let max = array.length - 1;
    let guess;

    while (min <= max) {
        guess = Math.floor((max + min) / 2)

        if (array[guess] === target) {
            return guess
        } else if (array[guess] < target) {
            min = guess + 1
        } else {
            max = guess - 1
        }
    }
    return -1
}

var arr = [12, 1, 2, 5, 9, 8, 97];
console.log(binarySearch(arr, 1));
