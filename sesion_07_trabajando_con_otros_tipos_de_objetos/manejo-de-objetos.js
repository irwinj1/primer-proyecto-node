//trabajando con objetos

const obj = {
    id:5,
    nombre:'Juan',
    apellido:'Perez',
    isDeveloper:true,
    libros_favoritos:['El metodo','El codigo de la manifestacion'],
    "4-juegos":[1,2,3,4]
}
console.log(obj.nombre);
console.log(obj["4-juegos"]);

//acceder añ propiedades de un objeto por medio de una variable
const prop = "isDeveloper"
console.log(obj[prop]);

const obj2 = obj;
console.log(obj2);
obj2.nombre = 'mario'
console.log(obj2.nombre);

console.log(obj.nombre);

const obj3 = {...obj}
obj3.nombre = 'Irwin'
console.log(obj3.nombre);
console.log(obj.nombre);

//como ordenar listas de objetos  en funcion de una propiedad

const listaPeliculas = [
    {
        titulo:'Lo que el viento se llevo',
        anio:1939
    },
    {
        titulo:'Titanic',
        anio:1997
    },
    {
        titulo:'Moana',
        anio:2016
    },
    {
        titulo:'Efecto Mariposa',
        anio:2004
    },
    {
        titulo:'Ted',
        anio:2012
    }
]
console.log(listaPeliculas);

//sort() para ordenar y muta el valor original de la lista
const nuevaLista = listaPeliculas.sort((a,b)=>a.anio - b.anio)
console.log(nuevaLista);