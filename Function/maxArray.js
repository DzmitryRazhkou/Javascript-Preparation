function maxArray(arr) {
  const max = arr.reduce((a, b) => (a > b ? a : b));
  return arr.indexOf(max);
}

console.log(maxArray([123, 75, 90, 750, 7554]));
