let arr = [1, 2, 3, 4, 6];
let sum = arr.reduce((a, b) => a + b);
console.log("Sum with missed array is: " + sum);

let sumIt = 0;
for (let i = 1; i <= 6; i++) {
  sumIt += i;
}
console.log("Sum iterated array is: " + sumIt);

let res = sumIt - sum;
console.log("Missed elementis: " + res);
