let numbers = [];
let choice;
do{
    console.log(" choose an option: \n1. Add a number\n2. Remove a number\n3. Print the number\n4. exist");
    choice = parseint(prompt("Enter your choice: "));

    switch(choice){
        case 1 :
            let numberToAdd = prompt("Enter the value to be added: ");
             number.push(numberToAdd);
             console.log(" Added! ");
             break;
        case 2 : let numerToRemove = prompt(" Enter number to be removed: ");
        let indexToRemove = numbers.indexof(numberToRemove);
        if(indexToRemove !== -1){
            number.splice(indexToRemove,1);
            console.log( " Removed! ");

        }else {
            console.log( " No such value found ");
        }
            break;
        case 3 :
            for (const number of numbers);
            console.log(number);
             break;
        case 4 : 
        console.log(" Thanks for choosing! ");
        break;
        default : console.log(" Invalid choice ");

    }
} while(choice>=1 && choice<4);