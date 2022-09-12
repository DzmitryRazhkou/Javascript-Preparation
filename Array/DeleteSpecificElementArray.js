const or = [1, 3, "x", 5];

const del = 2;

const newArray = [...or.slice(0, del), ...or.slice(del + 1)];
console.log(newArray);
