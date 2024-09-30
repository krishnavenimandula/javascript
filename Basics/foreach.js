"use strict";

const users = `id,first_name,last_name,email,gender
1,Rahul,Palisetti,rahulpalisetti123@gmail.com,male
2,kavya,Mandula,kavyamandula10@gmail.com,female
3,Santha,Mandula,santhamandula123@gmail.com,female`;

const csvToArray = (csv) => {
  let output = [];
  csv.split("\n").forEach((row) => output.push(row.split(",")));
  return output;
};
const convertToobj = (arr) => {
  let output = [];
  arr.forEach((elem, index) => {
    if (index != 0) {
      let obj = {};
      elem.forEach((elem, index) => {
        obj[arr[0][index]] = elem;
      });
      output.push(obj);
    }
  });
  return output;
};
let csvToobj = convertToobj(csvToArray(users));
console.log(csvToobj);
