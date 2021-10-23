// Libro:

// Propiedades de serie: alquilado = false
// Propiedades privadas: titulo, autor, paginas, genero.

// Métodos:
// Método prestado() que cambiará el estado de alquilado a true;
// Método devuelto() que lo cambiará a false.

class Libro {

  alquilado= false;
  // #titulo;
  #autor;
  #paginas;
  // #genero;

  constructor(titulo, autor, paginas, genero) {
    this.titulo= titulo;
    this.#autor=autor;
    this.#paginas= paginas;
    this.genero= genero;
  }

  prestado(book) {
    this.alquilado=true;
    }

  devuelto(book) {
    this.alquilado=false;
  }


  }

  export {Libro};