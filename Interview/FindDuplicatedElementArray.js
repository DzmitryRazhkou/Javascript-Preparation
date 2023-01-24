const ids = [10, 5, 5, 10, 2, 3, 18];
let res = ids.filter((el, ind, arr) => arr.indexOf(el) != ind);
console.log(res);
