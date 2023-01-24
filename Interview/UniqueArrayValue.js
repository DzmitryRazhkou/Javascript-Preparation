const Ids = [10, 5, 5, 10, 2, 3, 18];
let res = Ids.filter((el, ind, ar) => ar.indexOf(el) == ind).sort(
  (x, y) => x - y
);

console.log(res);
