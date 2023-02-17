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

function reverseArray(arr) {
  return arr.map((item) => item.split("").reverse().join(""));
}

const sampleArr = ["Levic", "Olly", "Leo"];
const reverseArr = reverseArray(sampleArr);
console.log(reverseArr);

let src = [125, 175, 150, 12, 12, 75, 90, 250];

let reverseArraySrc = (arr) => {
  let reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  console.log(reversed);
};

reverseArraySrc(src);
