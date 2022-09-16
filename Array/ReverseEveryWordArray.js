const arr = ["Java", "JS", "Python", "C++", "C#"];

function rev(str) {
  var revWord = str.map((word) => word.split("").reverse().join(""));
  return revWord.join(" ");
}

console.log(rev(arr));

console.log("__________");

function reverseEveryWord(str) {
  var r = str.map((w) => w.split("").reverse().join(""));
  return r.join(" ");
}

console.log(reverseEveryWord(arr));
