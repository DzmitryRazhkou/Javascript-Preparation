const y = [12, 12, 15, 75, 50, 195, 105];
const unique = y.filter((ele, index, arr) => arr.indexOf(ele) == index);
console.log(unique.sort((a, b) => a - b));

console.log("___---_____---_____");

const i = y.filter((ele, index, arr) => arr.indexOf(ele) == index);
console.log(i.sort((a, t) => a - t));

const rs = [12, 12, 15, 75, 50, 195, 105];
const un = rs.filter((el, index, arr) => arr.indexOf(el) == index);
console.log(un.sort((e, t) => e - t));
