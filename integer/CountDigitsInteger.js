let countDigitsInteger = (number) => {
  let count = 0;

  while (number != 0) {
    number = Math.floor(number / 10);
    count++;
  }
  console.log("Amount of Digits is: " + count);
};

countDigitsInteger(5676567);
