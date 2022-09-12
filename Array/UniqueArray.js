const y = [12, 12, 15, 75, 50, 195, 105];
const unique = y.filter((ele, index, arr) => arr.indexOf(ele) == index);
console.log(unique.sort((a, b) => a - b));
