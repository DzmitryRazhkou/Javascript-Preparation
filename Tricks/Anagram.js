const s1 = "Mary";
const s2 = "Army";

function checkAnagram(s1, s2) {
  var a = s1.toLowerCase();
  var b = s2.toLowerCase();

  a = a.split("").sort().join("");
  b = b.split("").sort().join("");

  return a === b;
}

console.log(checkAnagram(s1, s2));
