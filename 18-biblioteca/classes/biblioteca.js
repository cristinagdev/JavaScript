// Biblioteca:

// Propiedades de serie: catalogo = []
// Propiedades privadas: nombre, estaAbierta

// Métodos:
// Método que añada un libro al catálogo.
// Método que imprima los títulos de los libros. -> 1.- Harry Potter
// Método que imprima los libros que quedan disponibles.
// Método que imprima los libros por género.
// Método que alquiler un libro pasándole el número de libro.


class Biblioteca {

  catalogo= [];
  #nombre;
  #apertura;

  constructor(nombre, apertura) {

    this.#nombre= nombre;
    this.#apertura= apertura;
  }

// Método para añadir libros al catálogo
  addBook(book) {
    this.catalogo.push(book);
  }

  // Metodo para mostrar los libros:
  mostrarLibros(){
    this.catalogo.forEach((libro, index)=> {
      return console.log(index+1, libro.titulo);
    })
  }

  // get titulo() {
  //   return this.catalogo.#titulo;
  // }

  // Mostrar libros disponibles:
  mostrarDisponibles() {
    const disponibles=this.catalogo.filter((libro) => libro.alquilado===false)
    console.log(disponibles);
  }

  // Método para imprimir por género:
  mostrarGenero() {
    this.catalogo.forEach((libro)=> {
      return console.log(libro.genero);
    })
  }



  // Alquilar un libro por el número:
  alquiler() {

    const num=prompt('Dime el número del libro que quieres alquilar');
  
    if ( this.catalogo[num-1].alquilado===false) {
      this.catalogo[num-1].alquilado=true;
      // prestado(num);
    } else {
      console.log('Ese libro no está disponible');
    }
    // biblio.prestado()
  // }
  }
}
export {Biblioteca};