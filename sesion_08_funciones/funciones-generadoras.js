//funciones generadoras
function* generaId(){
    let id = 0;
    while(true){
        id++
        
        if (id>=10) {
            return id
        }
        yield id //especie de return pero en lugar de salir queda esperando
    }
}

const gen = generaId()
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next());
console.log(gen.next());