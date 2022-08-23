//funciones asincronas

function miAsync(){
    //hace llamada a base de datos externa
    //puede darnos algun error

}

const miPromesa = new Promise((resolve,reject)=>{
    const i = Math.floor(Math.random() * 2)
    //si esta todo correcto
    if (i !== 0) {
        resolve()
    }else{
        reject()
    }
})

miPromesa
    .then(()=>console.log("Se esta ejecutando de forma correcta"))
    .catch(()=>console.log("Error"))
    .finally(()=>console.log('Me ejecuto siempre'))