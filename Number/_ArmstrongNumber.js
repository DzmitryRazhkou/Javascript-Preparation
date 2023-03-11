let isArm = (number) => {
  let cube = 0;
  let reminder;
  let temp;

  temp = number;

  while (number != 0) {
    reminder = number % 10;
    cube = cube + reminder * reminder * reminder;
    number = Math.floor(number / 10);
  }
  if (temp == cube) {
    console.log("Yeah");
  } else {
    console.log("Nope");
  }
};

isArm(153);
