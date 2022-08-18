//unir dos lista .concat
const lista = ['Hola',2,false,null];
const lista2 = ['Adios',8,true,undefined];
console.log(lista.concat(lista2));
console.log(lista);

const lista3 = lista.concat(lista2);
console.log(lista3);

//como unir dos lista  con el factor de propagacion
const lista4 =[...lista,...lista2];
console.log(lista4);

//ERROR mal entendido del concepto de propagación
const lista5 = [lista,lista2]
console.log(lista5);

