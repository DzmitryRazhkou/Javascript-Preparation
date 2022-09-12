const first = [1, 2, 5, 8, 9, 12, 15];
const second = [1, 2, 3, 5];

let res = first.some((ele) => second.includes(ele));

console.log(res);
