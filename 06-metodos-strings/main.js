// Ejercicio 1

// const frase= 'Hoy hace muy buen día';
// const letra='m';
// let contador=0;

// // Localiza la letra
// for (let i=0; i<frase.length; i++) {
//   if(frase[i]===letra) {
//     contador++
//   }
// }
// if (contador!=0) {
//   console.log(true);
// } else {
//   console.log(false);
// }
// // Dice la posición
// let posicion=-1;
// for (let index in frase) {
//   if (frase[index]===letra) {
//     posicion=index;
//     break;
//   }
// }
// console.log(posicion);

// // Opcion includes:
// console.log(frase.includes(letra));
// // Opcion indexOf:
// console.log(frase.indexOf(letra));


// Ejercicio 2
const lista ='Plátanos, Bananas, Kiwis, Limones';

// const lista1= lista.slice(9, 24);
// console.log(lista1);
const lista2=lista.substr(9, 15);
console.log(lista2);

const frutas= lista.replace('Limones', 'Naranjas');
console.log(frutas);

const array1= lista.split(', ');
console.log(array1);

// Ejercicio 3

// Pide un string al usuario y devuélvelo con SOLO LA PRIMERA LETRA en mayúsculas.
// Haz lo mismo pero con la primera letra de cada palabra.

// Primera letra
const frase=  prompt('Escribe una frase y cambio la primera letra a mayúsculas');

const letra= frase.slice(0,1).toUpperCase() + frase.slice(1);
console.log(letra);

// Cada palabra
const arrayPal= frase.split(' ');
let fraseFinal='';

for (let palabra of arrayPal) {
  palabra=palabra.slice(0,1).toUpperCase()+ palabra.slice(1);
  fraseFinal+=palabra + ' ';
}

console.log(fraseFinal);