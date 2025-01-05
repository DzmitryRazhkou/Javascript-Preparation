function charPercentage(str) {
  const charCount = {};
  const strLength = str.length;

  // Loop through each character in the string and count its occurrences
  for (let i = 0; i < strLength; i++) {
    const char = str.charAt(i);
    charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
  }

  // Calculate the percentage of each character and return the results
  const charPercentage = {};
  Object.keys(charCount).forEach((char) => {
    charPercentage[char] = (charCount[char] / strLength) * 100;
  });
  return charPercentage;
}

// Example usage:
const inputString = "hello world";
const percentage = charPercentage(inputString);
console.log(percentage);

