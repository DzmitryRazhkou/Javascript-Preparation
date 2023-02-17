function reverseNumber(number) {
  let res = 0;
  let reminder;

  while (number != 0) {
    reminder = number % 10;
    res = res * 10 + reminder;
    number = Math.floor(number / 10);
  }
  console.log(res);
}

reverseNumber(988744);
