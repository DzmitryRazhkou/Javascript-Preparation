var first = "Mary";
var second = "Army";

function anagram(first, second) {
  var a = first.toLowerCase();
  var b = second.toLowerCase();

  a = a.split("").sort().join("");
  b = b.split("").sort().join("");

  return a === b;
}

console.log(anagram(first, second));
