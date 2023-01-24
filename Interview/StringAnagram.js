function anagramString(s1, s2) {
  s1 = s1.toLowerCase();
  s2 = s2.toLowerCase();

  s1 = s1.split("").sort().join("");
  s2 = s2.split("").sort().join("");

  return s1 === s2;
}

var firstWord = "Mary";
var secondWord = "Army";

console.log(anagramString(firstWord, secondWord));
