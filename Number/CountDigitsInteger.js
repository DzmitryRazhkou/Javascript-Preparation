let countDigitsInteger = (number) => {
  let count = 0;

  while (number != 0) {
    number = Math.floor(number / 10);
    count++;
  }
  console.log("Amount of Digits is: " + count);
};

countDigitsInteger(5676567);

let rs = (num) => {
  let counter = 0;

  while (num != 0) {
    num = Math.floor(num / 10);
    counter++;
  }
  console.log(counter);
};

rs(789);
