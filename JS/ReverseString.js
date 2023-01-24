function reverseString(str) {
  return str.split("").reverse().join("");
}

const str = "JavaScript is awesome";
console.log(reverseString(str));

console.log("__________");

let reverseString2 = (str) => {
  let revStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    revStr += str.charAt(i);
  }
  console.log(revStr);
};

reverseString2(str);
