let arr = [12, 35, 75, 100, 90, 24, 30, -12.7, 0];

let max = arr[0];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}
console.log(max);
