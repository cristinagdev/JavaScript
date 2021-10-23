// main.js

// Crear un objeto de biblioteca
// Crear 10 libros.
// Imprimir títulos de libro en pantalla
// Alquilar dos o tres libros
// Mostrar libros disponibles
// Mostrar libros por género

import { Biblioteca } from "./classes/biblioteca.js";
import { Libro } from "./classes/libro.js";


// Biblioteca
const biblio= new Biblioteca('La luna', 'abierto');



// Libros:
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

console.log('Catálogo');
biblio.addBook(libro1);
biblio.addBook(libro2);
biblio.addBook(libro3);
biblio.addBook(libro4);
biblio.addBook(libro5);
biblio.addBook(libro6);
biblio.addBook(libro7);
biblio.addBook(libro8);
biblio.addBook(libro9);
biblio.addBook(libro10);
console.log(biblio);

console.log('***********');

// Imprimir los titulos:
console.log('TITULOS DE LOS LIBROS:');
biblio.mostrarLibros(); 


console.log('************');

// Alquilar libro:
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
biblio.mostrarGenero();

// Alquilar un libro por número:
biblio.alquiler();