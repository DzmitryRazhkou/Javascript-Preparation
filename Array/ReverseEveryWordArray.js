const arr = ["Java", "JS", "Python", "C++", "C#"];

function rev(str) {
  var revWord = str.map((word) => word.split("").reverse().join(""));
  return revWord.join(" ");
}

console.log(rev(arr));

console.log("__________");

function rev(str) {
  let u = str.map((y) => y.split("").reverse().join(""));
  return u.join(" ");
}

console.log(rev(arr));
