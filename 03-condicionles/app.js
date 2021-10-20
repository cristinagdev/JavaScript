// Ejercicio 1

// const nota=prompt('Dime tu nota del examen');

// if (nota>5) {
//   console.log ('Aprobado')
// } else if (nota<5) {console.log ('Suspendido');}
// else {
// console.log ('Aprobado por los pelos')
// }

// Ejercicio 2

// const numero= prompt('Introduce un numero entero');

// if (numero>=0) {
//   console.log ('el numero es positivo')
// } else {
//   console.log ('el numero es negativo')
// }

// if (numero%2===0) {
//   console.log ('El numero es par');
// } else {
//   console.log ('El número es impar')
// }

// Otra manera de hacerlo es creando una variable fuera
// let multiploCinco = false;
// if (numero%multiploCinco ===0) {
//   multiploCinco=true;
// }

// if (numero%5 ===0) {
//   console.log ('el numero es multiplo de 5');
// }

// if (numero>100) {
//   console.log ('el numero es mayor que 100');
// } else if (numero<100) {
//   console.log ('el numero es menor que 100');
// } else {console.log ('El numero es 100')}

// Ejercicio 3
// const edad= prompt('Dime tu edad');

// if (edad<6 || edad>65) {
//   console.log ('Entras gratis');
// } else if (edad>=6 && edad<14) {
//   console.log ('Entrada 4€');
// }else {
//   console.log ('Entrada 7€');
// }

// Ejercicio 4

// let diaSemana = prompt('Dime el dia de la semana para conocer el menú');

// if (diaSemana == 'lunes') {
//   console.log ('Los lunes tenemos macarrones');
// }
// if (diaSemana == 'martes') {
//   console.log ('Los martes tenemos paella');
// }
// if (diaSemana == 'miercoles') {
//   console.log ('Los miercoles tenemos ensaladilla');
// }
// if (diaSemana == 'jueves') {
//   console.log ('Los jueves tenemos lentejas');
// }
// if (diaSemana == 'viernes') {
//   console.log ('Los viernes tenemos croquetas');
// }

// ejercicio 5

// const estacion= prompt('Dime que estación del año te gusta más');

// switch (estacion) {
//   case 'primavera' : console.log ('Las flores con preciosas')
//   break;
//   case 'verano': console.log ('El mar es lo mejor')
//   break;
//   case 'otoño': console.log('Las hojas de otoño son muy bonitas')
//   break;
//   case 'invierno': console.log ('Me encanta la nieve')
//   break;
//   default : console.log ('Eso no es correcto')
// }


// ejercicio 6 

// const mes= prompt('Escribe el numero del mes que quieras ');

// if (mes <=12 && mes>=1) {

// switch (mes) {
//   case '1': console.log ('Este mes tiene 30 dias')
//   break;
//   case '2': console.log ('Este mes tiene 30 dias')
//   break;
//   case '3': console.log ('Este mes tiene 31 dias')
//   break;
//   case '4': console.log ('Este mes tiene 30 dias ')
//   break;
//   case '5': console.log ('Este mes tiene 30 dias')
//   break;
//   case '6': console.log ('Este mes tiene 30 dias')
//   break;
//   case '7': console.log ('Este mes tiene 30 dias ')
//   break;
//   case '8': console.log ('Este mes tiene 30 dias')
//   break;
//   case '9': console.log ('Este mes tiene 30 dias ')
//   break;
//   case '10': console.log ('Este mes tiene 30 dias')
//   break;
//   case '11': console.log ('Este mes tiene 31 dias ')
//   break;
//   case '12': console.log ('Este mes tiene 30 dias ')
// }
// } else {
//   console.log ('El mes elegido es incorrecto')
// }


// ejercicio 7
// let num1 =prompt ('Escribe el primer numero');
// let num2= prompt ('Escribe el segundo numero');
// let num3 = prompt ('Escribe el tercer numero');

// console.log( 'los numeros introducidos son: ' +num1 + num2 +num3);

// if (num1>=num2 && num1>=num3) {
//   if (num2>=num3){
//     console.log ('El orden es: ' + num1 +num2 +num3);
//   }else {
//     console.log ('el orden es: ' +num1+num3+num2);
//   }
// } else if (num2>=num1 && num2>=num3) {
//   if ( num1>=num3){
//   console.log('el orden es: ' +num2+num1+num3);
//   }else {
//     console.log('el orden es: '+ num2 + num3 +num1);
//   }
  
// } else if (num3>=num1 && num3>=num2)
// { if (num1>=num2) {
//   console.log ('el orden es: ' + num3 +num1+ num2);
// } else {
//   console.log ('el orden es: ' +num3+num2 +num1);
// }

// }

// ejercicio 8 

let hora = prompt('Dime que hora es');
let minutos= prompt('Dime los minutos');
let segundos=prompt('Dime los segundos');

let horaNum=Number(hora);
let minutosNum=Number (minutos);
let segundosNum=Number(segundos);

console.log ('has introducido esta hora: ' + hora + ':' + minutos + ':' + segundos);

if (segundosNum>59 || minutosNum>59 || horaNum>23) {
  console.log('La hora introducida no es correcta');
}else{
  segundosNum+=1;

  if (segundosNum==60){
  minutosNum++;
  segundosNum=0;
  if (minutosNum==60) {
    minutosNum=0;
    horaNum++;
  }
  if (horaNum==24) {
    horaNum=0;
  }
  
  }
  console.log ('la hora es: ' + horaNum + ':' + minutosNum + ':' + segundosNum);
}





















