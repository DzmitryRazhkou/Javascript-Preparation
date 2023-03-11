let palindromeNumber = (number) => {
  let result = 0;
  let reminder;
  let temp;

  temp = number;

  while (number != 0) {
    reminder = number % 10;
    result = result * 10 + reminder;
    number = Math.floor(number / 10);
  }
  if (temp == result) {
    console.log("Yeah");
  } else {
    console.log("Nope");
  }
};

palindromeNumber(121);
