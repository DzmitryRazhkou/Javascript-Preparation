function psw(length) {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let randomStr = "";
  for (let i = 0; i < length; i++) {
    let rand = Math.floor(Math.random() * characters.length);
    randomStr += characters[rand];
  }
  console.log(randomStr);
}

psw(80);
