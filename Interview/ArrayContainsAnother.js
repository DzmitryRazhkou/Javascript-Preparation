let arr1 = [1, 5, 10, 2, 7, 12];
let arr2 = [5, 2];
let isFound = arr1.some((s) => arr2.includes(s));
console.log(isFound);
