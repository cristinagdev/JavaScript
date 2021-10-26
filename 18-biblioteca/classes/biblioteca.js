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
      return console.log(index+1 +'.- '+ libro.titulo);
    })
  }

  // Mostrar libros disponibles:
  mostrarDisponibles() {
    const disponibles=this.catalogo.filter((libro) => libro.alquilado===false)
    console.log(disponibles);
  }

  // Método para imprimir por género:
  mostrarGenero() {
   const librosGenero= this.catalogo.filter((libro)=> {
      return libro.genero===libro.genero;})
      console.log(librosGenero);
  }

  // Alquilar un libro por el id:
  alquiler(numLibro) {

    if(!numLibro) {
      console.error('Necesito un id de libro válido.')
    }
    const estaEnElCatalogo = this.catalogo.find((libro) => {
      return libro.id === numLibro
    })
    if(!estaEnElCatalogo) {
      console.error(`El libro con el id ${numLibro} no está en el catálogo.`)
      return;
    }
    estaEnElCatalogo.prestado();
    
  }

  // Metodo para comprobar si hay algo repetido
  comprobarDuplicados() {

    const acc= [];

    this.catalogo.forEach((libroA) => {

      this.catalogo.forEach((libroB) => {
        if (libroA.id !== libroB.id && libroA.titulo === libroB.titulo) {
          acc.push(libroA);
        } })
    })
    this.mostrarLibros(acc);
  }


  // Utilizando el nuevo reduce

  indexarLibros() {

    const librosIndexados = this.catalogo.reduce((acc, libro)=>{
      acc[libro.autor] = libro;
      return acc;
    }, {})
    console.log(librosIndexados)
    console.log(librosIndexados['Mario Benedetti'])


  }

  inventarioPorAutor() {

    const inventario= this.catalogo.reduce(
      (acc, libro) => {
      
      acc[libro.autor] =acc[libro.autor] ? acc[libro.autor]+=1 : 1;
      return acc; }, {}) 
  
  console.log(inventario);
  }



}
export {Biblioteca};