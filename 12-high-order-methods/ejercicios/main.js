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

/*

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
// Si ves que hay muchos decimales, haz que solo tengan 2.

const division= arrNum.map((numero) => { 
  const dividir=(numero/3).toFixed(2);
  Number(dividir)  
  return dividir
});

console.log(division);


// map() 02.
// Un nuevo array con todos los valores sumándole 2 y al cuadrado.

const suma= arrNum.map((numero)=> {return (numero+2)**2  } );
console.log(suma);

// map() 03.
// Un nuevo array con el 20% sumado.

const porcentaje= arrNum.map((numero)=> { return (numero*20/100) + numero })
console.log(porcentaje);

// map() 04.
// Un nuevo array en el que en cada posición haya otro array con el índice en la primera posición escrito así "Posición 0" y el número en la otra. ["Posición 0", 5].

const arrayDeArrays= arrNum.map((numero, i)=> {
  return ['Posicion ' + i +', ' + numero]
});

console.log(arrayDeArrays);
console.log(arrayDeArrays[0]);

*/

// ¡Ejercicio Guinda! -> To-Do
// Es un programa para gestionar tareas.

// Empezaremos con un array con un par de tareas básicas.


// Creamos un menú en el que daremos las siguientes opciones:

// (c) Create to-do -> Añade al array un nuevo to-do que pide por prompt
// (r) Read to-dos -> Muestra todos los to-dos que hay en consola -> 1. Planchar camisas
// (u) Update to-do -> Te pregunta qué to-do quieres modificar y luego te pregunta por el nuevo texto del to-do.
// (d) Delete to-do -> Te pregunta qué to-do quieres borrar y te lo borra.
// (s) Search to-do -> Que te imprima por consola los to-dos que coincidan con tu búsqueda.
// (x) Exit -> sale del programa

// Si puede ser hacer todo con Arrow Functions const nombreFunción = () => {}.

const todos = ['Planchar camisas', 'Ir a comprar al súper', 'Planchar pantalones'];


const create= ()=> {
  let tarea= prompt('¿Que tarea quieres añadir?');
    todos.push(tarea);
    console.log(`La tarea ${tarea} se ha añadido correctamente`);
}

const read= () => {
  todos.forEach ((tarea, i) => {
  return console.log(i+1 +'. '+ tarea);});
}

const update = ()=> {
  read();
  const tareaToModify= Number(prompt('Dime el número de la tarea que quieres modificar'));
  if (tareaToModify<=todos.length) {
    const tareaToAdd= prompt('¿Que quieres añadir?');
    todos.splice (tareaToModify-1, 1, tareaToAdd);
  } }
  // El -1 en el splice le indica que borre el numero que te dice el usuario menos una posicion, porque empiezan en 0, pero para él empieza en 1.

const deleteToDo= ()=> {
  read();
  let tarea= Number(prompt('¿Dime el numero de la tarea que quieres eliminar?')); 
    console.clear();
    todos.splice(tarea -1, 1);
    console.log(`la tarea ${tarea} se ha eliminado correctamente`);
    console.log(todos);
  }


const search= ()=> {

  let tarea=prompt('¿Que quieres buscar?');

  if(tarea===null) {
    return
  }
  if (tarea=== '') {
    console.log('Tienes que escribir una tarea');
    return;
  }

  const encontradas= todos.filter( (toDo) => {
    return toDo.toLowerCase().includes(tarea.toLowerCase());
  })
  console.log(encontradas);
}


let respuesta;

while(true){
  let respuesta= prompt(`Welcome to your to-Do list!
  "c" create to-do
  "r" read to-do
  "u" update to-do
  "d" delete to-do
  "s" search to-do
  "x" exit`);

  if (respuesta==="x") {
    break;
  }

  switch (respuesta) {

    case "c" :
      create();
      break;

    case "r" :
      read();
      break;

    case "u" :
      update();
      break;

    case "d" :
      deleteToDo();
      break;

    case "s" :
      search();
      break;
  }
} 