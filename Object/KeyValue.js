var object = {
  a: "Gans",
  b: 100,
  first: "Corina",
  last: "Levis",
};

for (let [key, value] of Object.entries(object)) {
  console.log(`${key}: ${value} `);
}

console.log(Object.keys(object));
