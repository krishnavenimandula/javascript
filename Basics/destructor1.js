"use strict";

const weapons = `1,Red Orbs,240
2,Green Orbs,194
3,Yellow Orbs,154
4,Kill Machine,80`;

const findWeapons = (color) => {
  let output = [];
  color.split("\n").forEach((row) => output.push(row.split(",")));

  return output;
};

const getWeapons = (findWeapons) => {
  findWeapons.forEach((element) => {
    console.log(element[1] + " cost " + element[2]);
  });
};

console.log(getWeapons(findWeapons(weapons)));
