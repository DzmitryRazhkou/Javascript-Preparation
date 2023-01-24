function generatePsw(length) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let randomStr = "";
  for (let i = 0; i < length; i++) {
    const randonInt = Math.floor(Math.random() * characters.length);
    randomStr += characters[randonInt];
  }
  console.log(randomStr);
}

generatePsw(123);
