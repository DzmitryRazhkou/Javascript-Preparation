var s = ["William", "Steven", "Dan", "Zach", "Xen", "Andrew", "Peter", "Xen"];
var sorted = s.sort();

var c = sorted.reduce((z, y) => {
  if (z[y] == undefined) {
    z[y] = 1;
    return z;
  } else {
    z[y]++;
    return z;
  }
}, {});

for (let [key, value] of Object.entries(c)) {
  if (value > 1) {
    console.log(`${key}, ${value}`);
  }
}

const duplicateArray = [12, 15, 50, 35, 50, 12, 75, 35];
var t = duplicateArray.filter((ele, index, arr) => arr.indexOf(ele) != index);
console.log(t);

var fr = [];
while (fr.length < 10) {
  var res = Math.floor(Math.random() * 100) + 1;
  if (fr.indexOf(res) === -1) fr.push(res);
}
console.log(res);
