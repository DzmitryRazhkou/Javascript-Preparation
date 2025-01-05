function summarizeNumbers(num) {
    let sum = 0;
    for (let i = 0; i <= num; i++) {
        sum = sum + i;
    }
    console.log(sum)
}

function addRecursion(num) {
    if (num != 0) {
        return num + addRecursion(num - 1);
    } else {
        return num;
    }
}

summarizeNumbers(12)
console.log(addRecursion(12));
