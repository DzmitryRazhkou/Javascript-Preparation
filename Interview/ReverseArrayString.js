var str = "Welcome to Selenium Tutorials";
var strM = ["Welcome to Selenium Tutorials"];

function reverseBySeparator(str, sep) {
  return str.split(sep).reverse().join(sep);
}
console.log(reverseBySeparator(str, ""));

let revEntireSentence = reverseBySeparator(str, "");
let revWord = reverseBySeparator(revEntireSentence, " ");
console.log(revWord);

console.log("________________");

// function mapReverse(str, sep) {
//   let mapped = str.map((f) => f.split(sep).reverse().join(sep));
//   return mapped.join(" ");
// }

// mapReverse(strM, " ");
