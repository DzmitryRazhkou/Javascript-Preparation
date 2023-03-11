function validateMobile(str) {
  const regexMobile = /^(\+1|0)?\s?\d{10}$/;
  return regexMobile.test(str);
}

console.log(validateMobile("2674962519"));
