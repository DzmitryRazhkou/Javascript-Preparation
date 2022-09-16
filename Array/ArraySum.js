let arr = [12, 35, 75, 100, 90, 24, 30, -12.7, 0];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
  sum = sum + arr[i];
}
console.log(sum);

console.log("________");

// Reduce

let sum_ = arr.reduce((a, b) => a + b);
console.log(sum_);

// Mapped:
let sumaped = arr.map((arr) => arr * 3.14);
console.log(sumaped);
