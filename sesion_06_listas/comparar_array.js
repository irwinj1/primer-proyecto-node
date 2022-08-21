//comparar lista .every()
const array = [1,3,4,6,22,44,55,78,-23,-34]
/*const resultado =array.every(valor=>{
    if (valor > 0) {
       return true
    }else{
        return false
    }
})*/
const resultado = array.every(valor => valor>0)
console.log(resultado);

//comparacion de listas
const ar1 = [1,2,3,4,5]
const ar2 = [1,2,3,4,5]
console.log(ar1===ar2);

const compararArray = (array_1,array_2)=>{
    if (array_1.length !== array_2.length) return false;
    const res = array_1.every((valor,i)=> valor === array_2[i])
    return res
}
console.log(compararArray(ar1,ar2));

const ar3 = [1,2,3,4,6]
console.log(compararArray(ar1,ar3));
