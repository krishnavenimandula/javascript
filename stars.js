"use strict";

const count = " * ";

for (let i = 1; i < 6; i++) {
  const stars = (count) => Array.from(Array(count), () => " * ");
  console.log(stars(i));
}
for (let j = 6; j >= 1; j--) {
  const stars = (count) => Array.from(Array(count), () => " * ");
  console.log(stars(j));
}
