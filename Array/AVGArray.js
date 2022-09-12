let arr = [12, 35, 75, 100, 90, 24, 30, -12.7, 0];

let s = arr.reduce((s, t) => s + t, 0);

let avg = s / arr.length;
console.log(avg);
