const input = {
  students: [
    {
      studentName: "ARC Tutorials",
      uuid: "124748ba-6fc4f",
    },
    { studentName: "Mark", uuid: "1249b9ba-64d" },
    {
      studentName: "Lisa",
      uuid: "124c78da-64",
    },
    {
      studentName: "Ram",
      uuid: "124ee9da-6",
    },
  ],
};

let op = input.students.map((x) => {
  return x.studentName;
});

console.log(op);
