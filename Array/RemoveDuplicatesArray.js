let arr = [12, 35, 75, 100, 90, 24, 30, -12.7, 0, 12, 90];

let set = new Set([]);
arr.forEach((f) => {
  set.add(f);
});

set.forEach((x) => {
  console.log(x);
});
