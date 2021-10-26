// Libro:

// Propiedades de serie: alquilado = false
// Propiedades privadas: titulo, autor, paginas, genero.

// Métodos:
// Método prestado() que cambiará el estado de alquilado a true;
// Método devuelto() que lo cambiará a false.

class Libro {

  alquilado= false;
  #titulo;
  #autor;
  #paginas;
  #genero;
  id= Math.floor(Math.random() *5000);

  constructor(titulo, autor, paginas, genero) {
    this.#titulo= titulo;
    this.#autor=autor;
    this.#paginas= paginas;
    this.#genero= genero;
    
  }

  get titulo() {
    return this.#titulo;
  }

  get genero() {
    return this.#genero;
  }

  prestado(book) {
    this.alquilado=true;
    }

  devuelto(book) {
    this.alquilado=false;
  }


  }

  export {Libro};