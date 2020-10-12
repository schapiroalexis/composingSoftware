/**
 * 
 * el tema es asi: 
 * vos le estas pasando al cumulador x. Por lo tanto el primer f(y) es f(x) y esa f(x) es la que pasa al acumulador
 * 
 * lo que estas haciendo es f_3(f_2(f_1(x)))
 * 
 * como todas las f's devuelven algo, se termina generando la composicion
 */

const compose = (...functions) => (x) =>
	functions.reduceRight((y, f) => f(y), x); 


const addOne = (n) => n + 1;
const doubleArg = (n) => n * 2;
const logResult = (result) => console.log(result);

const composition1 = compose(addOne, doubleArg, logResult);
const composition2 = compose(logResult, addOne, doubleArg);
const composition3 = compose(logResult, doubleArg, addOne);

//composition1(10); //10
//composition2(10); //21 (20, 20+1)
//composition3(10); //22 (10+1, 11*2)

const a = [1, 2, 3, 4];
const b = a.reduce((acc, el) => el + acc); //esto te da b = 10 y los elementos son 2,3,4
const c = a.reduce((acc, el) => el + acc, 0); //esto te da c = 10 y los elementos son 1,2,3 y 4

const d = a.reduce((acc, el) => el + acc, 1); //esto te da d = 11

console.log({ b });
