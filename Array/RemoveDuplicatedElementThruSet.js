function removeDuplicatedElements(obj) {
  var set = new Set();
  for (const s of obj) {
    set.add(s);
  }
  set.forEach((y) => console.log(y));
}

let arr = ["JS", "Perl", "JS", "C#", "Java", "Swift", "C#", "Java"];
removeDuplicatedElements(arr);
