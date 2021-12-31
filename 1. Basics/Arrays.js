var colores = ["verde","azul" ,"rojo"]


for (let i = 0; i < colores.length; i++) {
    console.log(colores[i])
    
}
while(colores.length>100){
    colores.pop()
}

//Muestra los numeros pares del siguiente array [0,1,2,3,4,5,6,7,8,9,10,11,12]
var array = [0,1,2,3,4,5,6,7,8,9,10,11,12]

for (let i = 0; i < array.length; i++) {
    if(array[i] % 2 == 0){
        console.log(array[i]);
    }
}

//Suma todos los numeros del siguiente array [0,1,2,3,4,5,6,7,8,9,10,11,12]
var suma = 0;
for (let i = 0; i < array.length; i++) {
    suma+=i
}
console.log(suma)

// push aniade elemento al final del array
colores.push("amarillo")
//Elimina el primer elemento del array y lo devuelve.
array.shift()
//Elimina el ultimo elemento del array y lo devielve.
array.pop()
//Aniade un elemento al principio del array
array.unshift(12)
//Devuelve el indice del elemento en el array
array.indexOf(12)
// Eliminar un unico elemento mediante su posicion Primer parametro: Index de array a eliminar y Segundo: numero de elementos que queremos eliminar
//Si son varios devuelve un array de ellos
array.splice(1,2) 
//Copiar array
let copiaArray = array.splice()
array.sort() // Ordena el array
array.reverse() // Invierte los elementos del array

array.every(true===true)// Devuelve true si todos cumplen la condicion
array.some(true===true) // Devuelve true si al menos uno cumple la condicion

//Parte el array en los elementos clave valor (Array Iterator)
var iterator = array.entries();
iterator.next().value // Array[0, "a"]
iterator.next().value // Array[1, "b"]

//Rellena con 5 la posiciones del 2 al 4 sin contar la ultima. 
//Si no se especifica el rango se llena todo
// Si se especifica el minimo, pues del minimo hasta el final
array.fill(5,2,4)

//Concatena elementos de array
array.join() // "Fire,Air,Water"
array.join('') //"FireAirWater"
array.join("-") //"Fire-Air-Water"

// Doumentacion
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array
