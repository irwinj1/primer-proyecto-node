//principales operaciones aritmetica
let a = 3.5
let b = 4.8

//suma(+)
console.log(a+b);
//resta(-)
console.log(a-b);
//multiplicacion
console.log(a*b);
//division
console.log(a/b);

//representacion  de los numeros en cadena de texto
console.log(typeof a);
let a_s = a.toString();
console.log(a_s);
console.log(typeof a_s);

//redondeo de numeros decimales
let c = 3.3;
let d = c * 3;

console.log(d);

//toFixed(x) Limita el numero de decimales al valor x
console.log(d.toFixed(2));
console.log(typeof d.toFixed(2));

//toPresicion(x) limita el numero de cifras significativas
console.log(d.toPrecision(3));