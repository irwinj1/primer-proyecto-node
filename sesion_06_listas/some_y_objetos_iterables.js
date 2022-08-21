//.some()
const array = [1,2,3,4,5,6,7,8,9,42,2345,-3]

const res = array.some(valor=>valor < -10)
console.log(res);


const existe = array.some(valor => valor === 4)
console.log(existe);

const listaObj = [
    {nombre:'irwin',edad:33},
    {nombre:'jose',edad:30},
    {nombre:'michelle',edad:28},
    {nombre:'lucia',edad:3},
    {nombre:'amaya',edad:34},
]

const listaNu = listaObj.some(nombre => nombre.nombre==='irwin')
console.log(listaNu);


//como obtener una lista a partir de un objeto iterable

const str = "Hola soy Irwin";
const ar_str = Array.from(str);
console.log(ar_str);

const set = new Set([1,3,'Hola',4]);
const ar_set = Array.from(set) 
console.log(ar_set);

//iterable de todos los indices del array

const key = array.keys()
console.log(key);
const nuevoArray = Array.from(key);
console.log(nuevoArray);