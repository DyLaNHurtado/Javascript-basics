
 //Se pone el patron entre las dos barras diagonales
 //Si el carecter es especial pones  una barra invertida para escapar y tomar el caracter como literal

    //  ******************************************
    //  ***    Caracteres para poner despues   ***
    //  ******************************************

 // i -> ignoreCase: tanto como mayuscula como minuscula
 // g -> global: Para buscarlo en toda la cadena, no solo la primera coincidencia
 // m -> multiline: se usa cuando vas a evaluar en varias lineas

 //...

    // ********************************************
    // ***  Metodos de expresiones regulares    ***
    // ********************************************

// search -> regexObj.test(stringVar)
//  - Permite saber si dicho patron esta presente en un string o no
//  - Devuelve el indice de la primera coincidencia y si no hay devuelve -1
//  - Similar al metodo indexOf de los Strings

//exec -> regexObj.exec(stringVar)
//  - Ejecuta una busqueda de las coincidencias de la expresion regular, pero devuelve varios si encuentra en un array o null

//test -> regexObj.test(stringVar)
//  - Ejecuta una busqueda de ocurrencia entre la expresion regular y un string y retorna un booleano.

//match -> stringVar.match()
//  - Obtiene todas las ocurrencias de una expresion regular en un string




 var regeExp = /\//g; // Contiene "/"
 var regeExp2 = /s$/g; // Termina en s
 var regeExpHello = /^[a-z]$/g; // Empieza y termina por minusculas
 var regeExpHel= /Hel./g; // Punto para cualquier numero excepto cuando va con el dollar que es que termine en punto literal

 var band = "AC/DC";
 var hello = "Hello World";


 console.log(band.search(regeExp));
 console.log(regeExpHello.test(hello));
 console.log(regeExpHel.test(hello));
