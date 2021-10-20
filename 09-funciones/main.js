// const array1=['Cristina','Juan','Pedro'];

// function myPop(miArreglo) {
//   const elementoborrado= miArreglo.splice(miArreglo.length -1, 1);

//   return elementoborrado;
// }

// myPop(array1);

// console.log(array1);
// console.log(myPop(array1));



// Funciones 01.
//  const frutas = ['Plátanos', 'Bananas', 'Piñas', 'Manzanas', 'Peras', 'Uvas', 'Pomelos'];
// Crea una función que recibe como parámetro una fruta como string y devuelve la posicion del array donde esté esa fruta.
// Si no encuentra el elemento que devuelva -1;
// Guarda el valor que retorna la función y imprimela en la consola.

// const frutas1 = ['Plátanos', 'Bananas', 'Piñas', 'Manzanas', 'Peras', 'Uvas', 'Pomelos'];

// function myIndex (array, fruta) {
//   let encontrado= -1;
//   for(let i=0; i<array.length; i++) {
//     if (array[i]===fruta) {
//       encontrado= i;
//       break;
//     }
//   }
//   return encontrado;
// }

// const posicion = myIndex(frutas1, 'piñas');
// console.log(posicion);


// Funciones 02.

// Crea una función que reciba el array de frutas y devuelva un string con todas las frutas separadas por comas.
// ¡¡¡No tiene que haber una coma al final del string!!!

// const frutas = ['Plátanos', 'Bananas', 'Piñas', 'Manzanas', 'Peras', 'Uvas', 'Pomelos'];

// function miString (array) {
//   let frase='';
//   for (let i=0; i<array.length; i++) {
//     frase+=array[i];
//     if(i !==array.length -1) {
//       frase+=', ';
//     }
//   }
//   console.log(frase);
// }

// miString (frutas);


// Funciones 03.

// Crea una función que reciba el array de frutas y que te devuelva un nuevo array al revés.

// const frutas = ['Plátanos', 'Bananas', 'Piñas', 'Manzanas', 'Peras', 'Uvas', 'Pomelos'];

// function myReverse (array) {
//   let arr2=[];
//   for (let i=0; i<array.length; i++) {
//     arr2.unshift(array[i]);
//   }
//   return arr2;
// } 

// const arrayReversed= myReverse(frutas);
// console.log(arrayReversed);

// Funciones 04.

// Crea una función que le pasemos un array de números y nos devuelva cuál es el número mayor.

// function arrayNum (array) {
//   let numMayor=array[0];
//   for(let i=0; i<array.length; i++) {
//     if(array[i]>numMayor) {
//       numMayor=array[i];
//     } 
//   }
//   return numMayor;
// }

// const numeros=[5,10,8,4,1];
// const solucion= arrayNum(numeros);
// console.log(solucion);


//     Funciones 05.

// Haz una función que haga que la primera letra del string que le pasemos por parámetro sea mayúscula.

// let frase='las flores son muy bonitas'

// function letra (string) {
//   let mayuscula;
//   let recorte;
//   let fraseCambiada;

//   mayuscula=string.substr(0,1).toUpperCase();
//   recorte=string.substr(1, string.length);
//   fraseCambiada=mayuscula+ recorte;

//   return fraseCambiada;
// }

// let fraseFinal = letra(frase);
// console.log(fraseFinal);


// Funciones 06.

// Crea una función a la que le pasamos 2 números y imprime por consola cual es el mayor de los dos o si son iguales.

// const num=[8,8];

// function comparacion (arrayNum) {
//   if (arrayNum[0]>arrayNum[1]) {
//     console.log('el número '+ arrayNum[0]+ ' es mayor' );
//   } else if (arrayNum[1]>arrayNum[0]) {
//     console.log('el número '+arrayNum[1]+' es mayor');
//   } else {
//     console.log('los números '+arrayNum[0]+ ' y '+ arrayNum[1]+ ' son iguales');
//   }
// }

// const solucion= comparacion(num);
// console.log(solucion);


// Funciones 07.

// Crea una función que reciba dos números y devuelva true si los números son iguales.

// const num=[5,10]

// function comparacionDos (arrayNum) {
//   if (arrayNum[0]===arrayNum[1]) {
//     console.log('true');
//   } else {
//     console.log('false');
//   }
// }
// comparacionDos(num);

// Otra manera de hacerlo:

// const areEqual=(num1, num2)=> {
//   const equal= num1===num2;
//   return equal;
//   //  
//   return num1===num2;
// }
// console.log(areEqual(4,4))



// Funciones 08. - ¡Guinda!

// Crear una calculadora:

// Crea un bucle en el que el programa pregunta diferentes opciones (como si fuera un menú). 

// Las opciones serán (s) sumar, (r) restar, (m) multiplicar, (d) dividir, (e) exponencial, (p) porcentaje y (x) salir.

// La calculadora seguirá ejecutándose hasta que el usuario aprete la letra x que será salir.
// Para cada letra entre las opciones, crear la función que se encargará de hacer cada operación.
// Dentro de cada función, pediremos al usuario los datos necesarios para relizar esa operación.
// Que se imprima por consola el resultado de cada operación. 
// No hace falta que las funciones devuelvan nada, solo que impriman por consola.

// let respuesta;

// do {
//   respuesta= prompt(
//     `WELCOME TO LA CALCULADORA.
//     "s" SUMAR 
//     "r" RESTAR
//     "m" MULTIPLICAR
//     "d" DIVIDIR 
//     "e" EXPONENCIAL
//     "p" PORCENTAJE
//     "x" SALIR
//     `)

//     if(respuesta==='s'){
//       sumar();
//     }else if (respuesta==='r') {
//       restar();
//     }else if (respuesta==='m') {
//       multiplicar();
//     }else if (respuesta==='d'){
//       dividir();
//     }else if (respuesta==='e') {
//       exponencial();
//     }else if (respuesta==='p') {
//       porcentaje();
//     } else if (respuesta==='x'){
//       console.log('Has salido de la calculadora');
//     }
// }while(respuesta!='x');

// // aqui se declaran las funciones de la calculadora (suma,resta...)
// function sumar() {
//   let num1= Number (prompt('Dime un número'));
//   let num2= Number(prompt('Dime otro número'));
//   console.log(num1+num2);
// }

// function restar () {
//   let num1= Number(prompt('Dime un número'));
//   let num2= Number(prompt('Dime un número'));
//   console.log(num1-num2);
// }

// function multiplicar() {
//   let num1= Number(prompt('Dime un número'));
//   let num2= Number(prompt('Dime otro número'));
//   console.log(num1*num2);
// }

// function dividir() {
//   let num1= Number(prompt('Dime un número'));
//   let num2= Number(prompt('Dime otro número'));
//   console.log(num1/num2);
// }

// function exponencial() {
//   let num1= Number(prompt('Dime un número'));
//   let num2= Number(prompt('Dime el exponente'));
//   console.log(Math.pow(num1, num2));
// }

// function porcentaje() {
//   let num1= Number(prompt('Dime un número'));
//   let num2= Number(prompt('¿Que porcentaje quieres saber?'));
//   console.log((num1*num2)/100);
// }
