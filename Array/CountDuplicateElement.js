const evs = ["Tesla 3", "Hummer EV", "Tesla 3", "E-Mach", "Chevy SIlverado EV"];

const t = evs.reduce((obj, ev) => {
  if (obj[ev] == undefined) {
    obj[ev] = 1;
    return obj;
  } else {
    obj[ev]++;
    return obj;
  }
}, {});

console.log(t);
