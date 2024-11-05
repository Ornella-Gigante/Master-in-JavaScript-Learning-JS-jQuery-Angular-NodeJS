'use strict'

// Añadimos el documento 


$(document).ready(function(){

    var caja = $("#caja");
 
// PRIMER EVENTO: MOUSEOVER 

    /**
     * 
    
    // MouseOver y MouseOut 

   

    // Función de callback 
    // Cuando el raton pase pro encima, cambia de color 
    caja.mouseover(function(){
        $(this).css("background","red");
    });


    // Cuando el raton vuelva a pasar, cambia de nuevo el color 

    caja.mouseout(function(){
        $(this).css("background", "purple");

    });

     */



    // EVENTO HOVER 
    // Más efectivo y sencillo que lo anterior, pero hace lo mismo 


    function cambiaRosa(){
        $(this).css("background", "pink");

    }


    function cambiaAzul(){
        $(this).css("background","blue");
    }


    caja.hover(cambiaAzul,cambiaRosa);


    //EVENTO CLICK, DOBLE CLICK 

    caja.click(function(){
        $(this).css("background","green")
               .css("color","white");

               console.log("Click");
    });


    caja.dblclick(function(){

        $(this).css("background","pink")
               .css("color","violet");

               console.log("Doble click");

    });


    //EVENTOS FOCUS Y BLUR

});

