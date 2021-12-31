var date = new Date();
console.log(date);

var year = date.getFullYear();
var month = date.getMonth() + 1; // Los meses van de 0 - 11 
var day = date.getDate();

console.log(`Hoy es : ${day} / ${month} / ${year}`)

console.log("Math.PI  = " + Math.PI)
console.log("Math.min de  1,2,3,45,6,3,31,2,-1 = " + Math.min(1,2,3,45,6,3,31,2,-1))
console.log("Math.max de  1,2,3,45,6,3,31,2,-1 = " + Math.max(1,2,3,45,6,3,31,2,-1))
console.log("Math.round de  4.5 = " + Math.round(4.5)) // Apartir de .5 sube
console.log("Math.round de 4.4 = " + Math.round(4.4)) // Mas bajo de .5 baja
console.log("Math.floor de 4.4 = " + Math.floor(4.4)) // Redondea siempre hacia abajo = 4
console.log("Math.ceil de 4.4 = " + Math.ceil(4.4)) // Redondea siempre hacia arriba = 5

var randomNum = Math.random(); // Numero random entre 0 y 1

function numRandom(min,max){
    return Math.random()*(max-min)+min
}

console.log(numRandom(10,100).toFixed(2));
console.log(Math.round(numRandom(10,100)));