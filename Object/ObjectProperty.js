const newObject = {};

Object.defineProperty(newObject, "newProperty", {
  value: 100000,
  writable: true,
});

console.log(newObject.newProperty);
