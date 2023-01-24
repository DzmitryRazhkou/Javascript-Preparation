let res = { name: "John" };

const jonhObject = res.find((obj) => obj.name === "John");
const doesJohnExist = jonhObject ? true : false;

console.log(doesJohnExist);
