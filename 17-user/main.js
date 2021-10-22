import { User } from './classes/user.js';

const user1= new User('pepito@gmail.com', 'Pepe', 'Castillo');
const user2= new User('carol1@gmail.com', 'Carol', 'Montero');
console.log(user1);
console.log(user2);

console.log(user1.email);
// Al haber creado el get si buscamos el email ya podemos verlo.

user2.email='hola@gmail.com'
console.log(user2.email);


user1.firstName='juan';
console.log(user1);

user1.courseToAdd('Javascript');
console.log(user1);