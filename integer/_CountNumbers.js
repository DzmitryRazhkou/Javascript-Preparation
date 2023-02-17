function duplicateCharacter(str) {
  const countOfChar = str.reduce((x, y) => {
    if (x[y] === undefined) {
      x[y] = 1;
      return x;
    } else {
      x[y]++;
      return x;
    }
  }, {});

  for (const [x, y] of Object.entries(countOfChar)) {
    if (y > 1) {
      console.log(`${x} : ${y}`);
    }
  }
}

let f = [1, 12, 3, 4, 5, 12];
duplicateCharacter(f);
