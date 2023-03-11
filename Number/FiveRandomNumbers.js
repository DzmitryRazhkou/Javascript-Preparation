const arr = [];

while (arr.length < 8) {
  let res = Math.floor(Math.random() * 100) + 1;
  arr.push(res);
}

console.log(arr);
