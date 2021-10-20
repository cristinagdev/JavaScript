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

peliculas.filter( (pelicula)=> {
  (pelicula.duracion>150)
}) 
console.log();