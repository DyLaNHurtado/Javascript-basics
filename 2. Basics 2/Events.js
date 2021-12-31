//       ********************
//       **     Eventos    **
//       ********************

//  --------------------
//  --    Teclado     --
//  --------------------
//keyDown : Tecla hundida
//keyUp : Dejar de presionar una tecla
//keyPress(Deprecado) : Tecla hundida y solo numeros y caracteres


//  ----------------
//  --    Raton   --
//  ----------------
//onclick : Click sobre un elemento
//onmousedown: Se pulsa el boton del raton sobre un elemento
//onmouseenter : El puntero del raton entra en el area de un elemento
//onmousemove : El puntero del raton se esta moviendo sobre el area de un elemento


//  --------------------------------
//  --    Eventos del navegador   --
//  --------------------------------
//DOMContentLoaded: La pagina se ha cargado

//  ------------------------
//  --    Custom Events   --
//  ------------------------
//..........



document.addEventListener("keydown",function(event) {
    console.log(event);
    
});

var button = document.getElementById("changeBackground");
button.addEventListener("click",function(event) {
    console.log(event);
    console.log(event.detail);
    //Cambiar color de fondo
    document.body.style.backgroundColor = `rgb( ${Math.round(Math.random()*255)},${Math.round(Math.random()*255)},${Math.round(Math.random()*255)})`
});

var myEvent= new CustomEvent('changeBackground',{'detail' : 'Hola Dylan'});
//Disparar evento
document.dispatchEvent(myEvent); 
