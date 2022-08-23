//Una función sin parámetros que devuelva siempre "true"
function sinParametros(){
    return true
}
console.log(sinParametros());

/*Una función asíncrona que utilice un setTimeout y pase por consola un  
5 segundos después de haberse ejecutado
*/
const funcAsync = new Promise((resolve,reject)=>{
    setTimeout(() => {
        if (true) {
            resolve("Hola soy una promesa")
        }else{
            reject("Error")
        }
    }, 5000);
})

funcAsync
    .then((res)=>console.log(res))
    .catch(err=>console.log(err))

//Una función generadora de índices pares automáticos
function* indicesAutomaticos(){
    let indice = 0;
    while (true) {
        indice++
        if (indice >= 15) {
            return indice
        }
        yield indice
    }
}
const genIndice = indicesAutomaticos()
console.log(genIndice.next().value);
console.log(genIndice.next().value);
console.log(genIndice.next().value);
console.log(genIndice.next().value);
console.log(genIndice.next().value);
console.log(genIndice.next().value);
console.log(genIndice.next().value);
console.log(genIndice.next().value);
console.log(genIndice.next().value);
console.log(genIndice.next().value);
console.log(genIndice.next().value);
console.log(genIndice.next().value);
console.log(genIndice.next().value);
console.log(genIndice.next().value);
console.log(genIndice.next().value);
console.log(genIndice.next().value);