const arr = [1, 2, 3];
const double = (n) => n * 2;
//aca estas haciendo una especializacion de map
const doubleAll = (numbers) => numbers.map(double);

const result = doubleAll(arr);
console.log(result);

//add es una pure curried function
const add = (a) => (b) => a + b;
//add3 es una partial application. es una ESPECIALIZACION de add
const add3 = add(3);
