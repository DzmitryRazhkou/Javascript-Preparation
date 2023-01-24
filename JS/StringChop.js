function stringChop(str, size) {
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    arr.push(str.slice(i, i + size));
    i += size;
  }
  return arr;
}

let s = "Synchronization";

console.log(stringChop(s, 3));
