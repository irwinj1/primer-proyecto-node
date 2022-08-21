// Una variable que contenga la lista de la compra (mínimo 5 elementos)
const lista_compras = ['Arroz','Carne','Leche','Azucar','Pollo'];
// Modifica la lista de la compra y añádele "Aceite de Girasol"
lista_compras.push('Aceite Girasol');
console.log(lista_compras);

//Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
lista_compras.pop()
console.log(lista_compras);


//- Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
const peliculasFavoritas = [
    {
        titulo:'Batman: El caballero de la noche',
        director:'Christopher Nolan',
        fecha:new Date(2008,07,18)
    },
    {
        titulo:'Rápidos y furiosos: 5in control',
        director:'Justin Lin',
        fecha:new Date(2011,04,29)
    },
    {
        titulo:'Hackers: piratas de la informática',
        director:'Iain Softley',
        fecha:new Date(1995,09,15)
    }
]
console.log(peliculasFavoritas);

//Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
const nuevaListaFav = peliculasFavoritas.filter(valor => valor.fecha < new Date(2010,01,01))
console.log(nuevaListaFav);

//Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
const listaDirectores = peliculasFavoritas.map(directores =>  directores.director);
console.log(listaDirectores);

// Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
const listaTitulos = peliculasFavoritas.map(titulos =>  titulos.titulo);
console.log(listaTitulos);
//Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)

const listaConcatenada = listaDirectores.concat(listaTitulos);
console.log(listaConcatenada);

// Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
const listaPropagacion = [...listaDirectores,...listaTitulos];
console.log(listaPropagacion);