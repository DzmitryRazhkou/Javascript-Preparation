var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr.sort();

let n = arr.length - 1;

while (arr[n] === arr[arr.length - 1]) {
  n--;
}
console.log(n);

console.log("_______________");

arr.sort();

let y = arr.length - 1;

while (arr[y] === arr[arr.length - 1]) {
  y--;
}

console.log(y);
