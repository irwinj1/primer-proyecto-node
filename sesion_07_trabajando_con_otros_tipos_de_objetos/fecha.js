//trabajando con fechas
const fecha = new Date()
console.log(fecha);

//los meses inicializan en 0
const fecha2 = new Date(1989,1,12)
console.log(fecha2);

const fecha3 = new Date(-100000000) // definir atravez de los milisegundos
console.log(fecha3);

// fechas atravez de los string

const fecha4 = new Date('October 23, 2021 13:23:14')
console.log(fecha4);

console.log(fecha > fecha2);

const fecha5 = new Date(1989,1,12)
console.log(fecha5);
console.log(fecha5 == fecha2);

console.log(fecha2.getTime()===fecha5.getTime());

//obtener dia, mes, año de una fecha
//dia getDate()
console.log(fecha2.getDate() );

//mes .getMonth()
console.log(fecha2.getMonth() +1);

//año .getFullYear()
console.log(fecha2.getFullYear());


console.log(fecha2);


//.toLocalDateString
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
console.log(fecha2.toLocaleDateString());