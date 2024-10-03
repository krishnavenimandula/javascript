"use strict";

const hollywoodDirectors = [
  "Martin Scorsese",
  "David Dhawan",
  "Steven Spielberg",
  "Christopher Nolan",
  "Quentin Tarantino",
  "James Cameron",
];
const removeAndInsert = (arr, elem, newelem) => {
  const temparray = [...arr];
  temparray.splice(1, 1, newelem);
  return temparray;
};
const newarray = removeAndInsert(hollywoodDirectors, 1, "David Lean");

const topThree = (arr) => arr.slice(0, 3);
const directors = topThree(newarray);
console.log(directors);
