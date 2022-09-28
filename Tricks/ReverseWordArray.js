const arr = ["Java", "JS", "Python", "C++", "C#"];

// function reverseWords(str) {
//   let reverseWordArr = str.map((word) => word.split("").reverse().join(""));
//   return reverseWordArr.join(" ");
// }

// console.log(reverseWords(arr));

function reversrT(str) {
  let reverseWordP = str.map((w) => w.split("").reverse().join(""));
  return reverseWordP.join(" ");
}

console.log(reversrT(arr));
