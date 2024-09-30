// let person = {
//     name: "Rahul",
//     age:30,
//     company:"Imaginera",
//     isemployed:"true",
//     staysin: "Bristol,UK",
// };
// console.log (person.name); // can alse be written (person.name)
// person.company = "Allen";
// person.isemployed = false;
// console.log(person);

// let person = {
//     name: "Rahul",
//     age:30,
//     company:"Imaginera",
//     isemployed:"true",
//     staysin: "Bristol,UK",
// };

// let {name} = person;
// console.log (`${name} is ${person.age} years old`);

let books = [
    {
        title: " To kill a mocking bird ",
        author: " Harperlee ",
        year: 1960
    },
    {
        title: " 1984 ",
        author: " George Orwell",
        year: 1949
    },
    {
        title: " The Catcher in the Rye ",
        author: " J.D Salinger ",
        year: 1951
    }
];
 
let newbook = 
    {
        title: "Pride & prejudice",
        author: " Jane AUsten ",
        year: 1813
    };

    let allbooks = [...books];
    allbooks.push(newbook);

    console.log(books);
    console.log(allbooks);

