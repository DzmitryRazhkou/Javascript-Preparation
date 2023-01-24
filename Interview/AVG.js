const studentIds = [10, 5, 12, 8, 30, 2, 20, 101];
let total = studentIds.reduce((x, y) => x + y);
let length = studentIds.length;
console.log(total / length);
