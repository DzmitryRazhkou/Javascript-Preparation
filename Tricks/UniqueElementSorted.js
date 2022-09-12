const Ids = [13, 15, 35, 50, 75, 12, 12, 50, 35, 75];

const sorted = Ids.filter((ele, index, arr) => arr.indexOf(ele) == index).sort(
  (a, b) => {
    return a - b;
  }
);

console.log(sorted);
