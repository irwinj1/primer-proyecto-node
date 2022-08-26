//formas de importar y exportar modulos
//1- commonJs  -require
//Import ES6 - import

//const moduloMatematicas = require('./modulos/matematicas')
//const {factorial,suma,eleva,multuplica} = moduloMatematicas
const {factorial,suma}= require('./modulos/matematicas')

const fact = factorial(5)
console.log(fact);

const sum = suma(5,9)
console.log(sum);