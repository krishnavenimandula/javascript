let choice = 3;
 liquids = [ "coffee","tea","hotchocolate","mojito","coconutwater" ];

do {
    liquids.push(choice);
    choice++;
} while(choice>=0 && choice<=5);

console.log(liquids);