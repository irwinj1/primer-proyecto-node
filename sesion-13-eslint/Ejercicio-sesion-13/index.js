/*
- Instala la dependencia ESLint (https://www.npmjs.com/package/eslint)

- Duplica el archivo del ejercicio de la sesión 04-Textos

- Utiliza los tres estilos de comillas de forma alterna (comillas simples, dobles, backticks)

- Crea el fichero .eslintrc.json

- Cambia la configuración de ESLint para que la versión ecmaVersion sea "latest"

- Cambia la configuración de ESLint para que muestre un error cada vez que las comillas no sean dobles

- Crea un script en el package.json para corregir automáticamente todos los errores
 
- Ejecuta el script a través del terminal
*/


const nombre = "Irwin"
const apellido = "Guardado"
const estudiante = nombre.concat(" ",apellido)
const estudianteMayus = estudiante.toLocaleUpperCase()
const estudianteMinus = estudiante.toLowerCase()
const numeroLetrasEstu = estudiante.length
const primeraLetraNom = nombre.slice(0,1)
const primeraLetraApe = apellido.substring(0,1)
const eliminarEspacios = estudiante.replace(" ","")
const includeNombre = estudiante.includes(nombre)
console.log(nombre)
console.log(apellido)
console.log(estudiante)
console.log(estudianteMayus)
console.log(estudianteMinus)
console.log(numeroLetrasEstu)
console.log(primeraLetraNom)
console.log(primeraLetraApe)
console.log(eliminarEspacios)
console.log(includeNombre)