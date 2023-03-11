const input = {
  vehicles: [
    {
      make: "Lexus",
      model: "RX350",
      year: 2019,
    },

    {
      make: "Chevy",
      model: "Tahoe",
      year: 2019,
    },

    {
      make: "Tesla",
      model: "Y",
      year: 2019,
    },
  ],
};

const op = input.vehicles.map(function (item) {
  return item.make;
});

console.log(op);
