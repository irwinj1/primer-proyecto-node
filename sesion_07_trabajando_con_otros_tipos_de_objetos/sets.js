//sets o conjuntos(español)
// los set permiten asegurar que dentro de el conjunto solo se encuentren datos unicos
const array = [1,2,3,4,5,6,1,2,5,6];
const miSets = new Set(array);
console.log(array);
console.log(miSets);

//.add()
miSets.add(9);
console.log(miSets);
miSets.add(9);
console.log(miSets);

//eliminar .delete()
miSets.delete(6)
console.log(miSets);

//limpiar set
//miSets.clear()
//console.log(miSets);

//.has() contiene valor
console.log(miSets.has(9))

//conocer el tamaño .size
console.log(miSets.size);


//iterar los valores
miSets.forEach(valor=>console.log(valor))

const it_miset = miSets.values()
console.log(it_miset);

const ar_miset = [...miSets]
console.log(ar_miset);