const ev = [1, 34, 57, 92, 17, 905, 75];

function arrayMax(arr) {
  return arr.reduce(function (x, y) {
    return x > y ? x : y;
  });
}

console.log(arrayMax(ev));
