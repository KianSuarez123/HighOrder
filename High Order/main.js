const cards= [
    {name: "Nvidia RTX 3090", performance: "834", price: 1499},
    {name: "Nvidia Titan V", performance: "567", price: 3000},
    {name: "Nvidia RTX 3080 Ti", performance: "793", price: 1199},
    {name: "Nvidia RTX Titan", performance: "", price: 2700},
    {name: "Nvidia Quadro RTX A6000", performance: "747", price: 4650},
    {name: "Nvidia RTX 3080", performance: "724", price: 699},
    {name: "Nvidia Quadro RTX A5000", performance: "696", price: 2599},
    {name: "Nvidia RTX 2080 Ti", performance: "476", price: 1199},
    {name: "Nvidia RTX 3070 Ti", performance: "459", price: 599}
  ];

  const id = [91, 55, 65, 30, 20, 10, 15, 36, 26, 48, 99, 36, 5, 9, 1];

/*
  for(let i = 0; i < cards.length; i++) {
    console.log(cards[i]);
  }
*/
  //foreach

  /*
  cards.forEach(function(cards) {
    console.log(cards);
  });
  */

  //filter

  /*
  let codeId = [];
  for (let i = 0; i<id.length; i++ ){
   if(id[i] >= 55) {
     codeId.push(id[i]);
   } 
  }
*/

/*
const codeId = id.filter(function(ids) {
  if(ids >= 30) {
    return true;
  }
})

  console.log(codeId);
  */

  //map

  /*
  const graphicsCards = cards.map(function(cards) {
    return cards.name;
  });

  console.log(graphicsCards);
*/

/*
const testMap = cards.map(function(card) {
  return `${card.name} [${card.performance} ${card.price}]`;
});

console.log(testMap);
*/

//sort

/*
const sortedCards = cards.sort(function(c1, c2) {
  if(c1.price > c2.price) {
    return 1;
  } else {
    return -1;
  }
});

  console.log(sortedCards);
  */

//reduce


// let idSum = 0;
// for(let i=0; i < id.length; i++) {
//   idSum += id[i];
// }

// const idSum = id.reduce(function(total, ids) {
//   return total + ids
// }, 0);

// console.log(idSum);