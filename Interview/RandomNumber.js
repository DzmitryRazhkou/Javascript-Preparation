function randomBetween(min, max) {
  let arr = [];
  while (arr.length < 8) {
    let randomInt = Math.floor(Math.random() * (max - min) + min);
    arr.push(randomInt);
  }
  console.log(arr);
  console.log(arr.sort());
  console.log(arr.reverse());
}

randomBetween(12, 75);
