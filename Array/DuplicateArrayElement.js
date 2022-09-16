const ids = ["T", "T", "P"];
var y = ids.filter((el, index, arr) => arr.indexOf(el) == index);
var d = y.sort((a, b) => a - b);
console.log(d);
