//iterar los valores de una lista
const array=['Hola',3,5,90,false,undefined]

//forma antigua y poco eficiente
for (let index = 0; index < array.length; index++) {
   console.log(array[index]);
}

//forma ES6 mas eficiente .forEach()

let suma = 0;
const arrayNums=[3,6,2,77,2,3,93,19]
arrayNums.forEach(item=>{
    suma +=item
    console.log(suma);
})

//busqueda de un valor dentro de una lista .find()
//elemento 90 de array inicial
const variable = array.find(valor=>valor==90?true:false)
console.log(variable);

const listaObj = [
    {nombre:'irwin',edad:33},
    {nombre:'jose',edad:30},
    {nombre:'michelle',edad:28},
    {nombre:'lucia',edad:3},
    {nombre:'amaya',edad:34},
]

/*const nombre = listaObj.find(o=>{
    if(o.nombre === 'irwin'){
        return true
    }

})*/

const nombre = listaObj.find(o=>o.nombre === 'irwin')

console.log(nombre.edad);

const {edad} = listaObj.find(o=>o.nombre==='irwin')
console.log(edad);
