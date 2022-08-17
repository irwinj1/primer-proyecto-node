//Como trabajar con listas(arreglos,array,vectores)
let var1 = 45
let array = [1,'hola',false,{id:5},null, undefined,var1];
console.log(array);

//acceder a los valores de una array desde su posicion
//array[indice] => 0,1,2,3,4,5,6 .....
console.log(array[3]);

//metodos para introducir nuevos valores en nuestro array
//.push() .unshift() => mutan el valor de nuestro array
// valores al final utilizamos .push()
array.push('final',45,100,10);
console.log(array);

//valores al principio unshift
array.unshift('inicio',47,99);
console.log(array);

//eliminar valores en nuestro array
//.pop() .shift() => mutan el array
//Valores al final pop
const array2 = [1,2,3,'Hola',false]
array2.pop();
console.log(array2);
array2.pop();
console.log(array2);
//valores al principio
array2.shift();
console.log(array2);

//Metodo para eliminar, modificar o añadir valores en nuestro array
//.splice(x,y,z)
let array3 = [1,2,4,5,6,7];
//valores a eliminar .splice(indice,numValoresEliminar)
array3.splice(3,1)
console.log(array3);
//añadir valores al array .splice(indice,0,valores)
array3.splice(2,0,'Valor Nuevo')
console.log(array3);

//modificar valores .splice(indice,numValoresEliminar,valores)
array3.splice(1,1,'Hola')
console.log(array3); 
