//Un nuevo Set con los nombres de tu familia
const nuevoSet = new Set(['Irwin','Michelle','Jose Maria','Einar','Eliza','Xomara','Derian','Jesika','Meverlin']);
console.log(nuevoSet);

//Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)
const set_nevo = nuevoSet.add('Irwin')
console.log(set_nevo);

//Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)
nuevoSet.add('Javascript')
console.log(nuevoSet);