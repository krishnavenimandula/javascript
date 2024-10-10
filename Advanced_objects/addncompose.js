"use strict";

const userDb = [
  {
    id: 1,
    name: "Dmitri Mishkov",
    email: "dmitri.m@sprintserve.co",
    password: "tempPass",
  },
  {
    id: 2,
    name: "Jimmy McIntyre",
    email: "jimmymc@whatmail.com",
    password: "tempPass",
  },
  {
    id: 3,
    name: "David Adams",
    email: "adams@whatmail.com",
    password: "tempPass",
  },
];
const userPriveleges = {
  profile: true,
  admin: false,
  billing: true,
};

const userDetails = userDb.map((user) => ({
  ...user,
  ...userPriveleges,
}));
console.log(userDetails);
