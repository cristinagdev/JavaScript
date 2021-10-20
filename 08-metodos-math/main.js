// metodos del objeto Math

// hace la raiz cuadrada. Devuelve la solucion
Math.sqrt(144); 

// Devuelve el número absoluto del que le damos.
Math.abs(-45)

// Calcula el exponente de un numero. Ej 5 al cuadrado.
Math.pow(5,2)

// METODOS QUE REDONDEAN

// Redondea a la baja.Por ej esto seria 5.
Math.floor(5.8)

// Redondea al alza. Esto seria 6.
Math.ceil(5.1)

// Redondea como en matematicas. A partir del 5 te redondea al alza, y por debajo a la  baja.
Math.round(5.9)

// CONSTANTES
// te da directamente la constante del numero pi
math.PI

// METODO RANDOM
// Crea de manera aleatoria un numero entre 0 y 1.
Math.random();
// Si queremos que genere un numero sin decimales podemos usar el floor o el ceil.
Math.florr((Math.random()*50));  //Esto te devuelve un numero a la baja desde el 1 hasta el 50

// Si queremos un numero aleatorio entre 2 numeros usamos esto:
// El máximo será excluido
Math.floor(Math.random()* (20-15)+15);