function psw(length) {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let randomStr = "";
  for (let i = 0; i < length; i++) {
    let randonInt = Math.floor(Math.random() * characters.length);
    randomStr = randomStr + characters[randonInt];
  }
  console.log(randomStr);
}

psw(75);

function reverseP(num) {
  let res = 0;
  let reminder;

  while (num != 0) {
    reminder = num % 10;
    res = res * 10 + reminder;
    num = Math.floor(num / 10);
  }
  console.log(res);
}

reverseP(12344);
