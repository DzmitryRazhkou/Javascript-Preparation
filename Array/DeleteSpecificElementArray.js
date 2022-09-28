const or = [1, 3, "x", 5];

const del = 2;

var t = or.slice(0, del); // 1, 3
console.log(t);

var r = or.slice(del + 1); // 5
console.log(r);

const newArray = [...or.slice(0, del), ...or.slice(del + 1)];
console.log(newArray);
