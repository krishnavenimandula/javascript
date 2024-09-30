"use strict";

const weapons = `1,Red Orbs,240
2,Green Orbs,194
3,Yellow Orbs,154
4,Kill Machine,80`;

const findWeapons = (color) => {
  let output = [];
  color.split("\n").forEach((row) => output.push(row.split(",")));

  return output;
  for (const key of getWeapons) {
    const [id, weapon, cost] = key.split(",");
    console.log(`${weapon} costs $${cost}`);
  }
};
findWeapons(weapons);
