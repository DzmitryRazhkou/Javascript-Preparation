const ev = [1, 34, 57, 92, 17, 905, 75];

// function arrayMax(arr) {
//   return arr.reduce((x, y) => {
//     return x > y ? x : y;
//   });
// }

// console.log(arrayMax(ev));

function arrMax(arr) {
  return arr.reduce((x, y) => {
    return x > y ? x : y;
  });
}

console.log(arrMax(ev));
