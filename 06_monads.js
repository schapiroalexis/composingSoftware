const anArray = [1, 2, 3];
const f = (x) => x * 2;
const g = (y) => y + 1;
const h = (x) => g(f(x));

const result_1 = anArray.map(f).map(g); //[3,5,7]
const result_2 = anArray.map(h); //[3,5,7]
console.log(result_2);
