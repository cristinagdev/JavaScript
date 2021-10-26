class Personaje { 

  // Estas propiedades pueden ser leídas desde fuera sin necesidad de instanciar la clase Personaje
  // Las llamaremos así:    Personaje.estaVivo
  static estaVivo = true; 
  static puedeMorir = true;
  constructor(nombre, vida, fuerza) {
    this.nombre = nombre;
    this.vida = vida;
    this.fuerza = fuerza;
  }
  
  descripcion(){
    return `${this.nombre} tiene ${this.vida} puntos de vida y ${this.fuerza} puntos de fuerza.`
  }

  // Un método estático se podrá usar sin necesidad de crear un new objeto (instanciar) y si quieres usar propiedades dentro del método, éstas tendrán que ser también estáticas.
  static saludo(){
    console.log('hola, que sepas que puedes morir = ' + this.puedeMorir)
  }
}


class Prota extends Personaje {
  constructor(nombre, vida, fuerza, magia){
    super(nombre, vida, fuerza);
    this.magia = magia;    
  }

  atacar() {
    console.log(`${this.nombre} está atacando con ${this.fuerza} de fuerza.`)
  }
}


class Enemigo extends Personaje {
  constructor(nombre, vida, fuerza, raza){
    super(nombre, vida, fuerza);
    this.raza = raza;
  }

  resucitar(){
    console.log('dentro de 10 minutos resucito')
  }


  descripcionEnemigo() {
    const descripcionGenerica = super.descripcion();
    console.log(descripcionGenerica + 'Y tiene muy mal humor')
  }
}

const p1 = new Prota('Gandalf', 100, 35, 'Blanca');
const p2 = new Prota('Bilbo', 100, 15, 'Sin magia');

const e1 = new Enemigo('Huck', 150, 55, 'Uruk Hai');

console.log(p1, p2, e1);