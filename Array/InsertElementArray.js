const original = [1, 25, 5];
const el = 12.5;
const insertAt = 2;

let newArray = [
  ...original.slice(0, insertAt),
  el,
  ...original.slice(insertAt),
];

console.log(newArray);
