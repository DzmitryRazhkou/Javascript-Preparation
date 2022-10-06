const months = ["May", "April", "May", "Mark", "May", "App"];

const d = months.reduce((x, y) => {
  if (x[y] == undefined) {
    x[y] = 1;
    return x;
  } else {
    x[y]++;
    return x;
  }
}, {});

console.log(d);
