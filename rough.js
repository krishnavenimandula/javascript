// function greetuser(hours){
//     if(hours>=0 && hours<=12){
//         return " Good Morning";
//     }else if(hours>=12 && hours<=16){
//         return " Good Afternoon"; 
//     }else if(hours>=16 && hours<=20){
//         return " Good Evening"; 
//     }else {
//         return " Good Night"; 
//     }
// }
// console.log(greetuser(10));
// console.log(greetuser(13.5));
// console.log(greetuser(23));


const planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter'];

for (let x = 0; x < planets.length; x++) {
    if (x !== 3) {
      continue;
    }
    console.log(`Perseverance Rover is on ${planets[x]}`);
  }
