function randomNumberGeneratorInRange(start, end) {
  return start + Math.floor(Math.random() * (end - start));
}

console.log(randomNumberGeneratorInRange(10, 50));
