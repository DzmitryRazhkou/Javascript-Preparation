function countDigits(num) {
  let count = 0;

  while (num != 0) {
    num = num / 10;
    count++;
  }
  console.log("Amount of Digits: " + count);
}

console.log(countDigits(3445566));
