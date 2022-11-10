let arr = [12, 75, 50, 50, 25, 12];

// 1st Method:
let set = new Set(arr);

for (const s of set) {
  let count = 0;
  for (const l of arr) {
    if (s == l) {
      count++;
    }
  }
  if (count > 1) {
    console.log(s);
  }
}

console.log("_____________");

// 2nd Method:
let y = arr
  .filter((el, index, arr) => arr.indexOf(el) != index)
  .sort((x, y) => x - y);
console.log(y);
