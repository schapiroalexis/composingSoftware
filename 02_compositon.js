/*
piping from left to right is more readable
*/

const pipe = (...functions) => (x) => functions.reduce((y, f) => f(y), x);

const trace = (label) => (value) => {
  console.log(`${label}: ${value}`);
  return value;
};

const addOne = (n) => n + 1;
const doubleArg = (n) => n * 2;

const composition_1 = pipe(
  addOne,
  trace("after addOne"),
  doubleArg,
  trace("after doubleAr")
);

composition_1(10);
