function generateAlphabet(capital = false) {
  return [...Array(26)].map((_, i) =>
    String.fromCharCode(i + (capital ? 65 : 97))
  );
}

console.log(generateAlphabet(true));
