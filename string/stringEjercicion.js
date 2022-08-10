const nombre = "Irwin";
const apellido = "Guardado";
const estudiante = nombre.concat(' ',apellido);
const estudianteMayus = estudiante.toLocaleUpperCase();
const estudianteMinus = estudiante.toLowerCase();
const numeroLetrasEstu = estudiante.length;
const primeraLetraNom = nombre.slice(0,1);
const primeraLetraApe = apellido.substring(0,1)
const eliminarEspacios = estudiante.replace(' ','')
const includeNombre = estudiante.includes(nombre)
console.log(nombre);
console.log(apellido);
console.log(estudiante);
console.log(estudianteMayus);
console.log(estudianteMinus);
console.log(numeroLetrasEstu);
console.log(primeraLetraNom);
console.log(primeraLetraApe);
console.log(eliminarEspacios);
console.log(includeNombre);