const input = {
  students: [
    {
      studentName: "ARC Tutorials",
      rank: 10,
      uuid: "124748ba-6fc4f",
    },
    {
      studentName: "Mark",
      rank: 15,
      uuid: "1249b9ba-64d",
    },
    {
      studentName: "Lisa",
      rank: 30,
      uuid: "124c78da-64",
    },
    {
      studentName: "Ram",
      rank: 20,
      uuid: "124ee9da-6",
    },
  ],
};

let op = input.students.filter((x) => x.rank > 10);

console.log(op);
