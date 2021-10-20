// High order methods

// const libros = [
//   'Harry Potter',
//   'El señor de los Anillos',
//   'Dune',
//   'Cien años de Soledad',
//   'Entrevista con el vampiro',
//   'Biblia'
//   ];

// //   forEach 01.
// // Usando el array de libros, recórrelo con un forEach y si la letra del libro empieza por e o E lo imprimes por consola

// libros.forEach((libro) => 
//   { if (libro[0]==='e' || libro[0]==='E') {
//     console.log(libro);
//   }});

// console.log('********');

// // forEach 02.
// // Recorre el array de libros y si tiene más de 3 palabras imprimelo en la consola.

// libros.forEach((libro) => {
//   if (libro.split(' ').length> 3) {
//     console.log(libro);
//   }
// })
// console.log('*******');

// forEach 03.
// Recorre el array de libros y solo imprime en consola aquellos que estén en una posición impar.

// libros.forEach((libro, i) => 
// { if (i%2 !==0) {
//   console.log(i,libro);} }
//   )



const numeros = [1,5,7,13,14,22,18,45];

// filter() 01.
// Devuelve un nuevo array con todos los números que no son pares.
const numerosImpares= numeros.filter((numero)=> {
  if (numero%2 !==0) return true;
  else return false;
})
console.log(numerosImpares);

console.log('********');

// filter() 02.
// Devuelve un nuevo array con los números que sean múltiplos de 5.

const multiplos =numeros.filter((numero) => { 
  if (numero%5===0) return true;
  else false;
})

console.log(multiplos);

// filter() 03.
// Nuevo array sin el número 14.

const sinCatorce= numeros.filter((numero)=> numero !==14);
// con la funcion flecha le decimos devulveme (return) si numero es distinto de catorce.
console.log(sinCatorce);


const nombres = ['Carol', 'Guillermo', 'Irene', 'Javi', 'Cristina', 'Ivan', 'Adrian', 'Jose Carlos', 'Soraya', 'Isabel', 'Xavi'];

// filter() 04.
// Con el array de nombres crea un array nuevo con los nombres que tengan más de una a.

const nombres2= nombres.filter((nombre)=> {
  let acc=0;
  for (let letra of nombre) {
    if (letra.toLowerCase() ==='a') {
      acc++;
    }}
  return acc>1;
});
console.log(nombres2);

// filter() 05.
// Imprime un array nuevo con los elementos que terminen con n.

const nombres3= nombres.filter( (nombre) => {
  if(nombre[nombre.length -1]==='n') return true;
  else return false; })

console.log(nombres3);

// filter() 06.
// Crea un array nuevo con los elementos del array de nombres que sean impares.

const nombres4= nombres.filter((nombre, i)=> { return (i%2 !== 0)});
console.log(nombres4);

// find() 01.
// Del arreglo de nombres, consígue usando el método find() aquel nombre que sea compuesto (Jose Carlos).
// find() 02.
// Del arreglo de números devuélveme el que sea múltiplo de 2 y mayor de 15.

const arrNum = [5,14,68,75,98];

// map() 01.
// Dame un nuevo array con todos los valores divididos por 3.

const division= arrNum.map((numero) => { return numero.toFixed(2) /3 });
console.log(division);

// Si ves que hay muchos decimales, haz que solo tengan 2.

// map() 02.
// Un nuevo array con todos los valores sumándole 2 y al cuadrado.

const suma= arrNum.map((numero)=> {return (numero+2)**2  } );
console.log(suma);

// map() 03.
// Un nuevo array con el 20% sumado.

// const porcentaje= arrNum.map((numero)=> { return numero+()  })

// map() 04.
// Un nuevo array en el que en cada posición haya otro array con el índice en la primera posición escrito así "Posición 0" y el número en la otra. ["Posición 0", 5].

const map4= arrNum.map((numero, i)=> {
  [numero[i]='posicion '+ i+ numero]
})

console.log(map4);