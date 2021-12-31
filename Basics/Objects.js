function Persona(nombre,edad){
    this.nombre=nombre;
    this.edad=edad;
    this.saludar= function(){
        console.log("Hola");
    }
}
var persona1 = new Persona('John',21)

var persona1= new Object({
    nombre:'John',
    edad:'30',
    saludar: function(){
        console.log("Hola")
    }
})

console.log(persona)

class Jugador {
    constructor(fuerza = 1) {
        this.fuerza = fuerza
        this.incrementaFuerza = function () {
            this.fuerza++
        }
        this.consultarFuerza = function () {
            return this.fuerza
        }

    }
}

var jugador = new Jugador();
console.log(jugador.consultarFuerza())
console.log(jugador.incrementaFuerza())
console.log(jugador.consultarFuerza())