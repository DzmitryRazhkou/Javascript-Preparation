const fibonacci = (num) => {
    let n1 = 0;
    let n2 = 1;
    let sum;

    for (let i = 1; i <= num; i++) {
        console.log(n1);
        sum = n1 + n2;
        n1 = n2;
        n2 = sum;
    }
};
fibonacci(12);
