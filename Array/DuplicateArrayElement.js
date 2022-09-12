const ids = [10, 5, 12, 7, 9, 5, 12];
var y = ids.filter((ele, index, arr) => arr.indexOf(ele) != index);
console.log(y);
