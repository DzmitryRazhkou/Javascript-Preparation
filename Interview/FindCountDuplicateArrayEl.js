const res = ["Banana", "April", "May", "Mark", "May", "Apple", "May"];
let fst = res.reduce((x, y) => {
  if (x[y] == undefined) {
    x[y] = 1;
    return x;
  } else {
    x[y]++;
    return x;
  }
}, {});

for (let [x, y] of Object.entries(fst)) {
  console.log(`${x} -> ${y}`);
}
