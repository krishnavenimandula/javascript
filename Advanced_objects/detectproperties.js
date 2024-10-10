"use strict";

const rectangles = [
  {
    id: "Rectangle - 01",
    width: 129.2,
    height: 80.9,
  },
  {
    id: "Rectangle - 02",
    width: 342,
    height: 120,
    area() {
      return this.width * this.height;
    },
  },
];

const calCarea = function () {
  return this.width * this.height;
};

// Rectangle - 01 : 10452.28
// Rectangle - 02 : 41040
rectangles.forEach((rect) =>
  console.log(
    `${rect.id} : ${
      rect.hasOwnProperty("area") ? rect.area() : calCArea.call(rect)
    }`
  )
);
