const studentIds = [10, 5, 12, 8, 30, 2, 20, 101];

const maxArray = (arr) => {
  let max = arr.reduce((x, y) => (x > y ? x : y));
  return max;
};

console.log(maxArray(studentIds));
