function split(str, wordLimit) {
  return str.split(" ").slice(0, wordLimit).join(" ");
}

let f = "JavaScript is simple but not easy to master";
console.log(split(f, 5));

console.log("__________");

function truncateString(str, charCount) {
  if (str.length > charCount) {
    return str.substr(0, charCount - 3) + "...";
  } else {
    return str;
  }
}

console.log(truncateString(f, 7));
