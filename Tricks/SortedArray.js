const unsortedArray = [100, 12, 97, 75, 13, 55, 0, 007];
const f = unsortedArray.sort((a, b) => {
  return a - b;
});

console.log(f);

// String

const vehicle = [
  "GMC",
  "Cadiliac",
  "Lexus",
  "Toyota",
  "Dodge",
  "Chevy",
  "Ford",
];
console.log(vehicle.sort());
