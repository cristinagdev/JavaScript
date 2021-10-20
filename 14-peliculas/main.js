const peliculas = [
  { 
    titulo: 'El señor de los Anillos', 
    genero: ['Aventuras', 'Acción'], 
    duracion: 250, 
    year: 2001 , 
    director: 'Peter Jackson' 
  },
  { 
    titulo: 'Harry Potter', 
    genero: ['Aventuras', 'Fantasía'], 
    duracion: 150, 
    year: 2001 , 
    director: 'Chris Columbus' 
  },
  { 
    titulo: 'Troya', 
    genero: ['Histórica', 'Acción'], 
    duracion: 132, 
    year: 2004 , 
    director: 'Wolfgang Petersen' 
  },
  { 
    titulo: 'Iron Man', 
    genero: ['Ciencia Ficción', 'Acción'], 
    duracion: 126,
    year: 2008 , 
    director: 'Jon Favreau' 
  },
  { 
    titulo: 'E.T.', 
    genero: ['Aventuras', 'Ciencia Ficción'], 
    duracion: 115, 
    year: 1982 , 
    director: 'Steven Spielberg' 
  },
  { 
    titulo: 'Los Goonies', 
    genero: ['Aventuras', 'Comedia'], 
    duracion: 114, 
    year: 1985 , 
    director: 'Richard Donner' 
  },
  { 
    titulo: 'Algo Pasa con Mary', 
    genero: ['Comedia', 'Comedia Romántica'], 
    duracion: 119, 
    year: 1998 , 
    director: 'Bobby Farrelly' 
  },
  { 
    titulo: 'Hook',
    genero: ['Aventuras', 'Fantasía'], 
    duracion: 142, 
    year: 1991 , 
    director: 'Steven Spielberg' 
  }
]

// Ejercicio Array de objetos 01.
// Imprimir en consola un listado de Películas y directores de esta forma:
// El señor de los Anillos -> Peter Jackson
// Hook -> Steven Spielberg


peliculas.forEach( (pelicula) => {
  console.log(pelicula.titulo+ ' -> ' + pelicula.director);
})



// Ejercicio Array de objetos 02.
// Imprimir en consola los títulos de las películas más largas que dos horas y media.

const duracion= peliculas.filter( (pelicula)=> {
  (peliculas.duracion>150)
}) 
console.log(duracion);

// Ejercicio Array de objetos 03.
// Tener un arreglo nuevo que contenga las películas más modernas, de más del 2000.

const modernas= peliculas.filter( (pelicula)=> {
  return pelicula.year>2000
})
console.log(modernas);

// Ejercicio Array de objetos 04.
// Encuentra la película que tenga como director Bobby Farrelly y guarda esa película en una variable a parte. (Usa el find())

const director= peliculas.find( (pelicula) => {
  return pelicula.director==='Bobby Farrelly'
})

console.log(director);

// Ejercicio Array de objetos 05.
// Encuentra en el array la primera película que tenga a Steven Spielberg como director.

console.log( peliculas.find( (pelicula)=> { return pelicula.director==='Steven Spielberg'} ));

// Ejercicio Array de objetos 06.
// Consigue un array filtrado con todas las películas que sean de género Aventuras.

// const filtro= peliculas.filter( (pelicula)=> {
//   pelicula.genero
// }  )
// console.log(filtro);

// Ejercicio Array de objetos 07.
// Crea un nuevo array donde todas las películas tengan 20 minutos más de los que tienen en realidad. Usa el map()

console.log( peliculas.map( (pelicula) => {
  return pelicula.duracion+20;
} )  );

// Ejercicio Array de objetos 08.
// Crea un nuevo array y hac que todas las películas pasen a ser del año 2000.

const nuevoAño= peliculas.map( (pelicula) => {
  return {...pelicula, year:2000};
}  )
console.log(nuevoAño);

// Ejercicio Array de objetos 09.
// Recorre el array de películas y luego Imprime en consola el título y todos sus géneros.
// El señor de los anillos: 

// Aventuras 

// Acción 

// **********

console.log( peliculas.map( (pelicula) => {
  return pelicula.titulo + ': '+ pelicula.genero;
}    ));