//.sort()
const array = [1,33,22,45,5,7]
console.log(array);
array.sort((a,b)=>{
    if (a>b) {
        return 1
    }else{
        return -1
    }
})
console.log(array);

//ordenar unicamente array numericos
const arrayNumerico = [1,4,6,3,33,22,5,45];
arrayNumerico.sort((a,b)=>a-b);
console.log(arrayNumerico);

//ordenar array de objetos
const listaObj = [
    {nombre:'irwin',edad:33},
    {nombre:'jose',edad:30},
    {nombre:'michelle',edad:28},
    {nombre:'lucia',edad:3},
    {nombre:'amaya',edad:34},
]
listaObj.sort((a,b)=>a.edad-b.edad)
console.log(listaObj);