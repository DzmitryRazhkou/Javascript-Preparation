const original = [1, 2, "x", 3];
const deleteAt = 2;
const nA = [...original.slice(0, deleteAt), ...original.slice(deleteAt + 1)];
console.log(nA);
