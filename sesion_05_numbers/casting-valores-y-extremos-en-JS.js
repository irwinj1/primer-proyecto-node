//operador valueOf - Obtener valores numericos a partir de literales
let a = 2;
let b = new Number(3)
console.log(a);
console.log(b);
console.log(a+b);

console.log(b.valueOf());

//NaN - Infinity
let n = new Number('Adios')
console.log(n);
console.log(isNaN(n));

let numerado = 9;
let divisor = 0;
console.log(numerado / divisor);


//convertir string a numeros con Number, parseInt, parseFloat
let numero = '5.89';
let num2 = 17.2
console.log(typeof numero);
console.log(numero + num2); //Error de concepto
console.log(Number(numero) + num2);

console.log(parseInt(numero)+num2);
console.log(parseFloat(numero)+num2);

//numeros hexadecimales (base 16)
let numHex = '0x3a5b7';
console.log(parseInt(numHex,16));


//obtener los valores maximos y minimos en javascript
let min_precision = Number.EPSILON
let minValorJS = Number.MIN_VALUE
let maxValorJS = Number.MAX_VALUE
console.log(min_precision);
console.log(minValorJS);
console.log(maxValorJS);