//funciones tipo flecha - funciones anonimas

const array = [1,5,7,2,12,86,78]
const array2 = array.map(numero => numero*2)
console.log(array2);

const dobleDelValor = (valor)=>valor * 2;

console.log(dobleDelValor(5));

const array3 = array.map(dobleDelValor)
console.log(array3);