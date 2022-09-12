const studentIds = [56, 12, 75, 1, 0, 15];
const totalCount = studentIds.reduce((a, b) => a + b);
const length = studentIds.length;
console.log(totalCount / length);
