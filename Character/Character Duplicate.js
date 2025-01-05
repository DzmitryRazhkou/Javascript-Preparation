function duplicateCharacter(str) {
  let words = str.toLowerCase().replace(/\s/g, "").split("").sort();
  let chars = new Map();

  for (let s of words) {
    chars.set(s, (chars.get(s) || 0) + 1);
  }

  for (const [s, count] of chars.entries()) {
    if (count > 1) {
      console.log(`${s} >>> ${count}`);
    }
  }
}

duplicateCharacter("Dallas");
