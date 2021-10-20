// Operador ternario

const logged= true;
const nombreUser= 'Pepe'


const conexion= logged ? 'conectado' : 'desconectado'

console.log(conexion);

const nombre= logged? nombreUser : 'usuario desconectado';

console.log(nombre);

const saludo= nombreUser==='Pepe' && logged ? 'Hola amigo!' : 'Hola!';

console.log(saludo);