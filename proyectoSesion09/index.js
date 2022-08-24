const logger = require('./logger/logger')

const sumaNumeros = (num1,num2)=>{
    if (typeof num1 ==='number' && typeof num2 === 'number') {
        return num1 + num2;
    }
    throw Error('Los datos deben de ser tipo numericos');
}

let numero1 = 4;
let numero2 = "5";
try {
    const sumas = sumaNumeros(numero1,numero2);
    console.log(sumas);
} catch (error) {
    console.log(error);
    logger.error(error)
}

