function countVowelsString(str) {
  str = str.toLowerCase();
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    let y = str.charAt(i);
    if (y === "a" || y === "e" || y === "i" || y === "o" || y === "u") {
      count++;
    }
  }

  console.log("The Amount of Vowels Chars is: " + count);
}

countVowelsString("Dallas");
