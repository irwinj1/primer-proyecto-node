//trabajar con metodos mas avanzados
//.map() .filter() .reduce()

const array = ['San salvador','San Miguel','Santa Ana','Cabañas','La Libertad'];

//.map()
const newArray = array.map((valor,i)=> `${i + 1}- ${valor}`)

console.log(newArray);

//.filter()
const listaObj = [
    {nombre:'irwin',edad:33},
    {nombre:'jose',edad:30},
    {nombre:'michelle',edad:28},
    {nombre:'lucia',edad:3},
    {nombre:'amaya',edad:34},
]

const personaMayore =listaObj.filter(valor=>valor.edad>30)
console.log(personaMayore);

const nuevaLista = listaObj.filter(ob=>ob.nombre!='irwin');
console.log(nuevaLista);

//reduce
const numeros = [1,2,3,4,5,6,7,8];
const suma = numeros.reduce((acum,cur,i,arrayO)=>acum+cur)
console.log(suma);