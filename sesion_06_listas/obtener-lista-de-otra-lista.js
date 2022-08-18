//como obtener una lista apartir de otra .slice()

const lista = ['Hola',1,2,3,null,"Adios"]

//no modifica el array original
console.log(lista.slice(1,5));
const lista2 = lista.slice(2,5)
console.log(lista2);

const lista3 = lista.slice(2,-2)
console.log(lista3);
