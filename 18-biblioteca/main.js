// main.js

// Crear un objeto de biblioteca
// Crear 10 libros.
// Imprimir títulos de libro en pantalla
// Alquilar dos o tres libros
// Mostrar libros disponibles
// Mostrar libros por género

import { Biblioteca } from "./classes/Biblioteca.js";
import { Libro } from "./classes/Libro.js";


// Biblioteca
const biblio= new Biblioteca('La luna', 'abierto');



// Libros:
const arrLibros= [

  new Libro('Harry Potter 1', 'J.K.Rowling', 350, 'Fantasía' ),
  new Libro('Harry Potter 2', 'J.K.Rowling', 370, 'Fantasía' ),
  new Libro('Harry Potter 3', 'J.K.Rowling', 420, 'Fantasía' ),
  new Libro('Chamán', 'Noah Gordon', 635, 'Novela'),
  new Libro('El perfume', 'Patrick Süskind', 239, 'Novela'),
  new Libro('Un mundo feliz', 'Aldous Huxley', 200, 'Novela'),
  new Libro('Cien años de soledad', 'Gabriel García Márquez', 334, 'Novela'),
  new Libro('Inventario Uno', 'Mario Benedetti', 607, 'Poesía'),
  new Libro('El perfume', 'Patrick Süskind', 239, 'Novela'),
  new Libro('El alquimista', 'Paulo Coelho', 257, 'Novela'),
  new Libro('El profeta', 'Khalil Gibran', 96, 'Poesía'),
  new Libro('El principito', 'Antoine de Saint-Exupéry', 95, 'Novela'),
  new Libro('La vida es sueño', 'Calderón de la Barca', 139, 'Teatro'),
  new Libro('Romeo y Julieta', 'William Shakespeare', 160, 'Teatro')

]

// Añadir libros al catalogo desde el array:
arrLibros.forEach((libro) => biblio.addBook(libro));
biblio.mostrarLibros();


// Libros míos:
const libro1= new Libro('Harry Potter', 'J. K. Rowling', '100pg', 'Fantasía');
const libro2= new Libro('El señor de los anillos', 'J.R.R. Tolkien', '300pg', 'Fantasía épica');
const libro3= new Libro('El alquimista', 'Paulo Coelho', '100pg', 'Desarrollo personal');
const libro4= new Libro('El código DaVinci', 'Dan Brown', '300pg', 'Suspense');
const libro5= new Libro('Crepúsculo', 'Stephenie Meyer', '200pg', 'Romantico');
const libro6= new Libro('El diario de Anna Frank', 'Anna Frank', '100pg', 'Bibliográfico');
const libro7= new Libro('El principito', 'Antoine de Saint-Exupéry', '100pg', 'Filosófico');
const libro8= new Libro('El nombre de la rosa', 'Umberto Eco', '200pg', 'Misterio histórico');
const libro9= new Libro('Alicia en el país de las maravillas', 'Lewis Carroll', '100pg', 'Fantasía');
const libro10= new Libro('El hobbit', 'J.R.R. Tolkien', '300pg', 'Fantasía épica');


// Añadir los libros al catalogo:

// console.log('Catálogo');
// biblio.addBook(libro1);
// biblio.addBook(libro2);
// biblio.addBook(libro3);
// biblio.addBook(libro4);
// biblio.addBook(libro5);
// biblio.addBook(libro6);
// biblio.addBook(libro7);
// biblio.addBook(libro8);
// biblio.addBook(libro9);
// biblio.addBook(libro10);
// console.log(biblio);

console.log('***********');

// Imprimir los titulos:
console.log('TITULOS DE LOS LIBROS:');
biblio.mostrarLibros(); 


console.log('************');

// Libros alquilados:
libro1.prestado(libro1);
libro3.prestado(libro3);
libro7.prestado(libro7);
console.log(libro1, libro3, libro7);

console.log('************');

// Mostrar libros disponibles
console.log('Libros disponibles:');
biblio.mostrarDisponibles();



console.log('************');

// Imprimir libros por genero:
console.log('LIBROS POR GÉNERO:');
biblio.mostrarGenero('Fantasía');

// Alquilar un libro por número:
const idLibro1 = biblio.catalogo[0].id;
biblio.alquiler(idLibro1)

// biblio.alquiler('2963');

console.log('Duplicados:');
biblio.comprobarDuplicados();
console.log('Indexados:');
biblio.indexarLibros();
biblio.inventarioPorAutor();