// EJERCICIOS

// Escribe un programa que pida un número mayor que 1 y que devuelva si el número es primo o no. Un número es primo si SOLO ES DIVISIBLE POR SÍ MISMO Y POR 1

// let numero= prompt('Dime un úmero mayor que 1');
// let num=  Number(numero);
// let primo=true;

// for (let i=2; i<num; i++ ) {

//   if (num%i===0) {
//     primo=false;
//     break;
// }
// }
// if (primo===true) {
//   console.log('El numero ' +num + ' es primo');
// }else {
//   console.log('El numero ' +num+ ' no es primo');
// }

// Métodos Arrays y Math 02.

// Crea 3 arrays:

// El primero tendrá 5 números. 
// El segundo se llamará pares y el tercero impares. Ambos estarán vacíos.
// Multiplica cada uno de los números del primer array por un número aleatorio entre 1 y 10:

// Si el resultado es par, guarda ese número en el array de pares y si es impar en el otro.

// Mostrar por consola:

// La multiplicación que se ha hecho -> 2 x 3 = 6
// El array de pares e impares.

// const array1= [5,4,7,3,9]
// const pares=[];
// const impares=[];
// let resultado=0; //Esta variable mejor dentro porque solo vas a usarla ahi

// Para multiplicarlo todo por el mismo numero lo dejas fuera, si quieres ir cambiando de número,dentro del for.

// let numeroAleatorio= Math.floor((Math.random() * 10) + 1);
// console.log('numero aleatorio: '+ numeroAleatorio);

// for (let numero of array1 ){

//   let numeroAleatorio= Math.floor((Math.random() * 10) + 1);

//   resultado=numero*numeroAleatorio;
//   console.log(numero+ 'x'+numeroAleatorio+'='+resultado);

//   if(resultado%2===0) {
//     pares.push(resultado);
//   }else {
//     impares.push(resultado);
//   }
// }

// console.log('Pares: ' +pares);
// console.log('Impares '+impares);


// Métodos Arrays y Math 03.

// Pide al usuario 5 números distintos y los guardas en un array amedida que los vaya escribiendo.
// Imprime el array por consola.
// Cuando acabe, suma el total de todos los números.

// Imprime en consola la suma total, la raíz cuadrada del total y también éste último pero redondeado al alta.

// let arrayNum=[];
// let numeroUser;
// let numero;
// let suma=0;

// for (i=0; i<=4; i++) {
//   numeroUser=prompt('Escribe 1 numero');
//   numero=Number(numeroUser);
//   arrayNum.push(numero);
//   suma+=arrayNum[i];
// }
// console.log(arrayNum);
// console.log(suma);
// console.log(Math.sqrt(suma));
// console.log(Math.ceil(Math.sqrt(suma)));


// Métodos Arrays y Math 04.

// Crea un array vacío y rellénalo con 10 números aleatorio entre 23 y 33 (ambos incluídos).

// Luego elimina del array todos los números pares y en lugar de ellos ponemos el string "los impares molan".

// let arrayNumber= [];

// for (let i=0; i<=9; i++) {
//   let ramdonNumber= Math.floor((Math.random() *(33-23)+23));
//   arrayNumber.push(ramdonNumber);
//   if(arrayNumber[i]%2===0) {
//     arrayNumber.splice(i,1,'los impares molan')
//   }
// }
// console.log(arrayNumber);


// Métodos Arrays y Math 05.

// Pide al usuario por teclado una frase y pasa sus caracteres a un array de caracteres.

// Elimina todas las vocales de la frase y imprime la nueva frase por consola

// const frase= prompt('Dime una frase');
// let arrayChar= frase.split('');
// let letra;

// for(let i=0; i<arrayChar.length; i++){
//   letra=arrayChar[i];
//   if (letra==='a' || letra==='e' || letra==='i' || letra==='o' || letra==='u') {
//     arrayChar.splice(i,1); 
//   }
// }

// console.log(arrayChar.join(''));


// Métodos Arrays y Math 06.


// Haz un programa que pida el número de DNI sin letra. Lo que hará el programa es devolver el mismo número con la letra que debería tener.

// Revisar que el número no pueda ser negativo ni tener más de 8 dígitos.

// Te doy un array de letras:

//   const letras = ['T','R','W','A','G','M','Y','F','P','D','X','B','K','E','T'];
// La posición de la letra que deberás añadir al DNI es la del resultado del MÓDULO del número de DNI introducido entre 23.

// let dni= prompt('Introduce tu DNI sin letra');
// let dniNumber=Number(dni);
// const letras = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];

// if(dniNumber<0 || dni.length!=8) {
//   console.log("El numero no es correcto");
// }else{
//   let posicionLetraArray = dniNumber%23;
//   dni = dni + letras[posicionLetraArray];
//   console.log(dni);
// }

