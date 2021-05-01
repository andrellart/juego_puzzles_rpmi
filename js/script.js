//INICIALIZACION

$("#inst").hide();
$("#help").hide();

$("#puzzle1").hide();
$("#pirata_closed").hide();
$("#puzzle1_cont").hide();
$("#puzzle1_acierto").hide();
$("#puzzle1_error").hide();
$("#puzzle1_pt").hide();

$("#puzzle2").hide();
$("#puzzle2_cont").hide();
$("#puzzle2_acierto").hide();
$("#puzzle2_error").hide();
$("#puzzle2_pt").hide();


$("#puzzle3").hide();
$("#puzzle3_cont").hide();
$("#puzzle3_acierto").hide();
$("#puzzle3_error").hide();
$("#puzzle3_pt").hide();


$("#puzzle4").hide();
$("#puzzle4_cont").hide();
$("#puzzle4_acierto").hide();
$("#puzzle4_error").hide();
$("#puzzle4_pt").hide();


$("#puzzle5").hide();
$("#puzzle5_cont").hide();
$("#puzzle5_acierto").hide();
$("#puzzle5_error").hide();
$("#puzzle5_pt").hide();


$("#puzzle6").hide();
$("#puzzle6_cont").hide();
$("#puzzle6_acierto").hide();
$("#puzzle6_error").hide();
$("#puzzle6_pt").hide();

$("#narco_lock").hide();
$("#bosque_lock").hide();
$("#alien_lock").hide();
$("#western_lock").hide();
$("#zombie_lock").hide();

$("#final").hide();


//VARIABLES
let puzzle1_pt = 0;
let puzzle2_pt = 0;
let puzzle3_pt = 0;
let puzzle4_pt = 0;
let puzzle5_pt = 0;
let puzzle6_pt = 0;

let puntos = 18;




//ABRIR VENTANA DE INSTRUCCIONES

$("#inicio_btn2").click(function(){

    $("#inst").show();

    $("#inicio").css("-webkit-filter", "blur(10px)");
    $("#mapa").css("-webkit-filter", "blur(10px)");
});

//ABRIR VENTANA DE INSTRUCCIONES EN EL MAPA

$("#help").click(function(){

    $("#inst").show();
    
    $("#inicio").css("-webkit-filter", "blur(10px)");
    $("#mapa").css("-webkit-filter", "blur(10px)");
});



//CERRAR VENTANA DE INSTRUCCIONES

$("#instrucciones_btn").click(function(){

    $("#inst").hide();

    $("#inicio").css("-webkit-filter", "blur(0px)");
    $("#mapa").css("-webkit-filter", "blur(0px)");
});


//COMENZAR JUEGO
$("#inicio_btn1").click(function(){

    $("#inicio").hide();
    $("#help").show();

    $("#narco_lock").show();
    $("#bosque_lock").show();
    $("#alien_lock").show();
    $("#western_lock").show();
    $("#zombie_lock").show();
    $("#mapaimg").attr("src", "img/mapa.png");
    $("#puzzle1_btn").css("animation-name", "mundos");

});




// PUZZLE 1
$("#puzzle1_btn").click(function(){

    $("#puzzle1").show();
    $("#help").hide();

    $("#mapa").css("-webkit-filter", "blur(10px)");
});


    //COMENZAR PUZZLE 1

$("#puzzle1_btn1").click(function(){

    $("#puzzle1_cont").show();
    $("#puzzle1_inicio").hide();
    
    
});

    //CERRAR PUZZLE 1
$("#cerrar_btn1").click(function(){

    $("#puzzle1").hide();
    $("#help").show();
    $("#puzzle1_cont").hide();
    $("#puzzle1_inicio").show();


    $("#mapa").css("-webkit-filter", "blur(0px)");
});

    //COGER PISTAS PUZLE 1
$("#pista1_btn").click(function(){


    switch(puzzle1_pt){
        case 0:
            $("#puzzle1_pt").show();

            $("#puzzle1_cont").css("-webkit-filter", "blur(10px)");
            $("#cerrar_btn1").css("-webkit-filter", "blur(10px)");

            $("#puzzle1_p1").css("background-color", "chocolate");
            $("#puzzle1_p1").css("cursor", "pointer");

            $("#puzzle1_pt_txt").html('Esta es la PRIMERA pista del puzzle 1');

            puzzle1_pt++;
            puntos--;
        break;

        case 1:
            $("#puzzle1_pt").show();

            $("#puzzle1_cont").css("-webkit-filter", "blur(10px)");
            $("#cerrar_btn1").css("-webkit-filter", "blur(10px)");

            $("#puzzle1_p2").css("background-color", "chocolate");
            $("#puzzle1_p2").css("cursor", "pointer");

            $("#puzzle1_pt_txt").html('Esta es la SEGUNDA pista del puzzle 1');

            puzzle1_pt++;
            puntos--;
        break;

        case 2:
            $("#puzzle1_pt").show();

            $("#puzzle1_cont").css("-webkit-filter", "blur(10px)");
            $("#cerrar_btn1").css("-webkit-filter", "blur(10px)");

            $("#pista1_btn").css("background-color", "grey");
            $("#pista1_btn").css("cursor", "default");

            $("#puzzle1_p3").css("background-color", "chocolate");
            $("#puzzle1_p3").css("cursor", "pointer");

            $("#puzzle1_pt_txt").html('Esta es la TERCERA pista del puzzle 1');

            puzzle1_pt++;
            puntos--;
        break;

    }


});

    //VOLVER A ABRIR LAS PISTAS COGIDAS DEL PUZZLE 1
$("#puzzle1_p1").click(function(){

    if(puzzle1_pt > 0){

        $("#puzzle1_pt").show();

        $("#puzzle1_cont").css("-webkit-filter", "blur(10px)");
        $("#cerrar_btn1").css("-webkit-filter", "blur(10px)");

        $("#puzzle1_pt_txt").html('Esta es la PRIMERA pista del puzzle 1');

    }

});


$("#puzzle1_p2").click(function(){

    if(puzzle1_pt > 1){

        $("#puzzle1_pt").show();

        $("#puzzle1_cont").css("-webkit-filter", "blur(10px)");
        $("#cerrar_btn1").css("-webkit-filter", "blur(10px)");

        $("#puzzle1_pt_txt").html('Esta es la SEGUNDA pista del puzzle 1');

    }

});

$("#puzzle1_p3").click(function(){

    if(puzzle1_pt > 2){

        $("#puzzle1_pt").show();

        $("#puzzle1_cont").css("-webkit-filter", "blur(10px)");
        $("#cerrar_btn1").css("-webkit-filter", "blur(10px)");

        $("#puzzle1_pt_txt").html('Esta es la TERCERA pista del puzzle 1');

    }

});



    //CERRAR PISTAS PUZZLE 1
 $("#cerrar_pista_p1").click(function(){

    $("#puzzle1_pt").hide();

    $("#puzzle1_cont").css("-webkit-filter", "blur(0px)");
    $("#cerrar_btn1").css("-webkit-filter", "blur(0px)");
});


    //COMPROBAR PUZZLE 1 PROVISIONAL (SIEMPRE ACIERTA) --> ACTIVAR CUANDO CORRESPONDA
$("#puzzle1_btn2").click(function(){

    $("#puzzle1_acierto").show();

    $("#puzzle1_cont").css("-webkit-filter", "blur(10px)");
    $("#cerrar_btn1").css("-webkit-filter", "blur(10px)");
});

/*
//COMPROBAR PUZZLE 1 PROVISIONAL (SIEMPRE FALLA) --> ACTIVAR CUANDO CORRESPONDA
$("#puzzle1_btn2").click(function(){

    $("#puzzle1_error").show();


    $("#puzzle1_cont").css("-webkit-filter", "blur(10px)");
    $("#cerrar_btn1").css("-webkit-filter", "blur(10px)");
});
*/

    //ACERTAR PUZZLE 1
$("#puzzle1_btn3").click(function(){

    $("#puzzle1").hide();
    $("#help").show();

    $("#pirata_closed").show();
    $("#narco_closed").hide();
    $("#narco_lock").hide();
    
    $("#mapa").css("-webkit-filter", "blur(0px)");
    $("#puzzle1_btn").css("animation-name", "none");
    $("#puzzle2_btn").css("animation-name", "mundos");
});

//FALLAR PUZZLE 1
$("#puzzle1_btn4").click(function(){

    $("#puzzle1_error").hide();
    
    $("#puzzle1_cont").css("-webkit-filter", "blur(0px)");
    $("#cerrar_btn1").css("-webkit-filter", "blur(0px)");
});



//PUZZLE 2
$("#puzzle2_btn").click(function(){

    $("#puzzle2").show();
    $("#help").hide();

    $("#mapa").css("-webkit-filter", "blur(10px)");
});


    //COMENZAR PUZZLE 2

    $("#puzzle2_btn1").click(function(){

        $("#puzzle2_cont").show();
        $("#puzzle2_inicio").hide();
        
        
    });
    
        //CERRAR PUZZLE 2
    $("#cerrar_btn2").click(function(){
    
        $("#puzzle2").hide();
        $("#puzzle2_cont").hide();
        $("#puzzle2_inicio").show();
        $("#help").show();
    
    
        $("#mapa").css("-webkit-filter", "blur(0px)");
    });


    
    //COGER PISTAS PUZLE 2
$("#pista2_btn").click(function(){


    switch(puzzle2_pt){
        case 0:
            $("#puzzle2_pt").show();

            $("#puzzle2_cont").css("-webkit-filter", "blur(10px)");
            $("#cerrar_btn2").css("-webkit-filter", "blur(10px)");

            $("#puzzle2_p1").css("background-color", "chocolate");
            $("#puzzle2_p1").css("cursor", "pointer");

            $("#puzzle2_pt_txt").html('Esta es la PRIMERA pista del puzzle 2');

            puzzle2_pt++;
            puntos--;
        break;

        case 1:
            $("#puzzle2_pt").show();

            $("#puzzle2_cont").css("-webkit-filter", "blur(10px)");
            $("#cerrar_btn2").css("-webkit-filter", "blur(10px)");

            $("#puzzle2_p2").css("background-color", "chocolate");
            $("#puzzle2_p2").css("cursor", "pointer");

            $("#puzzle2_pt_txt").html('Esta es la SEGUNDA pista del puzzle 2');

            puzzle2_pt++;
            puntos--;
        break;

        case 2:
            $("#puzzle2_pt").show();

            $("#puzzle2_cont").css("-webkit-filter", "blur(10px)");
            $("#cerrar_btn2").css("-webkit-filter", "blur(10px)");

            $("#pista2_btn").css("background-color", "grey");
            $("#pista2_btn").css("cursor", "default");

            $("#puzzle2_p3").css("background-color", "chocolate");
            $("#puzzle2_p3").css("cursor", "pointer");

            $("#puzzle2_pt_txt").html('Esta es la TERCERA pista del puzzle 2');

            puzzle2_pt++;
            puntos--;
        break;

    }


});

    //VOLVER A ABRIR LAS PISTAS COGIDAS DEL PUZZLE 2
$("#puzzle2_p1").click(function(){

    if(puzzle2_pt > 0){

        $("#puzzle2_pt").show();

        $("#puzzle2_cont").css("-webkit-filter", "blur(10px)");
        $("#cerrar_btn2").css("-webkit-filter", "blur(10px)");

        $("#puzzle2_pt_txt").html('Esta es la PRIMERA pista del puzzle 2');

    }

});


$("#puzzle2_p2").click(function(){

    if(puzzle2_pt > 1){

        $("#puzzle2_pt").show();

        $("#puzzle2_cont").css("-webkit-filter", "blur(10px)");
        $("#cerrar_btn2").css("-webkit-filter", "blur(10px)");

        $("#puzzle2_pt_txt").html('Esta es la SEGUNDA pista del puzzle 2');

    }

});

$("#puzzle2_p3").click(function(){

    if(puzzle2_pt > 2){

        $("#puzzle2_pt").show();

        $("#puzzle2_cont").css("-webkit-filter", "blur(10px)");
        $("#cerrar_btn2").css("-webkit-filter", "blur(10px)");

        $("#puzzle2_pt_txt").html('Esta es la TERCERA pista del puzzle 1');

    }

});



    //CERRAR PISTAS PUZZLE 2
 $("#cerrar_pista_p2").click(function(){

    $("#puzzle2_pt").hide();

    $("#puzzle2_cont").css("-webkit-filter", "blur(0px)");
    $("#cerrar_btn2").css("-webkit-filter", "blur(0px)");
});


    
    
        //COMPROBAR PUZZLE 2 PROVISIONAL (SIEMPRE ACIERTA) --> ACTIVAR CUANDO CORRESPONDA
    $("#puzzle2_btn2").click(function(){
    
        $("#puzzle2_acierto").show();
    
        $("#puzzle2_cont").css("-webkit-filter", "blur(10px)");
        $("#cerrar_btn2").css("-webkit-filter", "blur(10px)");
    });
    
    /*
    //COMPROBAR PUZZLE 2 PROVISIONAL (SIEMPRE FALLA) --> ACTIVAR CUANDO CORRESPONDA
    $("#puzzle2_btn2").click(function(){
    
        $("#puzzle2_error").show();
    
    
        $("#puzzle2_cont").css("-webkit-filter", "blur(10px)");
        $("#cerrar_btn2").css("-webkit-filter", "blur(10px)");
    });
    */
    
        //ACERTAR PUZZLE 2
    $("#puzzle2_btn3").click(function(){
    
        $("#puzzle2").hide();
        $("#help").show();
    
        $("#narco_closed").show();
        $("#bosque_closed").hide();
        $("#bosque_lock").hide();
        $("#narco_closed").css("-webkit-filter", "grayscale(1)");

        $("#puzzle2_btn").css("animation-name", "none");
        $("#puzzle3_btn").css("animation-name", "mundos");
        
        
        $("#mapa").css("-webkit-filter", "blur(0px)");
    });
    
    //FALLAR PUZZLE 2
    $("#puzzle2_btn4").click(function(){
    
        $("#puzzle2_error").hide();
        
        $("#puzzle2_cont").css("-webkit-filter", "blur(0px)");
        $("#cerrar_btn2").css("-webkit-filter", "blur(0px)");
    });




//BOTON PUZZLE 3
$("#puzzle3_btn").click(function(){

    $("#puzzle3").show();
    $("#help").hide();

    $("#mapa").css("-webkit-filter", "blur(10px)");
});

    //COMENZAR PUZZLE 3

$("#puzzle3_btn1").click(function(){

    $("#puzzle3_cont").show();
    $("#puzzle3_inicio").hide();
    
    
});

    //CERRAR PUZZLE 3
$("#cerrar_btn3").click(function(){

    $("#puzzle3").hide();
    $("#help").show();
    $("#puzzle3_cont").hide();
    $("#puzzle3_inicio").show();


    $("#mapa").css("-webkit-filter", "blur(0px)");
});


    //COGER PISTAS PUZLE 3
 $("#pista3_btn").click(function(){


    switch(puzzle3_pt){
        case 0:
            $("#puzzle3_pt").show();

            $("#puzzle3_cont").css("-webkit-filter", "blur(10px)");
            $("#cerrar_btn3").css("-webkit-filter", "blur(10px)");

            $("#puzzle3_p1").css("background-color", "chocolate");
            $("#puzzle3_p1").css("cursor", "pointer");

            $("#puzzle3_pt_txt").html('Esta es la PRIMERA pista del puzzle 3');

            puzzle3_pt++;
            puntos--;
        break;

        case 1:
            $("#puzzle3_pt").show();

            $("#puzzle3_cont").css("-webkit-filter", "blur(10px)");
            $("#cerrar_btn3").css("-webkit-filter", "blur(10px)");

            $("#puzzle3_p2").css("background-color", "chocolate");
            $("#puzzle3_p2").css("cursor", "pointer");

            $("#puzzle3_pt_txt").html('Esta es la SEGUNDA pista del puzzle 3');

            puzzle3_pt++;
            puntos--;
        break;

        case 2:
            $("#puzzle3_pt").show();

            $("#puzzle3_cont").css("-webkit-filter", "blur(10px)");
            $("#cerrar_btn3").css("-webkit-filter", "blur(10px)");

            $("#pista3_btn").css("background-color", "grey");
            $("#pista3_btn").css("cursor", "default");

            $("#puzzle3_p3").css("background-color", "chocolate");
            $("#puzzle3_p3").css("cursor", "pointer");

            $("#puzzle3_pt_txt").html('Esta es la TERCERA pista del puzzle 3');

            puzzle3_pt++;
            puntos--;
        break;

    }


});

    //VOLVER A ABRIR LAS PISTAS COGIDAS DEL PUZZLE 3
$("#puzzle3_p1").click(function(){

    if(puzzle3_pt > 0){

        $("#puzzle3_pt").show();

        $("#puzzle3_cont").css("-webkit-filter", "blur(10px)");
        $("#cerrar_btn3").css("-webkit-filter", "blur(10px)");

        $("#puzzle3_pt_txt").html('Esta es la PRIMERA pista del puzzle 3');

    }

});


$("#puzzle3_p2").click(function(){

    if(puzzle3_pt > 1){

        $("#puzzle3_pt").show();

        $("#puzzle3_cont").css("-webkit-filter", "blur(10px)");
        $("#cerrar_btn3").css("-webkit-filter", "blur(10px)");

        $("#puzzle3_pt_txt").html('Esta es la SEGUNDA pista del puzzle 3');

    }

});

$("#puzzle3_p3").click(function(){

    if(puzzle3_pt > 2){

        $("#puzzle3_pt").show();

        $("#puzzle3_cont").css("-webkit-filter", "blur(10px)");
        $("#cerrar_btn3").css("-webkit-filter", "blur(10px)");

        $("#puzzle3_pt_txt").html('Esta es la TERCERA pista del puzzle 3');

    }

});



    //CERRAR PISTAS PUZZLE 3
 $("#cerrar_pista_p3").click(function(){

    $("#puzzle3_pt").hide();

    $("#puzzle3_cont").css("-webkit-filter", "blur(0px)");
    $("#cerrar_btn3").css("-webkit-filter", "blur(0px)");
});



    //COMPROBAR PUZZLE 3 PROVISIONAL (SIEMPRE ACIERTA) --> ACTIVAR CUANDO CORRESPONDA
$("#puzzle3_btn2").click(function(){

    $("#puzzle3_acierto").show();

    $("#puzzle3_cont").css("-webkit-filter", "blur(10px)");
    $("#cerrar_btn3").css("-webkit-filter", "blur(10px)");
});

/*
//COMPROBAR PUZZLE 3 PROVISIONAL (SIEMPRE FALLA) --> ACTIVAR CUANDO CORRESPONDA
$("#puzzle3_btn2").click(function(){

    $("#puzzle3_error").show();


    $("#puzzle3_cont").css("-webkit-filter", "blur(10px)");
    $("#cerrar_btn3").css("-webkit-filter", "blur(10px)");
});
*/

    //ACERTAR PUZZLE 3
$("#puzzle3_btn3").click(function(){

    $("#puzzle3").hide();
    $("#help").show();

    $("#bosque_closed").show();
    $("#bosque_closed").css("-webkit-filter", "grayscale(1)");
    $("#alien_closed").hide();
    $("#alien_lock").hide();

    $("#puzzle3_btn").css("animation-name", "none");
    $("#puzzle4_btn").css("animation-name", "mundos");
    
    
    $("#mapa").css("-webkit-filter", "blur(0px)");
});

//FALLAR PUZZLE 3
$("#puzzle3_btn4").click(function(){

    $("#puzzle3_error").hide();
    
    $("#puzzle3_cont").css("-webkit-filter", "blur(0px)");
    $("#cerrar_btn3").css("-webkit-filter", "blur(0px)");
});





//BOTON PUZZLE 4
$("#puzzle4_btn").click(function(){

    $("#puzzle4").show();
    $("#help").hide();

    $("#mapa").css("-webkit-filter", "blur(10px)");
});


    //COMENZAR PUZZLE 4

    $("#puzzle4_btn1").click(function(){

        $("#puzzle4_cont").show();
        $("#puzzle4_inicio").hide();
        
        
    });
    
        //CERRAR PUZZLE 4
    $("#cerrar_btn4").click(function(){
    
        $("#puzzle4").hide();
        $("#help").show();
        $("#puzzle4_cont").hide();
        $("#puzzle4_inicio").show();
    
    
        $("#mapa").css("-webkit-filter", "blur(0px)");
    });


    
    //COGER PISTAS PUZLE 4
$("#pista4_btn").click(function(){


    switch(puzzle4_pt){
        case 0:
            $("#puzzle4_pt").show();

            $("#puzzle4_cont").css("-webkit-filter", "blur(10px)");
            $("#cerrar_btn4").css("-webkit-filter", "blur(10px)");

            $("#puzzle4_p1").css("background-color", "chocolate");
            $("#puzzle4_p1").css("cursor", "pointer");

            $("#puzzle4_pt_txt").html('Esta es la PRIMERA pista del puzzle 4');

            puzzle4_pt++;
            puntos--;
        break;

        case 1:
            $("#puzzle4_pt").show();

            $("#puzzle4_cont").css("-webkit-filter", "blur(10px)");
            $("#cerrar_btn4").css("-webkit-filter", "blur(10px)");

            $("#puzzle4_p2").css("background-color", "chocolate");
            $("#puzzle4_p2").css("cursor", "pointer");

            $("#puzzle4_pt_txt").html('Esta es la SEGUNDA pista del puzzle 4');

            puzzle4_pt++;
            puntos--;
        break;

        case 2:
            $("#puzzle4_pt").show();

            $("#puzzle4_cont").css("-webkit-filter", "blur(10px)");
            $("#cerrar_btn4").css("-webkit-filter", "blur(10px)");

            $("#pista4_btn").css("background-color", "grey");
            $("#pista4_btn").css("cursor", "default");

            $("#puzzle4_p3").css("background-color", "chocolate");
            $("#puzzle4_p3").css("cursor", "pointer");

            $("#puzzle4_pt_txt").html('Esta es la TERCERA pista del puzzle 4');

            puzzle4_pt++;
            puntos--;
        break;

    }


});

    //VOLVER A ABRIR LAS PISTAS COGIDAS DEL PUZZLE 4
$("#puzzle4_p1").click(function(){

    if(puzzle4_pt > 0){

        $("#puzzle4_pt").show();

        $("#puzzle4_cont").css("-webkit-filter", "blur(10px)");
        $("#cerrar_btn4").css("-webkit-filter", "blur(10px)");

        $("#puzzle4_pt_txt").html('Esta es la PRIMERA pista del puzzle 4');

    }

});


$("#puzzle4_p2").click(function(){

    if(puzzle4_pt > 1){

        $("#puzzle4_pt").show();

        $("#puzzle4_cont").css("-webkit-filter", "blur(10px)");
        $("#cerrar_btn4").css("-webkit-filter", "blur(10px)");

        $("#puzzle4_pt_txt").html('Esta es la SEGUNDA pista del puzzle 4');

    }

});

$("#puzzle4_p3").click(function(){

    if(puzzle4_pt > 2){

        $("#puzzle4_pt").show();

        $("#puzzle4_cont").css("-webkit-filter", "blur(10px)");
        $("#cerrar_btn4").css("-webkit-filter", "blur(10px)");

        $("#puzzle4_pt_txt").html('Esta es la TERCERA pista del puzzle 4');

    }

});



    //CERRAR PISTAS PUZZLE 4
 $("#cerrar_pista_p4").click(function(){

    $("#puzzle4_pt").hide();

    $("#puzzle4_cont").css("-webkit-filter", "blur(0px)");
    $("#cerrar_btn4").css("-webkit-filter", "blur(0px)");
});
    
    
        //COMPROBAR PUZZLE 4 PROVISIONAL (SIEMPRE ACIERTA) --> ACTIVAR CUANDO CORRESPONDA
    $("#puzzle4_btn2").click(function(){
    
        $("#puzzle4_acierto").show();
    
        $("#puzzle4_cont").css("-webkit-filter", "blur(10px)");
        $("#cerrar_btn4").css("-webkit-filter", "blur(10px)");
    });
    
    /*
    //COMPROBAR PUZZLE 4 PROVISIONAL (SIEMPRE FALLA) --> ACTIVAR CUANDO CORRESPONDA
    $("#puzzle4_btn2").click(function(){
    
        $("#puzzle4_error").show();
    
    
        $("#puzzle4_cont").css("-webkit-filter", "blur(10px)");
        $("#cerrar_btn4").css("-webkit-filter", "blur(10px)");
    });
    */
    
        //ACERTAR PUZZLE 4
    $("#puzzle4_btn3").click(function(){
    
        $("#puzzle4").hide();
        $("#help").show();
    
        $("#alien_closed").show();
        $("#alien_closed").css("-webkit-filter", "grayscale(1)");
        $("#western_closed").hide();
        $("#western_lock").hide();

        $("#puzzle4_btn").css("animation-name", "none");
        $("#puzzle5_btn").css("animation-name", "mundos");
        
        
        $("#mapa").css("-webkit-filter", "blur(0px)");
    });
    
    //FALLAR PUZZLE 4
    $("#puzzle4_btn4").click(function(){
    
        $("#puzzle4_error").hide();
        
        $("#puzzle4_cont").css("-webkit-filter", "blur(0px)");
        $("#cerrar_btn4").css("-webkit-filter", "blur(0px)");
    });
    


//BOTON PUZZLE 5
$("#puzzle5_btn").click(function(){

    $("#puzzle5").show();
    $("#help").hide();

    $("#mapa").css("-webkit-filter", "blur(10px)");
});


    //COMENZAR PUZZLE 5

    $("#puzzle5_btn1").click(function(){

        $("#puzzle5_cont").show();
        $("#puzzle5_inicio").hide();
        
        
    });
    
        //CERRAR PUZZLE 5
    $("#cerrar_btn5").click(function(){
    
        $("#puzzle5").hide();
        $("#help").show();
        $("#puzzle5_cont").hide();
        $("#puzzle5_inicio").show();
    
    
        $("#mapa").css("-webkit-filter", "blur(0px)");
    });


    
    //COGER PISTAS PUZLE 5
$("#pista5_btn").click(function(){


    switch(puzzle5_pt){
        case 0:
            $("#puzzle5_pt").show();

            $("#puzzle5_cont").css("-webkit-filter", "blur(10px)");
            $("#cerrar_btn5").css("-webkit-filter", "blur(10px)");

            $("#puzzle5_p1").css("background-color", "chocolate");
            $("#puzzle5_p1").css("cursor", "pointer");

            $("#puzzle5_pt_txt").html('Esta es la PRIMERA pista del puzzle 5');

            puzzle5_pt++;
            puntos--;
        break;

        case 1:
            $("#puzzle5_pt").show();

            $("#puzzle5_cont").css("-webkit-filter", "blur(10px)");
            $("#cerrar_btn5").css("-webkit-filter", "blur(10px)");

            $("#puzzle5_p2").css("background-color", "chocolate");
            $("#puzzle5_p2").css("cursor", "pointer");

            $("#puzzle5_pt_txt").html('Esta es la SEGUNDA pista del puzzle 5');

            puzzle5_pt++;
            puntos--;
        break;

        case 2:
            $("#puzzle5_pt").show();

            $("#puzzle5_cont").css("-webkit-filter", "blur(10px)");
            $("#cerrar_btn5").css("-webkit-filter", "blur(10px)");

            $("#pista5_btn").css("background-color", "grey");
            $("#pista5_btn").css("cursor", "default");

            $("#puzzle5_p3").css("background-color", "chocolate");
            $("#puzzle5_p3").css("cursor", "pointer");

            $("#puzzle5_pt_txt").html('Esta es la TERCERA pista del puzzle 5');

            puzzle5_pt++;
            puntos--;
        break;

    }


});

    //VOLVER A ABRIR LAS PISTAS COGIDAS DEL PUZZLE 5
$("#puzzle5_p1").click(function(){

    if(puzzle5_pt > 0){

        $("#puzzle5_pt").show();

        $("#puzzle5_cont").css("-webkit-filter", "blur(10px)");
        $("#cerrar_btn5").css("-webkit-filter", "blur(10px)");

        $("#puzzle5_pt_txt").html('Esta es la PRIMERA pista del puzzle 5');

    }

});


$("#puzzle5_p2").click(function(){

    if(puzzle5_pt > 1){

        $("#puzzle5_pt").show();

        $("#puzzle5_cont").css("-webkit-filter", "blur(10px)");
        $("#cerrar_btn5").css("-webkit-filter", "blur(10px)");

        $("#puzzle5_pt_txt").html('Esta es la SEGUNDA pista del puzzle 5');

    }

});

$("#puzzle5_p3").click(function(){

    if(puzzle5_pt > 2){

        $("#puzzle5_pt").show();

        $("#puzzle5_cont").css("-webkit-filter", "blur(10px)");
        $("#cerrar_btn5").css("-webkit-filter", "blur(10px)");

        $("#puzzle5_pt_txt").html('Esta es la TERCERA pista del puzzle 5');

    }

});



    //CERRAR PISTAS PUZZLE 5
 $("#cerrar_pista_p5").click(function(){

    $("#puzzle5_pt").hide();

    $("#puzzle5_cont").css("-webkit-filter", "blur(0px)");
    $("#cerrar_btn5").css("-webkit-filter", "blur(0px)");
});





    
    
        //COMPROBAR PUZZLE 5 PROVISIONAL (SIEMPRE ACIERTA) --> ACTIVAR CUANDO CORRESPONDA
    $("#puzzle5_btn2").click(function(){
    
        $("#puzzle5_acierto").show();
    
        $("#puzzle5_cont").css("-webkit-filter", "blur(10px)");
        $("#cerrar_btn5").css("-webkit-filter", "blur(10px)");
    });
    
    /*
    //COMPROBAR PUZZLE 5 PROVISIONAL (SIEMPRE FALLA) --> ACTIVAR CUANDO CORRESPONDA
    $("#puzzle5_btn2").click(function(){
    
        $("#puzzle5_error").show();
    
    
        $("#puzzle5_cont").css("-webkit-filter", "blur(10px)");
        $("#cerrar_btn5").css("-webkit-filter", "blur(10px)");
    });
    */
    
        //ACERTAR PUZZLE 5
    $("#puzzle5_btn3").click(function(){
    
        $("#puzzle5").hide();
        $("#help").show();
    
        $("#western_closed").show();
        $("#western_closed").css("-webkit-filter", "grayscale(1)");
        $("#zombie_closed").hide();
        $("#zombie_lock").hide();

        $("#puzzle5_btn").css("animation-name", "none");
        $("#puzzle6_btn").css("animation-name", "mundos");
        
        
        $("#mapa").css("-webkit-filter", "blur(0px)");
    });
    
    //FALLAR PUZZLE 5
    $("#puzzle5_btn4").click(function(){
    
        $("#puzzle5_error").hide();
        
        $("#puzzle5_cont").css("-webkit-filter", "blur(0px)");
        $("#cerrar_btn5").css("-webkit-filter", "blur(0px)");
    });
    

//BOTON PUZZLE 6
$("#puzzle6_btn").click(function(){

    $("#puzzle6").show();
    $("#help").hide();

    $("#mapa").css("-webkit-filter", "blur(10px)");
});



    //COMENZAR PUZZLE 6

    $("#puzzle6_btn1").click(function(){

        $("#puzzle6_cont").show();
        $("#puzzle6_inicio").hide();
        
        
    });
    
        //CERRAR PUZZLE 6
    $("#cerrar_btn6").click(function(){
    
        $("#puzzle6").hide();
        $("#help").show();
        $("#puzzle6_cont").hide();
        $("#puzzle6_inicio").show();
    
    
        $("#mapa").css("-webkit-filter", "blur(0px)");
    });


    
    //COGER PISTAS PUZLE 6
$("#pista6_btn").click(function(){


    switch(puzzle6_pt){
        case 0:
            $("#puzzle6_pt").show();

            $("#puzzle6_cont").css("-webkit-filter", "blur(10px)");
            $("#cerrar_btn6").css("-webkit-filter", "blur(10px)");

            $("#puzzle6_p1").css("background-color", "chocolate");
            $("#puzzle6_p1").css("cursor", "pointer");

            $("#puzzle6_pt_txt").html('Esta es la PRIMERA pista del puzzle 6');

            puzzle6_pt++;
            puntos--;
        break;

        case 1:
            $("#puzzle6_pt").show();

            $("#puzzle6_cont").css("-webkit-filter", "blur(10px)");
            $("#cerrar_btn6").css("-webkit-filter", "blur(10px)");

            $("#puzzle6_p2").css("background-color", "chocolate");
            $("#puzzle6_p2").css("cursor", "pointer");

            $("#puzzle6_pt_txt").html('Esta es la SEGUNDA pista del puzzle 6');

            puzzle6_pt++;
            puntos--;
        break;

        case 2:
            $("#puzzle6_pt").show();

            $("#puzzle6_cont").css("-webkit-filter", "blur(10px)");
            $("#cerrar_btn6").css("-webkit-filter", "blur(10px)");

            $("#pista6_btn").css("background-color", "grey");
            $("#pista6_btn").css("cursor", "default");

            $("#puzzle6_p3").css("background-color", "chocolate");
            $("#puzzle6_p3").css("cursor", "pointer");

            $("#puzzle6_pt_txt").html('Esta es la TERCERA pista del puzzle 6');

            puzzle6_pt++;
            puntos--;
        break;

    }


});

    //VOLVER A ABRIR LAS PISTAS COGIDAS DEL PUZZLE 6
$("#puzzle6_p1").click(function(){

    if(puzzle6_pt > 0){

        $("#puzzle6_pt").show();

        $("#puzzle6_cont").css("-webkit-filter", "blur(10px)");
        $("#cerrar_btn6").css("-webkit-filter", "blur(10px)");

        $("#puzzle6_pt_txt").html('Esta es la PRIMERA pista del puzzle 6');

    }

});


$("#puzzle6_p2").click(function(){

    if(puzzle6_pt > 1){

        $("#puzzle6_pt").show();

        $("#puzzle6_cont").css("-webkit-filter", "blur(10px)");
        $("#cerrar_btn6").css("-webkit-filter", "blur(10px)");

        $("#puzzle6_pt_txt").html('Esta es la SEGUNDA pista del puzzle 6');

    }

});

$("#puzzle6_p3").click(function(){

    if(puzzle6_pt > 2){

        $("#puzzle6_pt").show();

        $("#puzzle6_cont").css("-webkit-filter", "blur(10px)");
        $("#cerrar_btn6").css("-webkit-filter", "blur(10px)");

        $("#puzzle6_pt_txt").html('Esta es la TERCERA pista del puzzle 6');

    }

});



    //CERRAR PISTAS PUZZLE 6
 $("#cerrar_pista_p6").click(function(){

    $("#puzzle6_pt").hide();

    $("#puzzle6_cont").css("-webkit-filter", "blur(0px)");
    $("#cerrar_btn6").css("-webkit-filter", "blur(0px)");
});




    
    
        //COMPROBAR PUZZLE 6 PROVISIONAL (SIEMPRE ACIERTA) --> ACTIVAR CUANDO CORRESPONDA
    $("#puzzle6_btn2").click(function(){
    
        $("#puzzle6_acierto").show();
    
        $("#puzzle6_cont").css("-webkit-filter", "blur(10px)");
        $("#cerrar_btn6").css("-webkit-filter", "blur(10px)");
    });
    
    /*
    //COMPROBAR PUZZLE 6 PROVISIONAL (SIEMPRE FALLA) --> ACTIVAR CUANDO CORRESPONDA
    $("#puzzle6_btn2").click(function(){
    
        $("#puzzle6_error").show();
    
    
        $("#puzzle6_cont").css("-webkit-filter", "blur(10px)");
        $("#cerrar_btn6").css("-webkit-filter", "blur(10px)");
    });
    */
    
        //ACERTAR PUZZLE 6
    $("#puzzle6_btn3").click(function(){
    
        $("#puzzle6").hide();
        $("#help").show();
        $("#final").show();
    
        $("#zombie_closed").show();
        $("#zombie_closed").css("-webkit-filter", "grayscale(1)");

        $("#puzzle6_btn").css("animation-name", "none");
        
        
        $("#mapa").css("-webkit-filter", "blur(0px)");

        if( puntos < 6 ){

            $("#final_txt").html('Esta es el final 3, es decir, la puntuación obtenida está entre 0 y 5');
            $("#final_img").attr("src", "img/final3_prov.png");
        
        } else if ( puntos < 13 ){

            $("#final_txt").html('Esta es el final 2, es decir, la puntuación obtenida está entre 6 y 12');
            $("#final_img").attr("src", "img/final2_prov.jpg");
        } else {

            $("#final_txt").html('Esta es el final 1, es decir, la puntuación obtenida está entre 13 y 18');
            $("#final_img").attr("src", "img/final1_prov.png");
        } 
        
    });
    
    //FALLAR PUZZLE 6
    $("#puzzle6_btn4").click(function(){
    
        $("#puzzle6_error").hide();
        
        $("#puzzle6_cont").css("-webkit-filter", "blur(0px)");
        $("#cerrar_btn6").css("-webkit-filter", "blur(0px)");
    });


//FINALES
  

//VOLVER A JUGAR 
$("#final_btn").click(function(){
    
    location.reload();
});








