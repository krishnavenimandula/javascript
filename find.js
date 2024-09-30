"use strict";

const doctors = [
  {
    id: 1,
    name: "Dr Ravi",
    age: 30,
    speciality: "Cardiologist",
  },
  {
    id: 2,
    name: "Dr Rahul",
    age: 35,
    speciality: "oncologist",
  },
  {
    id: 3,
    name: "Dr dravid",
    age: 40,
    speciality: "dermatologist",
  },
];

const findADoctor = (speciality, arr) =>
  arr.find((elem) => elem.speciality === speciality)?.name || "No doctor found";

console.log(findADoctor("dermatologist", doctors));
console.log(findADoctor("ortho", doctors));

doctors.findIndex((elem) => elem.age === 35);
