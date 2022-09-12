const lang = ["JS", "Java", "Python", "JS", "C#", "Swift", "Java"];
const countOfLang = lang.reduce((obj, l) => {
  if (obj[l] == undefined) {
    obj[l] = 1;
    return obj;
  } else {
    obj[l]++;
    return obj;
  }
}, {});

console.log(countOfLang);
