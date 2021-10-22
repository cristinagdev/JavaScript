//* Añadir la opción de ordenar los ToDos alfabéticamente
//* Añadir la opción de completar un toDo. Revisar que despues se haya marcado con ✔
//* Añadir la opción de imprimir solo las tareas pendientes



const toDos = [
  {toDo: 'Planchar Camisas', done: false },
  {toDo: 'Ir a comprar al súper', done: false },
  {toDo: 'Planchar Pantalones', done: false },
];


const createToDo= ()=> {
  const newToDo=prompt('¿Qué tarea quieres añadir?');

  // Comprobamos que el usuario ponga algo válido
  if (!newToDo || isNaN(newToDo)) {
    console.log('Introduce algo válido')
    return;
  }

  const toDo= { 
    task: newToDo,
    done: false
  }
  toDos.push(toDo);
  console.clear();
  console.log('La tarea se ha añadido correctamente');
}



const readToDo= () => {
  toDos.forEach( (tarea, index) => {

    const toDoDone= tarea.done ? '✔'  :'❌';
    console.log(`${index+1}.- ${tarea.toDo} ${toDoDone}`);
  })
}

const updatetoDo = ()=> {

  console.clear();
  readToDo();

  const toDoIndex= prompt('¿Que número de tarea quieres borrar?');

  // Primero revisamos
  if (isNaN(toDoIndex) || !toDoIndex) {
    console.log('Necesito un número');
    return;
  }

  const toDoIndexNumber= Number(toDoIndex)

  const tareaToDelete= toDos.some( (_, index) => {
    return toDoIndexNumber===index +1});

  if (!tareaToDelete) {
    console.log('No hay ninguna tarea con ese número');
    return;
  }

  const newToDo=prompt('Dime el texto nuevo que tendrá la tarea');
  if(!newToDo || !isNaN(newToDo)) {
    console.log('Introduce algo válido.')
    return;
  }

  const newObjectToDo= {task: newToDo, done:false}

  toDos.splice(toDoIndexNumber -1, 1, newObjectToDo);
  readToDo();
}
  // El -1 en el splice le indica que borre el numero que te dice el usuario menos una posicion, porque empiezan en 0, pero para él empieza en 1.

const deleteToDo= ()=> {
  console.clear();
  readToDo();

  const toDoIndex = prompt('Dime el número del toDo a borrar.');

  if(isNaN(toDoIndex) || !toDoIndex) {
    console.log('Necesito un número.');
    return;
  }
  const toDoIndexNumber = Number(toDoIndex)
  const toDoExists = toDos.some(( _ , index) => {    
    return toDoIndexNumber === index + 1
  });

  if(!toDoExists){
    console.log('No hay ninguna tarea con ese número.')
    return;
  }

  toDos.splice(toDoIndexNumber - 1, 1);
  readToDo();
}


let respuesta;

while(true){
  let respuesta= prompt(`Welcome to your to-Do list!
  "c" create to-do
  "r" read to-do
  "u" update to-do
  "d" delete to-do
  "o" para ordenar las tareas
  "x" exit`);

  if (respuesta==="x") {
    break;
  }

  switch (respuesta) {

    case "c" :
      createToDo();
      break;

    case "r" :
      readToDo();
      break;

    case "u" :
      updatetoDo();
      break;

    case "d" :
      deleteToDo();
      break;
  }
}