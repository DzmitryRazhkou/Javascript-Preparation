const numberArr = [5, 45, 150, 163, 95, 12, 12.5];

// Max
function findMax(arr) {
  return arr.reduce(function (prev, curr) {
    return prev > curr ? prev : curr;
  });
}

console.log(findMax(numberArr));

// Min

function findMin(arr) {
  return arr.reduce(function (p, v) {
    return p < v ? p : v;
  });
}

console.log(findMin(numberArr));
