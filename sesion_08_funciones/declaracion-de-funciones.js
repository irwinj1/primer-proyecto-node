//que son las funciones, como se declaran y como se utilizan
const nom = 'Irwin'

saludar(nom);
function saludar(nombre){
    console.log(nombre);
    console.log(`Hola ${nombre}`);
}


///
let nombre2 = 'Juan'
console.log(nombre2);
despedir(nombre2)
function despedir(nombre){
    nombre = 'Diego'
    console.log(`Adios ${nombre}`);
}

///
let persona = {nombre:'Juan',apellido:'Gonzalez'}
console.log(persona);
saludarPersona(persona)
console.log(persona);
function saludarPersona(objeto) {
    objeto.apellido = 'Villar'
    console.log(`Hola ${objeto.nombre} ${objeto.apellido}`);
}

///

imprimeNumero()
function imprimeNumero(numero = 7) { //parametros por defecto
    console.log(numero);
}


///

function imprimir(...parametros){
    console.log(parametros);
}
imprimir(1,3,9,2,'hola',{id:1})

//
function suma(...nums){
    return nums.reduce((a,b)=>a+b)
}
const s = suma(1,2,3,4,15)

console.log(s);

////
function multiplicar(a=0,b=0) {
    return a*b
}

const multiplicacion = multiplicar(9,5)
console.log(multiplicacion);