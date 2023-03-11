function factorial(num) {
    let fact = 1;
    if (num === 0) {
        return 1;
    }

    for (let i = 1; i < num; i++) {
        fact = fact * i;
    }
    return fact;
}

console.log(factorial(5));

// Recursion:

function fact_recursion(num) {
    if (num === 0) {
        return 1
    } else {
        return num * factorial(num - 1);
    }
}

console.log(fact_recursion(5));
