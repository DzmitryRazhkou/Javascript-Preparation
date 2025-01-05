function factorialRegular(num) {
    let fact = 1;
    if (num === 0) {
        return 1;
    }

    for (let i = 1; i <= num; i++) {
        fact = fact * i;
    }
    return fact;
}
function factorialRecursion(num) {
    if (num === 0) {
        return 1
    } else {
        return num * factorialRecursion(num - 1);
    }
}

console.log(factorialRegular(5));
console.log(factorialRecursion(5));
