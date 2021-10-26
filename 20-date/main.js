// new Date(devuelve la fecha en el momento actual, justo de cuando se instancia el objeto)
const fechaActual = new Date();
//getTime() devuelve los milisegundos desde el 1 de enero de 1970 
console.log(fechaActual.getTime())

let miCumple = new Date(1987,0,4, 21,40,00);
miCumple = new Date('1987-01-04');
console.log(miCumple)
console.log('Año', miCumple.getFullYear());
console.log('Mes', miCumple.getMonth());
console.log('Día de la semana', miCumple.getDay());
console.log('Día del mes', miCumple.getDate());
console.log('Milisegundos', miCumple.getTime());

// Podemos también cambiar la fecha una vez creada
miCumple.setFullYear('1984'),
console.log(miCumple);

const milisegundosDeVida = fechaActual - miCumple;