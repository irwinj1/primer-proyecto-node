const miFuncion = (valor)=>{
    if (typeof valor === 'number') {
        return valor *2
    }
    throw new Error('El valor debe de ser de tipo numero')
}
//const elDoble = miFuncion('2')
//console.log(elDoble);
const numero = 8
try {
    //codigo puede fallar
    console.log("Esta ejecutandose de manera correcta");
    const doble = miFuncion(numera)
    console.log(doble);
} catch (error) {
    //en caso de que falle
    console.error(error);
} finally{
    console.log("Se va a ejutar tanto se  produce un error o no se produzca");
}

//InternalError, SintaxError, TypeError, RangeError y RefenceError
