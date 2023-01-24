const original = [1, 25, 75, 57];
const el = 150;
const insertAt = 2;

let newArray = [
  ...original.slice(0, insertAt),
  el,
  ...original.slice(insertAt + 1),
];
console.log(newArray);
