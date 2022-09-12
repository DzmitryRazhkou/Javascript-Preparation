const arr = ["Java", "JS", "Python", "C++", "C#"];

function reverseWords(str) {
  let reverseWordArr = str.map((word) => word.split("").reverse().join(""));
  return reverseWordArr.join(" ");
}

console.log(reverseWords(arr));
