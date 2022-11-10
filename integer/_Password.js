const chars =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=?/<>";

const length = 9;
let randomStr = "";

for (let i = 0; i < length; i++) {
  const randomNum = Math.floor(Math.random() * chars.length);
  randomStr += chars[randomNum];
}

console.log(randomStr);

console.log("__________");

const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=?/<>";
let randomString = "";
const leng = 10;

for (let i = 0; i < leng; i++) {
  const randomNumber = Math.floor(Math.random() * characters.length);
  randomString += characters[randomNumber];
}
console.log(randomString);
