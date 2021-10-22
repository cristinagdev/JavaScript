// class User

// todos tendrán la propiedad isLogged = false

// crearemos las propiedades privadas:
    // email
    // firstName
    // lastName

//* en main.js -> crear dos usuarios con nombres y datos distintos


class User {
  isLogged= false;
  courses=[];
  #email;
  #firstName
  #lastName

  constructor(email, firstName, lastName) {
    this.#email=email;
    this.#firstName=firstName;
    this.#lastName=lastName;
  }

  get email() {
    return this.#email;
  }
// Creamos el get para mostrar por pantalla el email privado, de otra forma no puede verse.

// Parte 2

// Cread el setter que modificará el email:
// No puede ser texto vacío o número
// Tiene que contener por lo menos una arroba
// Si está mal imprimir error

set email(nuevoEmail) {
  if (!nuevoEmail || !isNaN(nuevoEmail) || !nuevoEmail.includes('@')  ){
    console.error('Tiene que ser un email válido');
    return;
  }
  this.#email=nuevoEmail;
}

// Parte 3
// Crea un setter para el firstName que pase un filtro básico de textos.

// Crear un método dentro de User que se llame capitalize() que le pases un texto y te lo devuelva capitalizado.

// Antes de guardar el texto en firstName tendremos que convertirlo en capitalizado con el método capitalize().


// Estas funciones son llamadas helpers, y suelen ser privadas
#capitalize(texto) {
  return texto[0].toUpperCase() + texto.substr(1).toLowerCase();
  
}

set firstName (newName) {
  
  if (!newName || !isNaN(newName)) {
    console.error('Tiene que ser un nombre válido');
    return;
  }

  this.#firstName= this.#capitalize(newName);

}


// Añade la propiedad que todos los objetos tendrán de serie -> courses = []
// Añadiremos algunos cursos entro del array.

// Creamos un método que añada un curso al arreglo courses.
// Añadimos los cursos desde main.js

courseToAdd(course) {
  this.courses.push(course);
}



}



export{User}