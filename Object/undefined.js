let company;
company; // => undefined
let person = { name: "John Smith" };
person.age; // => undefined

// let array = null;
// array; // => null
// let movie = { name: "Starship Troopers", musicBy: null };
// movie.musicBy; // => null
// "abc".match(/[0-9]/); // => null

let number;
number; // => undefined
let movie = { name: "Interstellar" };
movie.year; // => undefined
let movies = ["Interstellar", "Alexander"];
movies[3]; // => undefined

typeof undefined === "undefined"; // => true

let nothing;
typeof nothing === "undefined"; // => true

let myVariable;
myVariable; // => undefined

let favoriteMovieL = {
  title: "Blade Runner",
};
favoriteMovie.actors; // => undefined

let favoriteMovie = {
  title: "Blade Runner",
};
favoriteMovie.actors[0];

function getNum() {
  // Notice that semicolons are missing
  let num = 1;
  return num;
}
getNum(); // => 1

//   const unsafeOptions = {
//     fontSize: 18
//   };
//   const defaults = {
//     fontSize: 16,
//     color: 'black'
//   };
//   const options = {
//     ...defaults,
//     ...unsafeOptions
//   };
options.fontSize; // => 18
options.color; // => 'black'

const unsafeOptionsObject = {
  fontSize: 18,
};
const defaults = {
  fontSize: 16,
  color: "black",
};
const options = Object.assign({}, defaults, unsafeOptions);
options.fontSize; // => 18
options.color; // => 'black'
