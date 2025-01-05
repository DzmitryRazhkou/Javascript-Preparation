function getCharacterOccurrenceForOf(str, value) {
  let count = 0;
  for (let char of str) {
    if (char === value) {
      count++;
    }
  }

  console.log(`${value}: ${count}`);
}

function getCharacterOccurrenceForI(str, value) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    const element = str[i];
    if (element === value) {
      count++;
    }
  }
  console.log(`${value}: ${count}`);
}

getCharacterOccurrenceForOf("Offer", "f");
getCharacterOccurrenceForI("Offer", "f");
