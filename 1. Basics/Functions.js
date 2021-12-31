const TOTAL = 102
const PEOPLE = 6

console.log(TOTAL/PEOPLE)

const MOVIL = 300
const CASCOS = 30
const FUNDA = 10
const DESCUENTO = 10
const CARRITO= MOVIL+CASCOS+FUNDA

console.log(CARRITO*DESCUENTO/100)

console.log(typeof MOVIL)

console.log(`Hello${CARRITO}`)

function sum(a,b){
    console.log(a+b)
}

sum(1,2)

function hello(name="World"){
    console.log(`Hello ${name}`)
}

hello("Dylan")
hello()

var adios=function(nombre="Dylan"){
    return nombre + ` adios`
}
console.log(adios())

console.log(adios(`Manolo`))

var resta = (n1=200,n2=50) => n1 - n2
console.log(resta())
console.log(resta(10,12))
console.log(resta(8,3))

var areaCuadrado = (lado=3)=>console.log(`Area = ${lado*lado} m^2`);

areaCuadrado();
areaCuadrado(30);