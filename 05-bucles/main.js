// for (let i=0; i<=10; i++) {
//   console.log ('hola desde un bucle for')
// }

// for (let i=1; i<=10; i++) {
//   if (i%2 !==0) {
//     console.log(i);
//   }
// }

// const array1= ['Ivan', 'Soraya', 'Guillermo', 'Cristina'];

// for (let i=0; i<array1.length; i++) {
//   console.log(array1[i]);
// }

// BUCLE FOR..IN
// const numbers=[1,2,3,4];

// for (let i in numbers) {
//   console.log(numbers[i]);
// }

// // BUCLE FOR..OF
// for(let number of numbers) {
//   console.log(number);
// }

// BUCLE WHILE
// variable
// while(condicion) {
  // codigo
// }




// Ejercicio 1
// for (let i=0; i<=30; i+=3) {
//   console.log('Numero ' + i);
// }

// console.log('-----------');

// Ejercicio 2

// for(let i=1; i<=10; i++) {
//   console.log(`8x ${i} = ${8*i}`);
// }

// console.log ('--------');


// Ejercicio 3

// for (let i=1; i<=20; i++) {
//   if (i%2===0){
//     console.log(i+ ' es par')
//   } else {
//     console.log(i + ' es impar')
//   }

// }

// Ejercicio 4

// const texto = prompt('Dime una frase');

// let contador=0;
// for (let index in texto) {
//   if(texto[index]==='a') {
//     contador++
//   }
// }
// console.log('con el bucle for..in tienes '+contador+ 'aes');

// let acumulador=0;
// for (let letra of texto) {
//   if(letra==='a') {
//     acumulador++
//   }
// }
// console.log('con el bucle for..of tienes '+acumulador+ 'aes');

// Ejercicio 5

// for (let i=1; i<=50; i++) {
//   console.log(i);
//   if (i%3==0 && i%5==0){
//     console.log('FrizzBuzz');
//   }else if (i%3==0) {
//     console.log('Frizz');
//   } else if (i%5==0) {
//     console.log('Buzz');
//   }else {
//     console.log(i);
//   }
// }

// Ejercicio 6
// for(let i=1; i<=10; i++) {
//   for (let j=1; j<=10; j++){
//   console.log(`${i} x ${j} = ${i*j}`);
//   }
// }

// Ejercicio 7
// let numero=0;
// while(numero<=10) {
//   numero= prompt('Introduce un numero mayor que 10');
// }

// Ejercicio 8

// let num=0;
// while (num<50 || num>100) {
//   num=prompt('Introduce un numero entre 50 y 100');
// }

// Ejercicio 9

// let numero= 0;

// while (numero<2 || numero>10) {
//   numero=prompt('Introduce un numero entre 2 y 10');
// }

// for (let i=1; i<=10; i++) {
//   console.log(`${numero} x ${i}= ${numero*i}`);
// }

// Ejercicio 10

// let linea='';
// let contador=1;
// while (contador<=7) {
//   linea+='*';
//   contador++;
//   console.log (linea);
// }

// Ejercicio 11

// const nombres= ['Cristina', 'Pedro', 'Pepe', 'Juan', 'Maria'];

// Ejemplo con FOR IN
// for (let index in nombres) {
//   console.log ('Conozco a alguien llamado...'+ nombres[index]);
// }

// Ejemplo con FOR OF

// for (let nombre of nombres) {
//   console.log('Conozco a alguien llamado...'+ nombre);
// }


// Ejercicio 12

// let myList=[1,9,3,8,5,7];
// console.log(myList);

// for (let i=0; i<myList.length; i++) {
//   console.log(myList[i]*2);
// }

// Ejemplo con FOR IN

// let myList=[1,9,3,8,5,7];
// console.log(myList);
// let mySecondList=[];

// for (let indes in myList) {
  // mySecondList[index]=myList[index]*2;
// }



// Ejercicio 13

// let cadena=[1,0,3,4,-5,6,-4,7,8,9];

// let positivos=0;
// let negativos=0;
// let ceros=0;

// for (let index in cadena) {
//   if (cadena[index]>0) {
//     positivos++} 
// }
// console.log(`Hay ${positivos} números positivos`)

// for (let index in cadena) {
//   if (cadena[index]<0) {
//     negativos++
//   }
// }
// console.log(`Hay ${negativos} números negativos`)

// for (let index in cadena) {
//   if (cadena[index]===0) {
//     ceros++
//   }
// }
// console.log(`Hay ${ceros} ceros`)

// CORRECCIÓN

// let cadena=[1,0,3,4,-5,6,-4,7,8,9];

// let positivos=0;
// let negativos=0;
// let ceros=0;

// for (let num of cadena) {
//   if (num>0) {
//         positivos++
//   } else if  (num<0) {
//     negativos++
//     } else {
//     ceros++
//   }
// }
// console.log(`Hay ${positivos} números positivos`)
// console.log(`Hay ${negativos} números negativos`)
// console.log(`Hay ${ceros} ceros`)


// Ejercicio 14


// const numeroAdivinar=Math.floor((Math.random() * 100) + 1);
// let numeroIntro;
// let intentos=6;

// while (intentos>1) {

//   numeroIntro=prompt('Adivina el número que estoy pensando del 1 al 100.Tienes ' + intentos+ ' intentos');
//   numUsuario=Number(numeroIntro);

//   if(numUsuario<numeroAdivinar){
//     intentos--;
//     console.log('El numero secreto es más grande. Te quedan: '+ intentos + ' intentos')

//   } else if(numUsuario>numeroAdivinar) {
//     intentos--;
//     console.log('El numero secreto es más pequeño. Te quedan: '+intentos+ ' intentos');

//   } else {
//     console.log('¡Has acertado!');
//     break;
//   }
// }

// if (intentos===1){
//   console.log('Ohhhh, el número era '+numeroAdivinar);
// }
