// function diplayweather(city){
//     let message;
//     if(city == "Newyork"){
//         message= "the best place to live";
//     }else if (city == " los angeles") {
//         message = "too hot ";
//     } else{
//         message= "pleasant weather";
//     } 
//     return message;
// }
// let result = diplayweather("los angeles");

// 'this'  keyword 

// const employee ={
//     firstname: "Rahul" ,
//     lastname: "Plisetti" ,
//     age:30 ,
//     company:"Imaginera" ,

//     showdetails : function(){
//         console.log( this.firstname  + this.lastname +  " is "  +  this.age  +  " years old and working in " + this.company);
//     }
// }
// employee.showdetails();

// function caltax (price, taxrate) {

//     console.log("the total pice with tax is :" + parseInt (price + (price * taxrate)/100) );

// }
// caltax (120,20);

// let order1 = { id:20, orderedTo: "home"};
// let order2 = { id:21, orderedTo: "office"};
// let order3 = { id:22, orderedTo: "work"};

// let showdetails= function(username){

//     console.log(this.id + " was placed by " + username + "was order to "+this.orderedTo);
// }
// showdetails.call (order3 , "rahul" );
// showdetails.apply(order1, [ "kavya "]);

// bind() method 

let employee1 = { id:11, age: "30yrs"};
let employee2 = { id:12, age: "32yrs"};
let employee3 = { id:13, age: "29yrs" };

let employeedetails = function ( designation , staysin) {

    console.log(" employeeid " + this.id + " is " + this.age + "old and his designation is " + designation + " stays in " + staysin);

}
let employeedetailsone = employeedetails.bind (employee2, "FSD" , "LOS ANGELES");
employeedetailsone();