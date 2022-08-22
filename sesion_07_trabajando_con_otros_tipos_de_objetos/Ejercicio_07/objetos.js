//- Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
const datosPersonales={
    nombre:'Irwin',
    apellido:'Esperanza',
    edad:33,
    altura:1.65,
    eresDesarrollador:true
}
console.log(datosPersonales);

//Una variable que obtenga tu edad a partir del objeto anterior
const {edad} = {...datosPersonales}
console.log(edad);

// Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
const listaObj = [datosPersonales,
    {
    nombre:'Melvin',
    apellido:'Rivera',
    edad:34,
    altura:1.667,
    eresDesarrollador:false
},
{
    nombre:'Jose',
    apellido:'Martinez',
    edad:27,
    altura:1.70,
    eresDesarrollador:true
}
]
console.log(listaObj);
//Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor

const listaObjOrdenada = listaObj.sort((a,b)=>b.edad-a.edad)
console.log(listaObjOrdenada);