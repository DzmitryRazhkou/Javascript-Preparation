function generateRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let res = generateRandom(1, 125);
console.log(res);
