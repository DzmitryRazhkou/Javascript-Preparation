function countCapitalLetters(str) {
  if (str.length === 0) {
    console.log("Provide _");
    return;
  }

  let counter = 0;

  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) >= "A" && str.charAt(i) <= "Z") {
      counter++;
    }
  }

  console.log("The Amount of the Capital Letters is: " + counter);
}

countCapitalLetters("Dallas TX");
