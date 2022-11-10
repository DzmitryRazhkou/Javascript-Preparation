var arr = [];
const min = 41;
const max = 67;

while (arr.length < 8) {
  const mdInt = Math.floor(Math.random() * (max - min + 1) + min);
  arr.push(mdInt);
}
console.log(arr.sort());
