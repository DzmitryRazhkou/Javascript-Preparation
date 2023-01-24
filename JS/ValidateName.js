function validateName(str, searchTxt) {
  const regex = new RegExp("^(\\w*\\s)?" + searchTxt + "\\w*?", "i");
  return regex.test(str);
}

console.log(validateName("Levic", "lev"));
