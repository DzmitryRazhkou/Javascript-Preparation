const duplicateArray = [12, 15, 50, 35, 50, 12, 75, 35];
// const duplicates = duplicateArray.filter(
//   (ele, index, arr) => arr.indexOf(ele) != index
// );
// console.log(duplicates);

var t = duplicateArray.filter((le, index, ar) => ar.indexOf(le) != index);
console.log(t);
