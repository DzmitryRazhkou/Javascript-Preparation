function remainder_1(a, b) {
  return a - (a / b) * b;
}

console.log(remainder_1(87, 3));

function remainder_2(a, b) {
  while (a > b) {
    a = a - b;
  }
  return a;
}

console.log(remainder_2(87, 3));
