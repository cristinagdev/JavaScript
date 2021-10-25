// Es un programa para gestionar tareas.

// Empezaremos con un array con un par de tareas básicas.

// Creamos un menú en el que daremos las siguientes opciones:

// (c) Create to-do -> Añade al array un nuevo to-do que pide por prompt
// (r) Read to-dos -> Muestra todos los to-dos que hay en consola -> 1. Planchar camisas
// (u) Update to-do -> Te pregunta qué to-do quieres modificar y luego te pregunta por el nuevo texto del to-do.
// (d) Delete to-do -> Te pregunta qué to-do quieres borrar y te lo borra.
// (s) Search to-do -> Que te imprima por consola los to-dos que coincidan con tu búsqueda.
// (x) Exit -> sale del programa

//* Añadir la opción de ordenar los ToDos alfabéticamente
//* Añadir la opción de completar un toDo. Revisar que despues se haya marcado con ✔
//* Añadir la opción de imprimir solo las tareas pendientes

// Si puede ser hacer todo con Arrow Functions const nombreFunción = () => {}.

const toDos = [
  {toDo: 'Planchar Camisas', done: false },
  {toDo: 'Ir a comprar al súper', done: false },
  {toDo: 'Planchar Pantalones', done: false }
];

// CREATE
const createTask= () => {

  const taskToAdd= prompt('¿Que tarea quieres añadir?');

 // Guarda
  if(!taskToAdd || !isNaN(taskToAdd)) {
    console.log('Introduce algo correcto');
    return;
  }

  const newTask= {
    toDo: taskToAdd,
    done:false
  }

  toDos.push(newTask);
  readTask();


}

// READ

const readTask= () => {
  
    toDos.forEach( (task, index) =>{
      const taskDone= task.done ? '✔'  :'❌';
      return console.log(index +1 , task.toDo, taskDone);
    } )
  }

// UPDATE
const updateTask= () => {

  // Muestro todas las tareas
  readTask();

  // Te pregunta qué to-do quieres modificar
  const taskToModify= prompt('Dime el número de la tarea que quieres modificar');

  // Guarda 
  if (!taskToModify || isNaN(taskToModify)) {
    console.log('Tienes que introducir el número de la tarea');
    return;
  }
// Transformo la tarea introducida a número
  const taskNumber= Number(taskToModify);
  // Busco el índice de la tarea para que sea igual que lo que escribe el usuario
  const indexTask= toDos.findIndex( (task) => {
    return task===taskNumber -1;
  })

  // luego te pregunta por el nuevo texto del to-do
  const taskToAdd= prompt('¿Que tarea quieres introducir?')

  // La tarea que introduce la transformamos en objeto para sustituirlo por el que borramos
  const newObjectTask= {
    toDo:taskToAdd,
    done:false
  }
  console.clear();

  // Borramos ese objeto que tiene indexTask, y añadimos el nuevo objeto en su lugar.
  toDos.splice(indexTask, 1, newObjectTask);
  console.log('La tarea se ha añadido correctamente');


  // Muestro de nuevo las tareas que hay
  readTask();

}

// DELETE

const deleteTask= () => {

  const taskToDelete= prompt('Dime el número de la tarea que quieres borrar');

  // Guarda
  if (!taskToDelete || isNaN(taskToDelete)){
    console.log('Introduce el número de la tarea que quieres borrar');
    return;
  }

  // Transformamos lo que dice el usuario a número
  const taskNumber= Number(taskToDelete);
  
  // Recorremos el array para ver si cada objeto tiene un indice igual al que dice el usuario 
  const indexTask= toDos.forEach((task) => {
    return task===taskNumber -1;
  })
// Si se cumple lo anterior, hacemos splice de esa tarea y vemos las que nos quedan.
  toDos.splice(indexTask, 1)
console.clear();
  readTask();
  
}

// SEARCH

const searchTask= () => {

  const taskToSearch= prompt('¿Que tarea quieres buscar?');

  // Guarda
  if(!taskToSearch || !isNaN(taskToSearch)) {
    console.log('Introduce algo correcto');
  }

  // Recorremos el array para ver si incluye algo de lo que dice el usuario

  const taskFound=  toDos.filter((task)=> {
    return task.toDo.toLocaleLowerCase().includes(taskToSearch.toLocaleLowerCase());
  }   )

  console.log(taskFound);

}

// ORDENAR 
const orderTask= ()=>{

  // Hay que poner el punto con el nombre de la propiedad a ordenar
  toDos.sort((a, b)=> {
    if (a.toDo > b.toDo) {
      return 1;
    } else {
      return -1;
    }
  })
  console.clear();
  readTask();

}


// COMPLETE

const completeTask= () => {

  const taskToComplete= prompt('Dime el número de la tarea que quieres completar');

  // Guarda 
  if(!taskToComplete || isNaN(taskToComplete)){
    console.log('Introduce un número correcto');
    return;
  }

    if(toDos[taskToComplete-1].done === false) {
      toDos[taskToComplete-1].done = true;
    } else {
      console.log('La tarea está completada');
    }

    readTask();
}

const printedTask= () => {

  const undoneTask= toDos.filter( (task) => {
    if(task.done===false) {
      console.log(task.toDo+ '❌');
    }
  })

}

let respuesta;

while(true) {

  let respuesta= prompt(`Dime qué tarea quieres hacer:
  "c" -> create tarea
  "r"-> read tareas
  "u"-> update tarea
  "d"-> delete tarea
  "s"-> search tarea
  "o"-> order tareas
  "co"-> completar tarea
  "i"-> imprimir tareas pendientes
  "x"-> para salir`);

  if(respuesta==="x") {
    break;
  }


  switch (respuesta) {

    case "c":
      createTask();
      break;
    case "r":
      readTask();
      break;
    case "u":
      updateTask();
      break;
    case "d":
      deleteTask();
      break;
    case "s":
      searchTask();
      break;
    case "o":
      orderTask();
      break;
    case "co":
      completeTask();
      break;
    case "i":
      printedTask();
      break;
 
  }
}