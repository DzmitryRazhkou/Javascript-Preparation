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

console.log("_________");

var s = ["William", "Steven", "Dan", "Zach", "Xen", "Andrew", "Peter", "Xen"];
// var sorted = s.sort();
// var count = sorted.reduce((ob, f) => {
//   if (ob[f] == undefined) {
//     ob[f] = 1;
//     return ob;
//   } else {
//     ob[f]++;
//     return ob;
//   }
// }, {});

// console.log(count);

// for (let [key, value] of Object.entries(count)) {
//   if (value > 1) {
//     console.log(`${key}: ${value} `);
//   }
// }

var sorted = s.sort();
var count = sorted.reduce((x, y) => {
  if (x[y] == undefined) {
    x[y] = 1;
    return x;
  } else {
    x[y]++;
    return x;
  }
}, {});

console.log(count);

for (let [k, v] of Object.entries(count)) {
  if ((v = 1)) {
    console.log(`${k} ===> ${v}`);
  }
}
