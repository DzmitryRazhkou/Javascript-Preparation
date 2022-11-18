var object = {
  a: "Gans",
  b: 100,
  first: "Corina",
  last: "Levis",
};

for (const [key, value] of Object.entries(object)) {
  console.log(`${key} : ${value}`);
}
