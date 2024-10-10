"use strict";

const apple = {
  id: 209891,
  company: "Apple Inc",
  exchange: "NASDAQ",
  symbol: "AAPL",
  currPrice: 120.07,
  details: {
    ceo: "Tim Cook",
    hq: "Cupertino, California, US",
  },
};
let {
  company: name,
  details: { ceo, hq },
  exchange: exchange,
  currPrice: price,
} = apple;

console.log(
  ` ${name} headed by ${ceo} was trading for ${price} on ${exchange}`
);

//Apple Inc headed by Tim Cook was trading for $120.07 on NASDAQ
// try {
//     console.log(
//       `${company} headed by ${ceo} was trading for $${currPrice} on ${exchange}`
//     );
//   } catch (error) {
//     console.log('Stock data could not be accessed...');
//   }
