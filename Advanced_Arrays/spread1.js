"use strict";
// number greater for nested arrays //

const numArray = [
  [3, 5],
  [39, 27],
  [-1, 0],
];

const isGreater = (a, b) =>
  a > b ? `${a} is greater than ${b} ` : `${b} is greater than ${a} `;

numArray.forEach((Element) => console.log(isGreater(Element[0], Element[1])));
