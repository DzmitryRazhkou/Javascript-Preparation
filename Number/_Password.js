function generatePassword(length) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=?/<>";
  let psw = "";

  for (let i = 0; i < length; i++) {
    let randomNumber = Math.floor(Math.random() * characters.length);
    psw += characters[randomNumber];
  }
  console.log("The generated password is: " + psw);
}

generatePassword(50);

function gee(length) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=?/<>";

  let psw = "";

  for (let r = 0; r < length; r++) {
    let random = Math.floor(Math.random() * characters.length);
    psw += characters[random];
  }
  console.log(psw);
}

gee(200);
