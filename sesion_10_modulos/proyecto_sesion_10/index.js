//importacions de modulos
import { suma, multiplica } from "./modulo/controller.js";

//importacion de chalk
import chalk from "chalk";

//uso de funcion suma en modulo e impresion en console log
const sumar = suma(1,2)
console.log(sumar);

//uso de funcion multiplica en modulo e impresion en console log y cambio de color con chalk
const multiplicar = multiplica(4,5)
console.log(chalk.green(multiplicar));