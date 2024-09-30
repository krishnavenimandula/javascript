// function groupArrayelements(inputArr,n) {

//     check n is a valid number
//     const result =[];
//  if(n<=0 || !Number.isInteger(n)) {
//     return result;
//  }
//  cal the length of each subarray

//  const len = Math.floor(inputArr.length / n);
//  initialize the Array
//  let start = 0;
//  let end = len;

//  for ( let i= 0; i<n; i++) {
//     if(i== n-1) {
//         result.push(inputArr.slice(start));
//     }else {
//         result.push(inputArr.slice(start,end));
//     }
//     start=end;
//     end+=len;

//  }
//  return result;
// }
// let arr =[1,2,3,4,5,6,7,8];
// let num = 4;
// const response = groupArrayelements(arr , num);
// console.log(response)

// REVERSING AN ARRAY 

// let names = ["rahul", "santha", "chandu","abi"];
// console.log(" before " +names);
// names.reverse();
// console.log(" after " +names);

// ITERATION USING forEach()

// const books = [ "The lord krishna", "Deception", "Ranawed","kalki"];
// const flipTitles = function(elem, index) {
//     console.log(elem.split("").reverse().join(""));

// }
// books.forEach(flipTitles);

//Array.of | Arrays JS
// let numbers = Array.of(63);
// console.log(numbers.length);
// console.log(numbers[0]);

//Array.from | ( string array into characteristic array)

// let characters = Array.from( "Wassup Rahul ?");
// console.log(characters);
// console.log(characters.join(""));

// example:

// let arr1 = Array.of(1,2,3);
// let arr2 = Array.from(arr1, x => x * 2);
// console.log(arr2);

// Remapping Arrays:

// const arr = [ 1, 3,5,7,9,11];
// // pass the function to map1 
// const map1 = arr.map(x => x * 3);
// console.log(map1);

// example of map method

// const numarray = [[1,2],[2,3],[7,11.9],[10,25]];
// const toSum = (arr)=> arr.map((elem)=>elem[0]+elem[1]);
// console.log(toSum(numarray));

//slice

// const desktop =["laptop","mouse","speakers","monitors","microphone"];
// desktop.slice(2);
// desktop.slice(1,3);
// desktop.slice(3);
// console.log(desktop.slice(2));

//splice

const arr = [11,24,32.7,19,5];
const arr1= arr.splice(1, 2, 45);
console.log(arr1);

