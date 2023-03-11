function fizzBuzz(bound) {
  if (bound % 5 == 0 && bound % 3 == 0) {
    console.log("FB");
  } else if (bound % 3 == 0) {
    console.log("F");
  } else if (bound % 5 == 0) {
    console.log("B");
  }
}

fizzBuzz(50);
