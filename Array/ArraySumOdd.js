let arr = [12, 35, 75, 100, 90, 24, 30, -12.7, 0, 12, 90];

let y = arr.filter((arr) => arr % 2 != 0).reduce((t, w) => t + w, 0);
console.log(y);

let even = arr.filter((a) => a % 2 == 0).reduce((x, y) => x + y);
console.log(even);
