"use strict";

let restaurants = [
  {
    name: "kalinga",
    city: "warangal",
    famous: "chicken fry",
  },

  {
    name: "alpha",
    city: "vizag",
    famous: "chicken biriyani",
  },
  {
    name: "pakka local",
    city: "hyd",
    famous: "prawns biriyani",
  },
];

const findDetails = (name) => {
  let findPlace = restaurants.find((elem) => elem.name === name)?.name;
  return findPlace ? [findPlace.famous, findPlace.city] : [];
};

let [famous, city] = findDetails("kali");
console.log(`${famous},${city}`);
