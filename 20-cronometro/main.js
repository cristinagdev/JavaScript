// Ejercicio Cronómetro
// Crea una clase que sirva para crear cronómetros. Que cada instancia pueda arrancar y parar su propio cronómetro y mostrar en pantalla el tiempo que ha pasado.

// El cronómetro puede empezar a contar (new Date).

// Error -> No puedes darle a empezar si ya ha empezado
// El cronómetro puede parar

// Error -> No puede parar si ya está parado
// El cronómetro se puede resetear a 0

// Error -> No puede resetearse a 0 si ya está en 0
// Funcionamiento:

// Instancia un cronómetro.
// Ponlo en marcha
// Apágalo
// Muestra el tiempo en pantalla.
// Revisa todos los posibles errores que pueda dar.

class Cronometro {

  timeStart=0;
  timeStop=0;
  totalTime=0;

  getTime() {
    this.totalTime=(this.timeStop - this.timeStart)/1000;
    console.log(this.totalTime);
  }

  start(){

    if(this.timeStart!==0) {
      console.log('El cronometro ya está encendido');
      return;
    }
    
    this.timeStart= new Date().getTime();

  }

  stop() {

    if(this.timeStart===0) {
      console.log('No puedo pararlo sino ha empezado');
      return;
    }

    if(this.timeStop!==0) {
      console.log('Ya lo he parado');
      return;
    }
    this.timeStop= new Date().getTime();

  }

  reset() {

    if(this.totalTime===0) {
      console.log('El cronometro ya está en 0');
      return;
    }

    this.totalTime=0;
    this.timeStart=0;
    this.timeStop=0;

  }

}

const cronometro1= new Cronometro();

console.log(cronometro1);
console.log( cronometro1.start()); 
console.log( cronometro1.stop()); 
console.log( cronometro1.getTime()); 
