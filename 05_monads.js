const anArray = [1, 2, 3];
const echo = (n) => (x) => Array.from({ length: n }).fill(x);

const echo_2 = (m) => (n) => (x) =>
  Array.from({ length: m }).fill(Array.from({ length: n }).fill(x));

//console.log(anArray.map(echo(3))); //[ [ 1, 1, 1 ], [ 2, 2, 2 ], [ 3, 3, 3 ] ]
//console.log(anArray.flatMap(echo(3))); //[ 1, 1, 1, 2, 2, 2, 3, 3, 3 ]

console.log(anArray.map(echo_2(2)(2)));

/*
[ [ [ 1, 1 ], [ 1, 1 ] ],
[ [ 2, 2 ], [ 2, 2 ] ],
[ [ 3, 3 ], [ 3, 3 ] ] ]
*/

console.log(anArray.flatMap(echo_2(2)(2)));
//[ [ 1, 1 ], [ 1, 1 ], [ 2, 2 ], [ 2, 2 ], [ 3, 3 ], [ 3, 3 ] ]
