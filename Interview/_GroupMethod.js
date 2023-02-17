const movies = [
  { title: "Sonic the Hedgehog", year: 2020 },
  { title: "Mulan", year: 2020 },
  { title: "Godzilla vs. Kong", year: 2021 },
];

function groupBy(arr, criteria) {
  const newObj = arr.reduce((x, y) => {
    if (!x[y[criteria]]) {
      x[y[criteria]] = [];
    }
    x[y[criteria]].push(y);
    return x;
  }, {});
  return newObj;
}

let moveByYear = groupBy(movies, "year");
console.log(moveByYear);
