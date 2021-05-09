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

let musica_puzzle1 = document.getElementById("musica_puzzle1");
musica_puzzle1.loop = true;

let puzzle1_dado_sound = document.getElementById("puzzle1_dado_sound");

let musica_puzzle5 = document.getElementById("musica_puzzle5");
musica_puzzle5.loop = true;

let puzzle6_piezas_sound = document.getElementById("puzzle6_piezas_sound");

let musica_puzzle6 = document.getElementById("musica_puzzle6");
musica_puzzle6.loop = true;




    //INICIALIZACIÓN DEL PUZZLE 1

$("#puzzle1_dado_btn0").show();
$("#puzzle1_dado_btn1").hide();
$("#puzzle1_dado_btn2").hide();
$("#puzzle1_dado_btn3").hide();
$("#puzzle1_dado_btn4").hide();
$("#puzzle1_dado_btn5").hide();
$("#puzzle1_dado_btn6").hide();

let puzzle1_dado_btn0 = true;
let puzzle1_dado_btn1 = false;
let puzzle1_dado_btn2 = false;
let puzzle1_dado_btn3 = false;
let puzzle1_dado_btn4 = false;
let puzzle1_dado_btn5 = false;
let puzzle1_dado_btn6 = false;


    //INICIALIZACIÓN DEL PUZZLE 5

let vaca1 = false;
let vaca2 = false;
let vaca3 = false;
let botella1 = false;
let botella2 = false;
let botella3 = false;

let vaca1_b1 = false;
let vaca1_b2 = false;
let vaca1_y = "45%";
let vaca1_izq_x = "20%";
let vaca1_der_x = "68%";
let vaca1_izq = true;
let vaca1_der = false;

let vaca2_b1 = false;
let vaca2_b2 = false;
let vaca2_y = "52%";
let vaca2_izq_x = "1%";
let vaca2_der_x = "85%";
let vaca2_izq = true;
let vaca2_der = false;

let vaca3_b1 = false;
let vaca3_b2 = false;
let vaca3_y = "66%";
let vaca3_izq_x = "15%";
let vaca3_der_x = "73%";
let vaca3_izq = true;
let vaca3_der = false;


let botella_y = "87%";

let botella1_b1 = false;
let botella1_b2 = false;
let botella1_izq_x = "18%";
let botella1_der_x = "94%";
let botella1_izq = true;
let botella1_der = false;

let botella2_b1 = false;
let botella2_b2 = false;
let botella2_izq_x = "10%";
let botella2_der_x = "86%";
let botella2_izq = true;
let botella2_der = false;

let botella3_b1 = false;
let botella3_b2 = false;
let botella3_izq_x = "2%";
let botella3_der_x = "78%";
let botella3_izq = true;
let botella3_der = false;


let balsa_izq = true;
let balsa_der = false;

let balsa_b1 = false;
let balsa_b2 = false;


let vaca_b_y = "58%";

let vaca_b1_izq_x = "27%";
let vaca_b1_der_x = "48%";
let vaca_b2_izq_x = "40%";
let vaca_b2_der_x = "61%";


let botella_b_y = "67%";

let botella_b1_izq_x = "32%";
let botella_b1_der_x = "53%";
let botella_b2_izq_x = "42%";
let botella_b2_der_x = "63%";

let n_vacas_izq = 3;
let n_vacas_der = 0;
let n_botellas_izq = 3;
let n_botellas_der = 0;


    //INICIALIZACÓN DEL PUZZLE 6
let puzzle6_pieza1 = false;
let puzzle6_pieza2 = false;
let puzzle6_pieza3 = false;
let puzzle6_pieza4 = false;
let puzzle6_pieza5 = false;
let puzzle6_pieza6 = false;
let puzzle6_pieza7 = false;
let puzzle6_pieza8 = false;
let puzzle6_pieza9 = false;

let pieza1_m1 = false;
let pieza1_m2 = false;
let pieza1_m3 = false;
let pieza1_m4 = false;
let pieza1_m5 = false;
let pieza1_m6 = false;
let pieza1_m7 = false;

let pieza2_m1 = false;
let pieza2_m2 = false;
let pieza2_m3 = false;
let pieza2_m4 = false;
let pieza2_m5 = false;
let pieza2_m6 = false;
let pieza2_m7 = false;

let pieza3_m1 = false;
let pieza3_m2 = false;
let pieza3_m3 = false;
let pieza3_m4 = false;
let pieza3_m5 = false;
let pieza3_m6 = false;
let pieza3_m7 = false;

let pieza4_m1 = false;
let pieza4_m2 = false;
let pieza4_m3 = false;
let pieza4_m4 = false;
let pieza4_m5 = false;
let pieza4_m6 = false;
let pieza4_m7 = false;

let pieza5_m1 = false;
let pieza5_m2 = false;
let pieza5_m3 = false;
let pieza5_m4 = false;
let pieza5_m5 = false;
let pieza5_m6 = false;
let pieza5_m7 = false;

let pieza6_m1 = false;
let pieza6_m2 = false;
let pieza6_m3 = false;
let pieza6_m4 = false;
let pieza6_m5 = false;
let pieza6_m6 = false;
let pieza6_m7 = false;

let pieza7_m1 = false;
let pieza7_m2 = false;
let pieza7_m3 = false;
let pieza7_m4 = false;
let pieza7_m5 = false;
let pieza7_m6 = false;
let pieza7_m7 = false;

let pieza8_m1 = false;
let pieza8_m2 = false;
let pieza8_m3 = false;
let pieza8_m4 = false;
let pieza8_m5 = false;
let pieza8_m6 = false;
let pieza8_m7 = false;

let pieza9_m1 = false;
let pieza9_m2 = false;
let pieza9_m3 = false;
let pieza9_m4 = false;
let pieza9_m5 = false;
let pieza9_m6 = false;
let pieza9_m7 = false;




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
    $("#fondo_negro_inicio").fadeOut(3000);

    $("#bucle_mapa_img").css("animation-name", "bucle_scale");
    

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

    $("#bucle_mapa_img").css("animation-name", "none");

    $("#mapa").css("-webkit-filter", "blur(10px)");
    musica_puzzle1.currentTime = 0
    musica_puzzle1.play();
    $('#musica_puzzle1').animate({volume: 1}, 0);
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

    $('#musica_puzzle1').animate({volume: 0}, 500);


    $("#mapa").css("-webkit-filter", "blur(0px)");

    $("#puzzle1_dado_btn0").show();
    $("#puzzle1_dado_btn1").hide();
    $("#puzzle1_dado_btn2").hide();
    $("#puzzle1_dado_btn3").hide();
    $("#puzzle1_dado_btn4").hide();
    $("#puzzle1_dado_btn5").hide();
    $("#puzzle1_dado_btn6").hide();


    puzzle1_dado_btn0 = true;
    puzzle1_dado_btn1 = false;
    puzzle1_dado_btn2 = false;
    puzzle1_dado_btn3 = false;
    puzzle1_dado_btn4 = false;
    puzzle1_dado_btn5 = false;
    puzzle1_dado_btn6 = false;
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

            $("#puzzle1_pt_txt").html('Las caras de los dados que hacen contacto suman 5 puntos, por tanto, cada una de las caras que hacen contacto entre sí deben tener un valor entre 1 y 4.');

            puzzle1_pt++;
            puntos--;
        break;

        case 1:
            $("#puzzle1_pt").show();

            $("#puzzle1_cont").css("-webkit-filter", "blur(10px)");
            $("#cerrar_btn1").css("-webkit-filter", "blur(10px)");

            $("#puzzle1_p2").css("background-color", "chocolate");
            $("#puzzle1_p2").css("cursor", "pointer");

            $("#puzzle1_pt_txt").html('Los puntos de la cara superior del dado inferior son limitados. En esa cara solo podría haber 2, 3 o 4 puntos.');

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

            $("#puzzle1_pt_txt").html('Imagina por un momento que la cara superior del dado inferior es un 4. Si es así, entonces la cara inferior del dado del medio debe ser 1, lo que haría que la cara superior de este segundo dado fuera un 6. Ahora has descartado una posibilidad, ya que esta no puede ser la respuesta.');

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

        $("#puzzle1_pt_txt").html('Las caras de los dados que hacen contacto suman 5 puntos, por tanto, cada una de las caras que hacen contacto entre sí deben tener un valor entre 1 y 4.');

    }

});


$("#puzzle1_p2").click(function(){

    if(puzzle1_pt > 1){

        $("#puzzle1_pt").show();

        $("#puzzle1_cont").css("-webkit-filter", "blur(10px)");
        $("#cerrar_btn1").css("-webkit-filter", "blur(10px)");

        $("#puzzle1_pt_txt").html('Los puntos de la cara superior del dado inferior son limitados. En esa cara solo podría haber 2, 3 o 4 puntos.');

    }

});

$("#puzzle1_p3").click(function(){

    if(puzzle1_pt > 2){

        $("#puzzle1_pt").show();

        $("#puzzle1_cont").css("-webkit-filter", "blur(10px)");
        $("#cerrar_btn1").css("-webkit-filter", "blur(10px)");

        $("#puzzle1_pt_txt").html('Imagina por un momento que la cara superior del dado inferior es un 4. Si es así, entonces la cara inferior del dado del medio debe ser 1, lo que haría que la cara superior de este segundo dado fuera un 6. Ahora has descartado una posibilidad, ya que esta no puede ser la respuesta.');

    }

});



    //CERRAR PISTAS PUZZLE 1
 $("#cerrar_pista_p1").click(function(){

    $("#puzzle1_pt").hide();

    $("#puzzle1_cont").css("-webkit-filter", "blur(0px)");
    $("#cerrar_btn1").css("-webkit-filter", "blur(0px)");
});




    //PUZZLE 1, PUZZLE DADOS PIRATAS

//CUANDO CLICO EL DADO, SE DESVISUALIZA UN BOTÓN Y APARECE EL SIGUIENTE
$("#puzzle1_dado_btn0").click(function(){

    $("#puzzle1_dado_btn1").show();
    $("#puzzle1_dado_btn0").hide();
    puzzle1_dado_btn0 = false;
    puzzle1_dado_btn1 = true;
    
    puzzle1_dado_sound.play();

});

$("#puzzle1_dado_btn1").click(function(){

    $("#puzzle1_dado_btn2").show();
    $("#puzzle1_dado_btn1").hide();
    puzzle1_dado_btn1 = false;
    puzzle1_dado_btn2 = true;
    puzzle1_dado_sound.play();

});


$("#puzzle1_dado_btn2").click(function(){

    $("#puzzle1_dado_btn3").show();
    $("#puzzle1_dado_btn2").hide();
    puzzle1_dado_btn2 = false;
    puzzle1_dado_btn3 = true;
    puzzle1_dado_sound.play();

});

$("#puzzle1_dado_btn3").click(function(){

    $("#puzzle1_dado_btn4").show();
    $("#puzzle1_dado_btn3").hide();
    puzzle1_dado_btn3 = false;
    puzzle1_dado_btn4 = true;
    puzzle1_dado_sound.play();

});

$("#puzzle1_dado_btn4").click(function(){

    $("#puzzle1_dado_btn5").show();
    $("#puzzle1_dado_btn4").hide();
    puzzle1_dado_btn4 = false;
    puzzle1_dado_btn5 = true;
    puzzle1_dado_sound.play();

});

$("#puzzle1_dado_btn5").click(function(){

    $("#puzzle1_dado_btn6").show();
    $("#puzzle1_dado_btn5").hide();
    puzzle1_dado_btn5 = false;
    puzzle1_dado_btn6 = true;
    puzzle1_dado_sound.play();

});

$("#puzzle1_dado_btn6").click(function(){

    $("#puzzle1_dado_btn1").show();
    $("#puzzle1_dado_btn6").hide();
    puzzle1_dado_btn6 = false;
    puzzle1_dado_btn1 = true;
    puzzle1_dado_sound.play();

});









    //COMPROBAR SI HE ACERTADO EL PUZZLE 1 
$("#puzzle1_btn2").click(function(){

    if (puzzle1_dado_btn6 == true){

        $("#puzzle1_acierto").show();

        $("#puzzle1_cont").css("-webkit-filter", "blur(10px)");
        $("#cerrar_btn1").css("-webkit-filter", "blur(10px)");

    } else {

        $("#puzzle1_error").show();

        $("#puzzle1_cont").css("-webkit-filter", "blur(10px)");
        $("#cerrar_btn1").css("-webkit-filter", "blur(10px)");

    }

    
});



    //ACERTAR PUZZLE 1
$("#puzzle1_btn3").click(function(){

    $("#puzzle1").hide();
    $("#help").show();

    $("#pirata_closed").show();
    $("#narco_closed").hide();
    $("#narco_lock").hide();
    $("#puzzle1_btn").css("-webkit-filter", "grayscale(1)");
    
    $("#mapa").css("-webkit-filter", "blur(0px)");
    $("#puzzle1_btn").css("animation-name", "none");
    $("#puzzle2_btn").css("animation-name", "mundos");

    $("#bucle_mapa_img").css("animation-name", "bucle_scale");
    $("#bucle_mapa").css("top", "9%");
    $("#bucle_mapa").css("left", "54.5%");

    $('#musica_puzzle1').animate({volume: 0}, 1500);
});

//FALLAR PUZZLE 1
$("#puzzle1_btn4").click(function(){

    $("#puzzle1_error").hide();
    
    $("#puzzle1_cont").css("-webkit-filter", "blur(0px)");
    $("#cerrar_btn1").css("-webkit-filter", "blur(0px)");

    $("#puzzle1_dado_btn0").show();
    $("#puzzle1_dado_btn1").hide();
    $("#puzzle1_dado_btn2").hide();
    $("#puzzle1_dado_btn3").hide();
    $("#puzzle1_dado_btn4").hide();
    $("#puzzle1_dado_btn5").hide();
    $("#puzzle1_dado_btn6").hide();

    puzzle1_dado_btn0 = true;
    puzzle1_dado_btn1 = false;
    puzzle1_dado_btn2 = false;
    puzzle1_dado_btn3 = false;
    puzzle1_dado_btn4 = false;
    puzzle1_dado_btn5 = false;
    puzzle1_dado_btn6 = false;

});



//PUZZLE 2
$("#puzzle2_btn").click(function(){

    $("#puzzle2").show();
    $("#help").hide();

    $("#bucle_mapa_img").css("animation-name", "none");

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

        $("#bucle_mapa_img").css("animation-name", "bucle_scale");
        $("#bucle_mapa").css("top", "14%");
        $("#bucle_mapa").css("left", "75%");
    
        $("#narco_closed").show();
        $("#bosque_closed").hide();
        $("#bosque_lock").hide();
        $("#narco_closed").css("-webkit-filter", "grayscale(1)");
        $("#puzzle2_btn").css("-webkit-filter", "grayscale(1)");

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

    $("#bucle_mapa_img").css("animation-name", "none");

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

    $("#bucle_mapa_img").css("animation-name", "bucle_scale");
    $("#bucle_mapa").css("top", "59%");
    $("#bucle_mapa").css("left", "72.5%");

    $("#bosque_closed").show();
    $("#bosque_closed").css("-webkit-filter", "grayscale(1)");
    $("#alien_closed").hide();
    $("#alien_lock").hide();
    $("#puzzle3_btn").css("-webkit-filter", "grayscale(1)");

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

    $("#bucle_mapa_img").css("animation-name", "none");

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

        $("#bucle_mapa_img").css("animation-name", "bucle_scale");
        $("#bucle_mapa").css("top", "43%");
        $("#bucle_mapa").css("left", "42.5%");
    
        $("#alien_closed").show();
        $("#alien_closed").css("-webkit-filter", "grayscale(1)");
        $("#western_closed").hide();
        $("#western_lock").hide();
        $("#puzzle4_btn").css("-webkit-filter", "grayscale(1)");

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

    $("#bucle_mapa_img").css("animation-name", "none");

    $("#mapa").css("-webkit-filter", "blur(10px)");
    musica_puzzle5.currentTime = 0
    musica_puzzle5.play();
    $('#musica_puzzle5').animate({volume: 1}, 0);
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

        $('#musica_puzzle5').animate({volume: 0}, 500);
        
        //Aquí reinicializo todas las variables
    
        $("#mapa").css("-webkit-filter", "blur(0px)");


         vaca1_b2 = false;
         vaca1_b1 = false;
         vaca1_izq = true;
         vaca1_der = false;
         vaca2_b1 = false;
         vaca2_b2 = false;
         vaca2_izq = true;
         vaca2_der = false;
         vaca3_b1 = false;
         vaca3_b2 = false;
         vaca3_izq = true;
         vaca3_der = false;
         botella1_b1 = false;
         botella1_b2 = false;
         botella1_izq = true;
         botella1_der = false;
         botella2_b1 = false;
         botella2_b2 = false;
         botella2_izq = true;
         botella2_der = false;
         botella3_b1 = false;
         botella3_b2 = false;
         botella3_izq = true;
         botella3_der = false;
         balsa_izq = true;
         balsa_der = false;
         balsa_b1 = false;
         balsa_b2 = false;

         document.getElementById("puzzle5_vaca1").style.left = "20%";
         document.getElementById("puzzle5_vaca1").style.top = "45%" ;
         document.getElementById("puzzle5_vaca2").style.left = "1%";
         document.getElementById("puzzle5_vaca2").style.top = "52%" ;
         document.getElementById("puzzle5_vaca3").style.left = "15%";
         document.getElementById("puzzle5_vaca3").style.top = "66%" ;

         document.getElementById("puzzle5_botella1").style.left = "18%";
         document.getElementById("puzzle5_botella1").style.top = "87%" ;
         document.getElementById("puzzle5_botella2").style.left = "10%";
         document.getElementById("puzzle5_botella2").style.top = "87%" ;
         document.getElementById("puzzle5_botella3").style.left = "2%";
         document.getElementById("puzzle5_botella3").style.top = "87%" ;

         document.getElementById("puzzle5_vaca1").style.animationName = "none";
         document.getElementById("puzzle5_vaca2").style.animationName = "none";
         document.getElementById("puzzle5_vaca3").style.animationName = "none";
         document.getElementById("puzzle5_botella1").style.animationName = "none";
         document.getElementById("puzzle5_botella2").style.animationName = "none";
         document.getElementById("puzzle5_botella3").style.animationName = "none";

         document.getElementById("puzzle5_balsa").style.animationName = "none";
         




    });


    
    //COGER PISTAS PUZLE 5
$("#pista5_btn").click(function(){


    switch(puzzle5_pt){

        //Coger la primera pista
        case 0:
            $("#puzzle5_pt").show();

            $("#puzzle5_cont").css("-webkit-filter", "blur(10px)");
            $("#cerrar_btn5").css("-webkit-filter", "blur(10px)");
            $("#fondo_papel_puzzle5").css("-webkit-filter", "blur(10px)");

            $("#puzzle5_p1").css("background-color", "chocolate");
            $("#puzzle5_p1").css("cursor", "pointer");

            $("#puzzle5_pt_txt").html('¿No paras de ir y venir de una orilla a otra y después de tanto viaje resulta que te encuentras exactamente en la posición de partida? En un punto determinado estás haciendo algo que devuelve a las vacas y las botellas a su posición de partida. Cuando sepas en qué punto lo haces, prueba a hacer algo diferente. Quizás así encuentres la solución más fácilmente.');

            puzzle5_pt++;
            puntos--;
        break;

        //Coger la segunda pista

        case 1:
            $("#puzzle5_pt").show();

            $("#puzzle5_cont").css("-webkit-filter", "blur(10px)");
            $("#cerrar_btn5").css("-webkit-filter", "blur(10px)");
            $("#fondo_papel_puzzle5").css("-webkit-filter", "blur(10px)");

            $("#puzzle5_p2").css("background-color", "chocolate");
            $("#puzzle5_p2").css("cursor", "pointer");

            $("#puzzle5_pt_txt").html('No es obligatorio ocupar dos plazas a la ida y volver con una sola ocupada. A veces tendrás que volver con dos. Para empezar, prueba a llevar las tres vacas a la orilla derecha. Luego ve intercambiando con paciencia vacas por botellas.');

            puzzle5_pt++;
            puntos--;
        break;

        //Coger la tercera pista

        case 2:
            $("#puzzle5_pt").show();

            $("#puzzle5_cont").css("-webkit-filter", "blur(10px)");
            $("#cerrar_btn5").css("-webkit-filter", "blur(10px)");
            $("#fondo_papel_puzzle5").css("-webkit-filter", "blur(10px)");

            $("#pista5_btn").css("background-color", "grey");
            $("#pista5_btn").css("cursor", "default");

            $("#puzzle5_p3").css("background-color", "chocolate");
            $("#puzzle5_p3").css("cursor", "pointer");

            $("#puzzle5_pt_txt").html('Retomemos la pista anterior. Primero tenías que llevar todas las vacas a la orilla derecha del río y luego empezar a intercambiar vacas por botellas. Pues bien, después, cuando veas que tienes pocas botellas en la orilla izquierda, puedes llevarte una botella y una vaca de vuelta para evitar que las vacas se beban el alcohol que te queda.');

            puzzle5_pt++;
            puntos--;
        break;

    }


});

    //VOLVER A ABRIR LAS PISTAS COGIDAS DEL PUZZLE 5

    //Volver a abrir pista 1
$("#puzzle5_p1").click(function(){

    if(puzzle5_pt > 0){

        $("#puzzle5_pt").show();

        $("#puzzle5_cont").css("-webkit-filter", "blur(10px)");
        $("#cerrar_btn5").css("-webkit-filter", "blur(10px)");
        $("#fondo_papel_puzzle5").css("-webkit-filter", "blur(10px)");

        $("#puzzle5_pt_txt").html('¿No paras de ir y venir de una orilla a otra y después de tanto viaje resulta que te encuentras exactamente en la posición de partida? En un punto determinado estás haciendo algo que devuelve a las vacas y las botellas a su posición de partida. Cuando sepas en qué punto lo haces, prueba a hacer algo diferente. Quizás así encuentres la solución más fácilmente.');

    }

});

    //Volver a abrir pista 2


$("#puzzle5_p2").click(function(){

    if(puzzle5_pt > 1){

        $("#puzzle5_pt").show();

        $("#puzzle5_cont").css("-webkit-filter", "blur(10px)");
        $("#cerrar_btn5").css("-webkit-filter", "blur(10px)");
        $("#fondo_papel_puzzle5").css("-webkit-filter", "blur(10px)");

        $("#puzzle5_pt_txt").html('No es obligatorio ocupar dos plazas a la ida y volver con una sola ocupada. A veces tendrás que volver con dos. Para empezar, prueba a llevar las tres vacas a la orilla derecha. Luego ve intercambiando con paciencia vacas por botellas.');

    }

});

    //Volver a abrir pista 3

$("#puzzle5_p3").click(function(){

    if(puzzle5_pt > 2){

        $("#puzzle5_pt").show();

        $("#puzzle5_cont").css("-webkit-filter", "blur(10px)");
        $("#cerrar_btn5").css("-webkit-filter", "blur(10px)");
        $("#fondo_papel_puzzle5").css("-webkit-filter", "blur(10px)");

        $("#puzzle5_pt_txt").html('Retomemos la pista anterior. Primero tenías que llevar todas las vacas a la orilla derecha del río y luego empezar a intercambiar vacas por botellas. Pues bien, después, cuando veas que tienes pocas botellas en la orilla izquierda, puedes llevarte una botella y una vaca de vuelta para evitar que las vacas se beban el alcohol que te queda.');

    }

});



    //CERRAR PISTAS PUZZLE 5
 $("#cerrar_pista_p5").click(function(){

    $("#puzzle5_pt").hide();

    $("#puzzle5_cont").css("-webkit-filter", "blur(0px)");
    $("#cerrar_btn5").css("-webkit-filter", "blur(0px)");
    $("#fondo_papel_puzzle5").css("-webkit-filter", "blur(0px)");
});



/* PUZZLE 5, EL PUZZLE PUZZLE PUZZLECÍSMO*/

//COLOCAR LA VACA 1

document.getElementById("puzzle5_vaca1").addEventListener("click", function(){


    n_vacas_izq = 0;
    n_vacas_der = 0;
    n_botellas_izq = 0;
    n_botellas_der = 0;

    document.getElementById("puzzle5_vaca1").style.animationName = "none";

    
    //Colocar vaca1 en la balsa
    if (vaca1 == false){

    
        if(balsa_izq == true && balsa_b1 == false && vaca1_izq == true){
            document.getElementById("puzzle5_vaca1").style.left = vaca_b1_izq_x ;
            document.getElementById("puzzle5_vaca1").style.top = vaca_b_y ;


            balsa_b1 = true;
            vaca1_b1 = true;
            vaca1_izq = false;

        } else if (balsa_izq == true && balsa_b2 == false && vaca1_izq == true){
            document.getElementById("puzzle5_vaca1").style.left = vaca_b2_izq_x ;
            document.getElementById("puzzle5_vaca1").style.top = vaca_b_y ;

            balsa_b2 = true;
            vaca1_b2 = true;
            vaca1_izq = false;
        }

        if(balsa_der == true && balsa_b1 == false && vaca1_der == true){
            document.getElementById("puzzle5_vaca1").style.left = vaca_b1_der_x ;
            document.getElementById("puzzle5_vaca1").style.top = vaca_b_y ;

            //Ahora el hueco 1 de la balsa 1 está ocupado

            balsa_b1 = true;
            vaca1_b1 = true;
            vaca1_der = false;

        } else if (balsa_der == true && balsa_b2 == false && vaca1_der == true){
            document.getElementById("puzzle5_vaca1").style.left = vaca_b2_der_x ;
            document.getElementById("puzzle5_vaca1").style.top = vaca_b_y ;

            balsa_b2 = true;
            vaca1_b2 = true;
            vaca1_der = false;
        }

        vaca1 = true;

        //Sacar a vaca1 de la balsa
    } else{

    
        if(balsa_izq == true && balsa_b1 == true && vaca1_izq == false && vaca1_b1==true){
            document.getElementById("puzzle5_vaca1").style.left = vaca1_izq_x ;
            document.getElementById("puzzle5_vaca1").style.top = vaca1_y ;


            balsa_b1 = false;
            vaca1_b1 = false;
            vaca1_izq = true;

        } else if (balsa_izq == true && balsa_b2 == true && vaca1_izq == false&& vaca1_b2==true){
            document.getElementById("puzzle5_vaca1").style.left = vaca1_izq_x ;
            document.getElementById("puzzle5_vaca1").style.top = vaca1_y ;

            balsa_b2 = false;
            vaca1_b2 = false;
            vaca1_izq = true;
        }

        if(balsa_der == true && balsa_b1 == true && vaca1_der == false&& vaca1_b1==true){
            document.getElementById("puzzle5_vaca1").style.left = vaca1_der_x ;
            document.getElementById("puzzle5_vaca1").style.top = vaca1_y ;


            balsa_b1 = false;
            vaca1_b1 = false;
            vaca1_der = true;

        } else if (balsa_der == true && balsa_b2 == true && vaca1_der == false&& vaca1_b2==true){
            document.getElementById("puzzle5_vaca1").style.left = vaca1_der_x ;
            document.getElementById("puzzle5_vaca1").style.top = vaca1_y ;

            balsa_b2 = false;
            vaca1_b2 = false;
            vaca1_der = true;
        }

        vaca1 = false;

    }


    //Contabilizador del número de vacas y botellas que hay en cada orilla

    if (vaca1_izq == true){
        n_vacas_izq++;
    }

    if (vaca2_izq == true){
        n_vacas_izq++;
    }

    if (vaca3_izq == true){
        n_vacas_izq++;
    }

    if (vaca1_der == true){
        n_vacas_der++;
    }

    if (vaca2_der == true){
        n_vacas_der++;
    }

    if (vaca3_der == true){
        n_vacas_der++;
    }



    if (botella1_izq == true){
        n_botellas_izq++;
    }

    if (botella2_izq == true){
        n_botellas_izq++;
    }

    if (botella3_izq == true){
        n_botellas_izq++;
    }

    if (botella1_der == true){
        n_botellas_der++;
    }

    if (botella2_der == true){
        n_botellas_der++;
    }

    if (botella3_der == true){
        n_botellas_der++;
    }

    //Comprobar si has ganado el puzzle

    if (n_botellas_der == 3 && n_vacas_der == 3){

        $("#puzzle5_acierto").show();

        $("#puzzle5_cont").css("-webkit-filter", "blur(10px)");
        $("#cerrar_btn5").css("-webkit-filter", "blur(10px)");
        $("#fondo_papel_puzzle5").css("-webkit-filter", "blur(10px)");
        

    }


    
});

//COLOCAR LA VACA 2 

document.getElementById("puzzle5_vaca2").addEventListener("click", function(){

    n_vacas_izq = 0;
    n_vacas_der = 0;
    n_botellas_izq = 0;
    n_botellas_der = 0;

    document.getElementById("puzzle5_vaca2").style.animationName = "none";

    //Colocar la vaca2 en la balsa

    if (vaca2 == false){

    
        if(balsa_izq == true && balsa_b1 == false && vaca2_izq == true){
            document.getElementById("puzzle5_vaca2").style.left = vaca_b1_izq_x ;
            document.getElementById("puzzle5_vaca2").style.top = vaca_b_y ;


            balsa_b1 = true;
            vaca2_b1 = true;
            vaca2_izq = false;

        } else if (balsa_izq == true && balsa_b2 == false && vaca2_izq == true){
            document.getElementById("puzzle5_vaca2").style.left = vaca_b2_izq_x ;
            document.getElementById("puzzle5_vaca2").style.top = vaca_b_y ;

            balsa_b2 = true;
            vaca2_b2 = true;
            vaca2_izq = false;
        }

        if(balsa_der == true && balsa_b1 == false && vaca2_der == true){
            document.getElementById("puzzle5_vaca2").style.left = vaca_b1_der_x ;
            document.getElementById("puzzle5_vaca2").style.top = vaca_b_y ;


            balsa_b1 = true;
            vaca2_b1 = true;
            vaca2_der = false;

        } else if (balsa_der == true && balsa_b2 == false && vaca2_der == true){
            document.getElementById("puzzle5_vaca2").style.left = vaca_b2_der_x ;
            document.getElementById("puzzle5_vaca2").style.top = vaca_b_y ;

            balsa_b2 = true;
            vaca2_b2 = true;
            vaca2_der = false;
        }

        vaca2 = true;

        //Sacar a la vaca2 de la balsa

    } else{

    
        if(balsa_izq == true && balsa_b1 == true && vaca2_izq == false&& vaca2_b1==true){
            document.getElementById("puzzle5_vaca2").style.left = vaca2_izq_x ;
            document.getElementById("puzzle5_vaca2").style.top = vaca2_y ;

            balsa_b1 = false;
            vaca2_b1 = false;
            vaca2_izq = true;

        } else if (balsa_izq == true && balsa_b2 == true && vaca2_izq == false&& vaca2_b2==true){
            document.getElementById("puzzle5_vaca2").style.left = vaca2_izq_x ;
            document.getElementById("puzzle5_vaca2").style.top = vaca2_y ;

            balsa_b2 = false;
            vaca2_b2 = false;
            vaca2_izq = true;
        }

        if(balsa_der == true && balsa_b1 == true && vaca2_der == false&& vaca2_b1==true){
            document.getElementById("puzzle5_vaca2").style.left = vaca2_der_x ;
            document.getElementById("puzzle5_vaca2").style.top = vaca2_y ;

            balsa_b1 = false;
            vaca2_b1 = false;
            vaca2_der = true;

        } else if (balsa_der == true && balsa_b2 == true && vaca2_der == false&& vaca2_b2==true){
            document.getElementById("puzzle5_vaca2").style.left = vaca2_der_x ;
            document.getElementById("puzzle5_vaca2").style.top = vaca2_y ;

            balsa_b2 = false;
            vaca2_b2 = false;
            vaca2_der = true;
        }

        vaca2 = false;

    }

    
    //Contabilizador del número de vacas y botellas que hay en cada orilla

    if (vaca1_izq == true){
        n_vacas_izq++;
    }

    if (vaca2_izq == true){
        n_vacas_izq++;
    }

    if (vaca3_izq == true){
        n_vacas_izq++;
    }

    if (vaca1_der == true){
        n_vacas_der++;
    }

    if (vaca2_der == true){
        n_vacas_der++;
    }

    if (vaca3_der == true){
        n_vacas_der++;
    }



    if (botella1_izq == true){
        n_botellas_izq++;
    }

    if (botella2_izq == true){
        n_botellas_izq++;
    }

    if (botella3_izq == true){
        n_botellas_izq++;
    }

    if (botella1_der == true){
        n_botellas_der++;
    }

    if (botella2_der == true){
        n_botellas_der++;
    }

    if (botella3_der == true){
        n_botellas_der++;
    }

    //Comprobar si has ganado el puzzle

    if (n_botellas_der == 3 && n_vacas_der == 3){

        $("#puzzle5_acierto").show();

        $("#puzzle5_cont").css("-webkit-filter", "blur(10px)");
        $("#cerrar_btn5").css("-webkit-filter", "blur(10px)");
        $("#fondo_papel_puzzle5").css("-webkit-filter", "blur(10px)");

    }


    
});


//COLOCAR LA VACA 3 

document.getElementById("puzzle5_vaca3").addEventListener("click", function(){

    n_vacas_izq = 0;
    n_vacas_der = 0;
    n_botellas_izq = 0;
    n_botellas_der = 0;

    document.getElementById("puzzle5_vaca3").style.animationName = "none";

    //Colocar vaca3 en la balsa

    if (vaca3 == false){

    
        if(balsa_izq == true && balsa_b1 == false && vaca3_izq == true){
            document.getElementById("puzzle5_vaca3").style.left = vaca_b1_izq_x ;
            document.getElementById("puzzle5_vaca3").style.top = vaca_b_y ;


            balsa_b1 = true;
            vaca3_b1 = true;
            vaca3_izq = false;

        } else if (balsa_izq == true && balsa_b2 == false && vaca3_izq == true){
            document.getElementById("puzzle5_vaca3").style.left = vaca_b2_izq_x ;
            document.getElementById("puzzle5_vaca3").style.top = vaca_b_y ;

            balsa_b2 = true;
            vaca3_b2 = true;
            vaca3_izq = false;
        }

        if(balsa_der == true && balsa_b1 == false && vaca3_der == true){
            document.getElementById("puzzle5_vaca3").style.left = vaca_b1_der_x ;
            document.getElementById("puzzle5_vaca3").style.top = vaca_b_y ;


            balsa_b1 = true;
            vaca3_b1 = true;
            vaca3_der = false;

        } else if (balsa_der == true && balsa_b2 == false && vaca3_der == true){
            document.getElementById("puzzle5_vaca3").style.left = vaca_b2_der_x ;
            document.getElementById("puzzle5_vaca3").style.top = vaca_b_y ;

            balsa_b2 = true;
            vaca3_b2 = true;
            vaca3_der = false;
        }

        vaca3 = true;


        //Sacar vaca1 de la balsa

    } else{

    
        if(balsa_izq == true && balsa_b1 == true && vaca3_izq == false&& vaca3_b1==true){
            document.getElementById("puzzle5_vaca3").style.left = vaca3_izq_x ;
            document.getElementById("puzzle5_vaca3").style.top = vaca3_y ;

            //Ahora el hueco 1 de la balsa 1 está ocupado

            balsa_b1 = false;
            vaca3_b1 = false;
            vaca3_izq = true;

        } else if (balsa_izq == true && balsa_b2 == true && vaca3_izq == false&& vaca3_b2==true){
            document.getElementById("puzzle5_vaca3").style.left = vaca3_izq_x ;
            document.getElementById("puzzle5_vaca3").style.top = vaca3_y ;

            balsa_b2 = false;
            vaca3_b2 = false;
            vaca3_izq = true;
        }

        if(balsa_der == true && balsa_b1 == true && vaca3_der == false&& vaca3_b1==true){
            document.getElementById("puzzle5_vaca3").style.left = vaca3_der_x ;
            document.getElementById("puzzle5_vaca3").style.top = vaca3_y ;

            //Ahora el hueco 1 de la balsa 1 está ocupado

            balsa_b1 = false;
            vaca3_b1 = false;
            vaca3_der = true;

        } else if (balsa_der == true && balsa_b2 == true && vaca3_der == false&& vaca3_b2==true){
            document.getElementById("puzzle5_vaca3").style.left = vaca3_der_x ;
            document.getElementById("puzzle5_vaca3").style.top = vaca3_y ;

            balsa_b2 = false;
            vaca3_b2 = false;
            vaca3_der = true;
        }

        vaca3 = false;

    }

    
    //Contabilizador del número de vacas y botellas que hay en cada orilla

    if (vaca1_izq == true){
        n_vacas_izq++;
    }

    if (vaca2_izq == true){
        n_vacas_izq++;
    }

    if (vaca3_izq == true){
        n_vacas_izq++;
    }

    if (vaca1_der == true){
        n_vacas_der++;
    }

    if (vaca2_der == true){
        n_vacas_der++;
    }

    if (vaca3_der == true){
        n_vacas_der++;
    }



    if (botella1_izq == true){
        n_botellas_izq++;
    }

    if (botella2_izq == true){
        n_botellas_izq++;
    }

    if (botella3_izq == true){
        n_botellas_izq++;
    }

    if (botella1_der == true){
        n_botellas_der++;
    }

    if (botella2_der == true){
        n_botellas_der++;
    }

    if (botella3_der == true){
        n_botellas_der++;
    }

    //Comprobar si has ganado el puzzle

    if (n_botellas_der == 3 && n_vacas_der == 3){

        $("#puzzle5_acierto").show();

        $("#puzzle5_cont").css("-webkit-filter", "blur(10px)");
        $("#cerrar_btn5").css("-webkit-filter", "blur(10px)");
        $("#fondo_papel_puzzle5").css("-webkit-filter", "blur(10px)");

    }


    
});


//COLOCAR LA BOTELLA 1 

document.getElementById("puzzle5_botella1").addEventListener("click", function(){

    n_vacas_izq = 0;
    n_vacas_der = 0;
    n_botellas_izq = 0;
    n_botellas_der = 0;

    document.getElementById("puzzle5_botella1").style.animationName = "none";

    //Colocar botella1 en la balsa

    if (botella1 == false){

    
        if(balsa_izq == true && balsa_b1 == false && botella1_izq == true){
            document.getElementById("puzzle5_botella1").style.left = botella_b1_izq_x ;
            document.getElementById("puzzle5_botella1").style.top = botella_b_y ;


            balsa_b1 = true;
            botella1_b1 = true;
            botella1_izq = false;

        } else if (balsa_izq == true && balsa_b2 == false && botella1_izq == true){
            document.getElementById("puzzle5_botella1").style.left = botella_b2_izq_x ;
            document.getElementById("puzzle5_botella1").style.top = botella_b_y ;

            balsa_b2 = true;
            botella1_b2 = true;
            botella1_izq = false;
        }

        if(balsa_der == true && balsa_b1 == false && botella1_der == true){
            document.getElementById("puzzle5_botella1").style.left = botella_b1_der_x ;
            document.getElementById("puzzle5_botella1").style.top = botella_b_y ;


            balsa_b1 = true;
            botella1_b1 = true;
            botella1_der = false;

        } else if (balsa_der == true && balsa_b2 == false && botella1_der == true){
            document.getElementById("puzzle5_botella1").style.left = botella_b2_der_x ;
            document.getElementById("puzzle5_botella1").style.top = botella_b_y ;

            balsa_b2 = true;
            botella1_b2 = true;
            botella1_der = false;
        }

        botella1 = true;

        //Sacar botella1 de la balsa

    } else{

    
        if(balsa_izq == true && balsa_b1 == true && botella1_izq == false && botella1_b1==true){
            document.getElementById("puzzle5_botella1").style.left = botella1_izq_x ;
            document.getElementById("puzzle5_botella1").style.top = botella_y ;


            balsa_b1 = false;
            botella1_b1 = false;
            botella1_izq = true;

        } else if (balsa_izq == true && balsa_b2 == true && botella1_izq == false&& botella1_b2==true){
            document.getElementById("puzzle5_botella1").style.left = botella1_izq_x ;
            document.getElementById("puzzle5_botella1").style.top = botella_y ;

            balsa_b2 = false;
            botella1_b2 = false;
            botella1_izq = true;
        }

        if(balsa_der == true && balsa_b1 == true && botella1_der == false&& botella1_b1==true){
            document.getElementById("puzzle5_botella1").style.left = botella1_der_x ;
            document.getElementById("puzzle5_botella1").style.top = botella_y ;

            balsa_b1 = false;
            botella1_b1 = false;
            botella1_der = true;

        } else if (balsa_der == true && balsa_b2 == true && botella1_der == false&& botella1_b2==true){
            document.getElementById("puzzle5_botella1").style.left = botella1_der_x ;
            document.getElementById("puzzle5_botella1").style.top = botella_y ;

            balsa_b2 = false;
            botella1_b2 = false;
            botella1_der = true;
        }

        botella1 = false;

    }

    //Contabilizador del número de vacas y botellas que hay en cada orilla

    if (vaca1_izq == true){
        n_vacas_izq++;
    }

    if (vaca2_izq == true){
        n_vacas_izq++;
    }

    if (vaca3_izq == true){
        n_vacas_izq++;
    }

    if (vaca1_der == true){
        n_vacas_der++;
    }

    if (vaca2_der == true){
        n_vacas_der++;
    }

    if (vaca3_der == true){
        n_vacas_der++;
    }



    if (botella1_izq == true){
        n_botellas_izq++;
    }

    if (botella2_izq == true){
        n_botellas_izq++;
    }

    if (botella3_izq == true){
        n_botellas_izq++;
    }

    if (botella1_der == true){
        n_botellas_der++;
    }

    if (botella2_der == true){
        n_botellas_der++;
    }

    if (botella3_der == true){
        n_botellas_der++;
    }


    //Comprobar si has ganado el puzzle

    if (n_botellas_der == 3 && n_vacas_der == 3){

        $("#puzzle5_acierto").show();

        $("#puzzle5_cont").css("-webkit-filter", "blur(10px)");
        $("#cerrar_btn5").css("-webkit-filter", "blur(10px)");
        $("#fondo_papel_puzzle5").css("-webkit-filter", "blur(10px)");

    }


    
});


//COLOCAR LA BOTELLA 2 

document.getElementById("puzzle5_botella2").addEventListener("click", function(){

    n_vacas_izq = 0;
    n_vacas_der = 0;
    n_botellas_izq = 0;
    n_botellas_der = 0;

    document.getElementById("puzzle5_botella2").style.animationName = "none";

    //Colocar botella2 en la balsa

    if (botella2 == false){

    
        if(balsa_izq == true && balsa_b1 == false && botella2_izq == true){
            document.getElementById("puzzle5_botella2").style.left = botella_b1_izq_x ;
            document.getElementById("puzzle5_botella2").style.top = botella_b_y ;


            balsa_b1 = true;
            botella2_b1 = true;
            botella2_izq = false;

        } else if (balsa_izq == true && balsa_b2 == false && botella2_izq == true){
            document.getElementById("puzzle5_botella2").style.left = botella_b2_izq_x ;
            document.getElementById("puzzle5_botella2").style.top = botella_b_y ;

            balsa_b2 = true;
            botella2_b2 = true;
            botella2_izq = false;
        }

        if(balsa_der == true && balsa_b1 == false && botella2_der == true){
            document.getElementById("puzzle5_botella2").style.left = botella_b1_der_x ;
            document.getElementById("puzzle5_botella2").style.top = botella_b_y ;


            balsa_b1 = true;
            botella2_b1 = true;
            botella2_der = false;

        } else if (balsa_der == true && balsa_b2 == false && botella2_der == true){
            document.getElementById("puzzle5_botella2").style.left = botella_b2_der_x ;
            document.getElementById("puzzle5_botella2").style.top = botella_b_y ;

            balsa_b2 = true;
            botella2_b2 = true;
            botella2_der = false;
        }

        botella2 = true;

        //Sacar botella2 de la balsa

    } else{

    
        if(balsa_izq == true && balsa_b1 == true && botella2_izq == false && botella2_b1==true){
            document.getElementById("puzzle5_botella2").style.left = botella2_izq_x ;
            document.getElementById("puzzle5_botella2").style.top = botella_y ;


            balsa_b1 = false;
            botella2_b1 = false;
            botella2_izq = true;

        } else if (balsa_izq == true && balsa_b2 == true && botella2_izq == false&& botella2_b2==true){
            document.getElementById("puzzle5_botella2").style.left = botella2_izq_x ;
            document.getElementById("puzzle5_botella2").style.top = botella_y ;

            balsa_b2 = false;
            botella2_b2 = false;
            botella2_izq = true;
        }

        if(balsa_der == true && balsa_b1 == true && botella2_der == false&& botella2_b1==true){
            document.getElementById("puzzle5_botella2").style.left = botella2_der_x ;
            document.getElementById("puzzle5_botella2").style.top = botella_y ;


            balsa_b1 = false;
            botella2_b1 = false;
            botella2_der = true;

        } else if (balsa_der == true && balsa_b2 == true && botella2_der == false&& botella2_b2==true){
            document.getElementById("puzzle5_botella2").style.left = botella2_der_x ;
            document.getElementById("puzzle5_botella2").style.top = botella_y ;

            balsa_b2 = false;
            botella2_b2 = false;
            botella2_der = true;
        }

        botella2 = false;

    }


    //Contabilizador del número de vacas y botellas que hay en cada orilla

    if (vaca1_izq == true){
        n_vacas_izq++;
    }

    if (vaca2_izq == true){
        n_vacas_izq++;
    }

    if (vaca3_izq == true){
        n_vacas_izq++;
    }

    if (vaca1_der == true){
        n_vacas_der++;
    }

    if (vaca2_der == true){
        n_vacas_der++;
    }

    if (vaca3_der == true){
        n_vacas_der++;
    }



    if (botella1_izq == true){
        n_botellas_izq++;
    }

    if (botella2_izq == true){
        n_botellas_izq++;
    }

    if (botella3_izq == true){
        n_botellas_izq++;
    }

    if (botella1_der == true){
        n_botellas_der++;
    }

    if (botella2_der == true){
        n_botellas_der++;
    }

    if (botella3_der == true){
        n_botellas_der++;
    }


    //Comprobar si has ganado el puzzle

    if (n_botellas_der == 3 && n_vacas_der == 3){

        $("#puzzle5_acierto").show();

        $("#puzzle5_cont").css("-webkit-filter", "blur(10px)");
        $("#cerrar_btn5").css("-webkit-filter", "blur(10px)");
        $("#fondo_papel_puzzle5").css("-webkit-filter", "blur(10px)");

    }


    
});


//COLOCAR LA BOTELLA 3 

document.getElementById("puzzle5_botella3").addEventListener("click", function(){

    n_vacas_izq = 0;
    n_vacas_der = 0;
    n_botellas_izq = 0;
    n_botellas_der = 0;

    document.getElementById("puzzle5_botella3").style.animationName = "none";

    //Colocar botella3 en la balsa

    if (botella3 == false){

    
        if(balsa_izq == true && balsa_b1 == false && botella3_izq == true){
            document.getElementById("puzzle5_botella3").style.left = botella_b1_izq_x ;
            document.getElementById("puzzle5_botella3").style.top = botella_b_y ;


            balsa_b1 = true;
            botella3_b1 = true;
            botella3_izq = false;

        } else if (balsa_izq == true && balsa_b2 == false && botella3_izq == true){
            document.getElementById("puzzle5_botella3").style.left = botella_b2_izq_x ;
            document.getElementById("puzzle5_botella3").style.top = botella_b_y ;

            balsa_b2 = true;
            botella3_b2 = true;
            botella3_izq = false;
        }

        if(balsa_der == true && balsa_b1 == false && botella3_der == true){
            document.getElementById("puzzle5_botella3").style.left = botella_b1_der_x ;
            document.getElementById("puzzle5_botella3").style.top = botella_b_y ;


            balsa_b1 = true;
            botella3_b1 = true;
            botella3_der = false;

        } else if (balsa_der == true && balsa_b2 == false && botella3_der == true){
            document.getElementById("puzzle5_botella3").style.left = botella_b2_der_x ;
            document.getElementById("puzzle5_botella3").style.top = botella_b_y ;

            balsa_b2 = true;
            botella3_b2 = true;
            botella3_der = false;
        }

        botella3 = true;

        //Sacar botella3 de la balsa

    } else{

    
        if(balsa_izq == true && balsa_b1 == true && botella3_izq == false && botella3_b1==true){
            document.getElementById("puzzle5_botella3").style.left = botella3_izq_x ;
            document.getElementById("puzzle5_botella3").style.top = botella_y ;


            balsa_b1 = false;
            botella3_b1 = false;
            botella3_izq = true;

        } else if (balsa_izq == true && balsa_b2 == true && botella3_izq == false&& botella3_b2==true){
            document.getElementById("puzzle5_botella3").style.left = botella3_izq_x ;
            document.getElementById("puzzle5_botella3").style.top = botella_y ;

            balsa_b2 = false;
            botella3_b2 = false;
            botella3_izq = true;
        }

        if(balsa_der == true && balsa_b1 == true && botella3_der == false&& botella3_b1==true){
            document.getElementById("puzzle5_botella3").style.left = botella3_der_x ;
            document.getElementById("puzzle5_botella3").style.top = botella_y ;


            balsa_b1 = false;
            botella3_b1 = false;
            botella3_der = true;

        } else if (balsa_der == true && balsa_b2 == true && botella3_der == false&& botella3_b2==true){
            document.getElementById("puzzle5_botella3").style.left = botella3_der_x ;
            document.getElementById("puzzle5_botella3").style.top = botella_y ;

            balsa_b2 = false;
            botella3_b2 = false;
            botella3_der = true;
        }

        botella3 = false;

    }

    //Contabilizador del número de vacas y botellas que hay en cada orilla

    if (vaca1_izq == true){
        n_vacas_izq++;
    }

    if (vaca2_izq == true){
        n_vacas_izq++;
    }

    if (vaca3_izq == true){
        n_vacas_izq++;
    }

    if (vaca1_der == true){
        n_vacas_der++;
    }

    if (vaca2_der == true){
        n_vacas_der++;
    }

    if (vaca3_der == true){
        n_vacas_der++;
    }



    if (botella1_izq == true){
        n_botellas_izq++;
    }

    if (botella2_izq == true){
        n_botellas_izq++;
    }

    if (botella3_izq == true){
        n_botellas_izq++;
    }

    if (botella1_der == true){
        n_botellas_der++;
    }

    if (botella2_der == true){
        n_botellas_der++;
    }

    if (botella3_der == true){
        n_botellas_der++;
    }


    //Comprobar si has ganado el puzzle


    if (n_botellas_der == 3 && n_vacas_der == 3){

        $("#puzzle5_acierto").show();

        $("#puzzle5_cont").css("-webkit-filter", "blur(10px)");
        $("#cerrar_btn5").css("-webkit-filter", "blur(10px)");
        $("#fondo_papel_puzzle5").css("-webkit-filter", "blur(10px)");

    }


    
});



    //BOTÓN MOVER PARA MOVER LA BALSA

document.getElementById("puzzle5_btn2").addEventListener("click", function(){

    //Si el hueco 1 y/o el hueco 2 de la balsa está ocupado, entonces la barca se moverá

    if (balsa_b1 == true || balsa_b2 == true){

        n_vacas_izq = 0;
        n_vacas_der = 0;
        n_botellas_izq = 0;
        n_botellas_der = 0;

        //Si la balsa está a la izquierda

        
        if (balsa_izq == true){

            document.getElementById("puzzle5_balsa").style.animationName = "puzzle5_balsa_ida";
            
            
            if(vaca1_b1 == true){
                document.getElementById("puzzle5_vaca1").style.animationName = "puzzle5_vacas_b1_ida"; 
            }

            if(vaca2_b1 == true){
                document.getElementById("puzzle5_vaca2").style.animationName = "puzzle5_vacas_b1_ida"; 
            }

            if(vaca3_b1 == true){
                document.getElementById("puzzle5_vaca3").style.animationName = "puzzle5_vacas_b1_ida"; 
            }

            if(vaca1_b2 == true){
                document.getElementById("puzzle5_vaca1").style.animationName = "puzzle5_vacas_b2_ida"; 
            }

            if(vaca2_b2 == true){
                document.getElementById("puzzle5_vaca2").style.animationName = "puzzle5_vacas_b2_ida"; 
            }

            if(vaca3_b2 == true){
                document.getElementById("puzzle5_vaca3").style.animationName = "puzzle5_vacas_b2_ida"; 
            }

            



            if(botella1_b1 == true){
                document.getElementById("puzzle5_botella1").style.animationName = "puzzle5_botellas_b1_ida"; 
            }

            if(botella2_b1 == true){
                document.getElementById("puzzle5_botella2").style.animationName = "puzzle5_botellas_b1_ida"; 
            }

            if(botella3_b1 == true){
                document.getElementById("puzzle5_botella3").style.animationName = "puzzle5_botellas_b1_ida"; 
            }

            if(botella1_b2 == true){
                document.getElementById("puzzle5_botella1").style.animationName = "puzzle5_botellas_b2_ida"; 
            }

            if(botella2_b2 == true){
                document.getElementById("puzzle5_botella2").style.animationName = "puzzle5_botellas_b2_ida"; 
            }

            if(botella3_b2 == true){
                document.getElementById("puzzle5_botella3").style.animationName = "puzzle5_botellas_b2_ida"; 
            }
        }


        //Si la balsa está a la derecha

        if (balsa_der == true){

            document.getElementById("puzzle5_balsa").style.animationName = "puzzle5_balsa_vuelta";
            
            
            if(vaca1_b1 == true){
                document.getElementById("puzzle5_vaca1").style.animationName = "puzzle5_vacas_b1_vuelta"; 
            }

            if(vaca2_b1 == true){
                document.getElementById("puzzle5_vaca2").style.animationName = "puzzle5_vacas_b1_vuelta"; 
            }

            if(vaca3_b1 == true){
                document.getElementById("puzzle5_vaca3").style.animationName = "puzzle5_vacas_b1_vuelta"; 
            }

            if(vaca1_b2 == true){
                document.getElementById("puzzle5_vaca1").style.animationName = "puzzle5_vacas_b2_vuelta"; 
            }

            if(vaca2_b2 == true){
                document.getElementById("puzzle5_vaca2").style.animationName = "puzzle5_vacas_b2_vuelta"; 
            }

            if(vaca3_b2 == true){
                document.getElementById("puzzle5_vaca3").style.animationName = "puzzle5_vacas_b2_vuelta"; 
            }

            

            

            if(botella1_b1 == true){
                document.getElementById("puzzle5_botella1").style.animationName = "puzzle5_botellas_b1_vuelta"; 
            }

            if(botella2_b1 == true){
                document.getElementById("puzzle5_botella2").style.animationName = "puzzle5_botellas_b1_vuelta"; 
            }

            if(botella3_b1 == true){
                document.getElementById("puzzle5_botella3").style.animationName = "puzzle5_botellas_b1_vuelta"; 
            }

            if(botella1_b2 == true){
                document.getElementById("puzzle5_botella1").style.animationName = "puzzle5_botellas_b2_vuelta"; 
            }

            if(botella2_b2 == true){
                document.getElementById("puzzle5_botella2").style.animationName = "puzzle5_botellas_b2_vuelta"; 
            }

            if(botella3_b2 == true){
                document.getElementById("puzzle5_botella3").style.animationName = "puzzle5_botellas_b2_vuelta"; 
            }
        }


        //Registrar la posición de la balsa

        if (balsa_izq == true){
            balsa_izq = false;
            balsa_der = true;
        } else {
            balsa_der = false;
            balsa_izq = true;
        }


        //Contabilizador del número de vacas y botellas que hay en cada orilla


        if (vaca1_izq == true){
            n_vacas_izq++;
        }

        if (vaca2_izq == true){
            n_vacas_izq++;
        }

        if (vaca3_izq == true){
            n_vacas_izq++;
        }

        if (vaca1_der == true){
            n_vacas_der++;
        }

        if (vaca2_der == true){
            n_vacas_der++;
        }

        if (vaca3_der == true){
            n_vacas_der++;
        }



        if (botella1_izq == true){
            n_botellas_izq++;
        }

        if (botella2_izq == true){
            n_botellas_izq++;
        }

        if (botella3_izq == true){
            n_botellas_izq++;
        }

        if (botella1_der == true){
            n_botellas_der++;
        }

        if (botella2_der == true){
            n_botellas_der++;
        }

        if (botella3_der == true){
            n_botellas_der++;
        }


        //Comprobar que has fallado el puzzle

        if (n_botellas_izq > 0){

            if (n_botellas_izq < n_vacas_izq){
                $("#puzzle5_error").show();
    
    
                $("#puzzle5_cont").css("-webkit-filter", "blur(10px)");
                $("#cerrar_btn5").css("-webkit-filter", "blur(10px)");
                $("#fondo_papel_puzzle5").css("-webkit-filter", "blur(10px)");
                
            }


        }

        if (n_botellas_der > 0){

            if (n_botellas_der < n_vacas_der){
                $("#puzzle5_error").show();
    
    
                $("#puzzle5_cont").css("-webkit-filter", "blur(10px)");
                $("#cerrar_btn5").css("-webkit-filter", "blur(10px)");
                $("#fondo_papel_puzzle5").css("-webkit-filter", "blur(10px)");
            }


        }

        

    }

});





    //ACERTAR PUZZLE 5
$("#puzzle5_btn3").click(function(){

    $("#puzzle5").hide();
    $("#help").show();

    $("#bucle_mapa_img").css("animation-name", "bucle_scale");
    $("#bucle_mapa").css("top", "62%");
    $("#bucle_mapa").css("left", "20%");

    $("#western_closed").show();
    $("#western_closed").css("-webkit-filter", "grayscale(1)");
    $("#zombie_closed").hide();
    $("#zombie_lock").hide();
    $("#puzzle5_btn").css("-webkit-filter", "grayscale(1)");

    $("#puzzle5_btn").css("animation-name", "none");
    $("#puzzle6_btn").css("animation-name", "mundos");

    $('#musica_puzzle5').animate({volume: 0}, 1500);
    
    
    $("#mapa").css("-webkit-filter", "blur(0px)");
});

    //FALLAR PUZZLE 5
$("#puzzle5_btn4").click(function(){

    $("#puzzle5_error").hide();
    
    $("#puzzle5_cont").css("-webkit-filter", "blur(0px)");
    $("#cerrar_btn5").css("-webkit-filter", "blur(0px)");
    $("#fondo_papel_puzzle5").css("-webkit-filter", "blur(0px)");

    //Reinilización de las variables necesarias para el puzzle5

    vaca1_b2 = false;
    vaca1_b1 = false;
    vaca1_izq = true;
    vaca1_der = false;
    vaca2_b1 = false;
    vaca2_b2 = false;
    vaca2_izq = true;
    vaca2_der = false;
    vaca3_b1 = false;
    vaca3_b2 = false;
    vaca3_izq = true;
    vaca3_der = false;
    botella1_b1 = false;
    botella1_b2 = false;
    botella1_izq = true;
    botella1_der = false;
    botella2_b1 = false;
    botella2_b2 = false;
    botella2_izq = true;
    botella2_der = false;
    botella3_b1 = false;
    botella3_b2 = false;
    botella3_izq = true;
    botella3_der = false;
    balsa_izq = true;
    balsa_der = false;
    balsa_b1 = false;
    balsa_b2 = false;

    document.getElementById("puzzle5_vaca1").style.left = "20%";
    document.getElementById("puzzle5_vaca1").style.top = "45%" ;
    document.getElementById("puzzle5_vaca2").style.left = "1%";
    document.getElementById("puzzle5_vaca2").style.top = "52%" ;
    document.getElementById("puzzle5_vaca3").style.left = "15%";
    document.getElementById("puzzle5_vaca3").style.top = "66%" ;

    document.getElementById("puzzle5_botella1").style.left = "18%";
    document.getElementById("puzzle5_botella1").style.top = "87%" ;
    document.getElementById("puzzle5_botella2").style.left = "10%";
    document.getElementById("puzzle5_botella2").style.top = "87%" ;
    document.getElementById("puzzle5_botella3").style.left = "2%";
    document.getElementById("puzzle5_botella3").style.top = "87%" ;

    document.getElementById("puzzle5_vaca1").style.animationName = "none";
    document.getElementById("puzzle5_vaca2").style.animationName = "none";
    document.getElementById("puzzle5_vaca3").style.animationName = "none";
    document.getElementById("puzzle5_botella1").style.animationName = "none";
    document.getElementById("puzzle5_botella2").style.animationName = "none";
    document.getElementById("puzzle5_botella3").style.animationName = "none";

    document.getElementById("puzzle5_balsa").style.animationName = "none";

});





//BOTON PUZZLE 6
$("#puzzle6_btn").click(function(){

    $("#puzzle6").show();
    $("#help").hide();

    $("#bucle_mapa_img").css("animation-name", "none");

    $("#mapa").css("-webkit-filter", "blur(10px)");
    musica_puzzle6.currentTime = 0
    musica_puzzle6.play();
    $('#musica_puzzle6').animate({volume: 1}, 0);
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

    $('#musica_puzzle6').animate({volume: 0}, 500);


    $("#mapa").css("-webkit-filter", "blur(0px)");

    $("#puzzle6_pieza1").css("top", "2%");
    $("#puzzle6_pieza1").css("left", "2%");

    $("#puzzle6_pieza2").css("top", "22%");
    $("#puzzle6_pieza2").css("left", "2%");

    $("#puzzle6_pieza3").css("top", "42%");
    $("#puzzle6_pieza3").css("left", "2%");

    $("#puzzle6_pieza4").css("top", "62%");
    $("#puzzle6_pieza4").css("left", "2%");

    $("#puzzle6_pieza5").css("top", "82%");
    $("#puzzle6_pieza5").css("left", "2%");

    $("#puzzle6_pieza6").css("top", "22%");
    $("#puzzle6_pieza6").css("left", "89%");

    $("#puzzle6_pieza7").css("top", "42%");
    $("#puzzle6_pieza7").css("left", "89%");

    $("#puzzle6_pieza8").css("top", "62%");
    $("#puzzle6_pieza8").css("left", "89%");

    $("#puzzle6_pieza9").css("top", "82%");
    $("#puzzle6_pieza9").css("left", "89%");

    pieza1_m1 = false;
    pieza1_m2 = false;
    pieza1_m3 = false;
    pieza1_m4 = false;
    pieza1_m5 = false;
    pieza1_m6 = false;
    pieza1_m7 = false;
    pieza2_m1 = false;
    pieza2_m2 = false;
    pieza2_m3 = false;
    pieza2_m4 = false;
    pieza2_m5 = false;
    pieza2_m6 = false;
    pieza2_m7 = false;
    pieza3_m1 = false;
    pieza3_m2 = false;
    pieza3_m3 = false;
    pieza3_m4 = false;
    pieza3_m5 = false;
    pieza3_m6 = false;
    pieza3_m7 = false;
    pieza4_m1 = false;
    pieza4_m2 = false;
    pieza4_m3 = false;
    pieza4_m4 = false;
    pieza4_m5 = false;
    pieza4_m6 = false;
    pieza4_m7 = false;
    pieza5_m1 = false;
    pieza5_m2 = false;
    pieza5_m3 = false;
    pieza5_m4 = false;
    pieza5_m5 = false;
    pieza5_m6 = false;
    pieza5_m7 = false;
    pieza6_m1 = false;
    pieza6_m2 = false;
    pieza6_m3 = false;
    pieza6_m4 = false;
    pieza6_m5 = false;
    pieza6_m6 = false;
    pieza6_m7 = false;
    pieza7_m1 = false;
    pieza7_m2 = false;
    pieza7_m3 = false;
    pieza7_m4 = false;
    pieza7_m5 = false;
    pieza7_m6 = false;
    pieza7_m7 = false;
    pieza8_m1 = false;
    pieza8_m2 = false;
    pieza8_m3 = false;
    pieza8_m4 = false;
    pieza8_m5 = false;
    pieza8_m6 = false;
    pieza8_m7 = false;
    pieza9_m1 = false;
    pieza9_m2 = false;
    pieza9_m3 = false;
    pieza9_m4 = false;
    pieza9_m5 = false;
    pieza9_m6 = false;
    pieza9_m7 = false;

});


//HACER MOVIMIENTO DE LAS PIEZAS Y DETECTAR CUAL ESTÁ SIENDO MOVIDA. DETECTAR QUE SE ESTÁ DEJANDO UN HUECO LIBRE AL MOVER LA PIEZA.

    //PIEZA1

$("#puzzle6_pieza1").draggable({
    containment: "#puzzle6_puzzle",

    start: function( event, ui ) {
        puzzle6_pieza1 = true;

        pieza1_m1 = false;
        pieza1_m2 = false;
        pieza1_m3 = false;
        pieza1_m4 = false;
        pieza1_m5 = false;
        pieza1_m6 = false;
        pieza1_m7 = false;


    },
    stop: function( event, ui ) {
        puzzle6_pieza1 = false;
    }
    
     
});

    //PIEZA2


$("#puzzle6_pieza2").draggable({
    containment: "#puzzle6_puzzle",

    start: function( event, ui ) {
        puzzle6_pieza2 = true;
        pieza2_m1 = false;
        pieza2_m2 = false;
        pieza2_m3 = false;
        pieza2_m4 = false;
        pieza2_m5 = false;
        pieza2_m6 = false;
        pieza2_m7 = false;
    },
    stop: function( event, ui ) {
        puzzle6_pieza2 = false;
    }
     
});


    //PIEZA3

$("#puzzle6_pieza3").draggable({
    containment: "#puzzle6_puzzle",
    start: function( event, ui ) {
        puzzle6_pieza3 = true;
        pieza3_m1 = false;
        pieza3_m2 = false;
        pieza3_m3 = false;
        pieza3_m4 = false;
        pieza3_m5 = false;
        pieza3_m6 = false;
        pieza3_m7 = false;
    },
    stop: function( event, ui ) {
        puzzle6_pieza3 = false;
    }
     
});


    //PIEZA4

$("#puzzle6_pieza4").draggable({
    containment: "#puzzle6_puzzle",
    start: function( event, ui ) {
        puzzle6_pieza4 = true;
        pieza4_m1 = false;
        pieza4_m2 = false;
        pieza4_m3 = false;
        pieza4_m4 = false;
        pieza4_m5 = false;
        pieza4_m6 = false;
        pieza4_m7 = false;
    },
    stop: function( event, ui ) {
        puzzle6_pieza4 = false;
    }
     
});


    //PIEZA5

$("#puzzle6_pieza5").draggable({
    containment: "#puzzle6_puzzle",
    start: function( event, ui ) {
        puzzle6_pieza5 = true;
        pieza5_m1 = false;
        pieza5_m2 = false;
        pieza5_m3 = false;
        pieza5_m4 = false;
        pieza5_m5 = false;
        pieza5_m6 = false;
        pieza5_m7 = false;
    },
    stop: function( event, ui ) {
        puzzle6_pieza5 = false;
    }
     
});


    //PIEZA6


$("#puzzle6_pieza6").draggable({
    containment: "#puzzle6_puzzle",
    start: function( event, ui ) {
        puzzle6_pieza6 = true;
        pieza6_m1 = false;
        pieza6_m2 = false;
        pieza6_m3 = false;
        pieza6_m4 = false;
        pieza6_m5 = false;
        pieza6_m6 = false;
        pieza6_m7 = false;
    },
    stop: function( event, ui ) {
        puzzle6_pieza6 = false;
    }
     
});


    //PIEZA7

$("#puzzle6_pieza7").draggable({
    containment: "#puzzle6_puzzle",
    start: function( event, ui ) {
        puzzle6_pieza7 = true;
        pieza7_m1 = false;
        pieza7_m2 = false;
        pieza7_m3 = false;
        pieza7_m4 = false;
        pieza7_m5 = false;
        pieza7_m6 = false;
        pieza7_m7 = false;
    },
    stop: function( event, ui ) {
        puzzle6_pieza7 = false;
    }
     
});


    //PIEZA8

$("#puzzle6_pieza8").draggable({
    containment: "#puzzle6_puzzle",
    start: function( event, ui ) {
        puzzle6_pieza8 = true;
        pieza8_m1 = false;
        pieza8_m2 = false;
        pieza8_m3 = false;
        pieza8_m4 = false;
        pieza8_m5 = false;
        pieza8_m6 = false;
        pieza8_m7 = false;
    },
    stop: function( event, ui ) {
        puzzle6_pieza8 = false;
    }
     
});


    //PIEZA9

$("#puzzle6_pieza9").draggable({
    containment: "#puzzle6_puzzle",
    start: function( event, ui ) {
        puzzle6_pieza9 = true;
        pieza9_m1 = false;
        pieza9_m2 = false;
        pieza9_m3 = false;
        pieza9_m4 = false;
        pieza9_m5 = false;
        pieza9_m6 = false;
        pieza9_m7 = false;
    },
    stop: function( event, ui ) {
        puzzle6_pieza9 = false;
    }
     
});


//HACER QUE LAS PIEZAS DE COLOQUEN EN UNA MANCHA EN UNA POSICIÓN CONCRETA Y BLOQUEANDO ESTE HUECO PARA QUE NO ENTREN OTRAS PIEZAS.

    //MANCHA1

$("#puzzle6_m1").droppable({
    
    drop: function( event, ui ) {

        if (puzzle6_pieza1 == true  && pieza2_m1 == false && pieza3_m1 == false && pieza4_m1 == false && pieza5_m1 == false && pieza6_m1 == false && pieza7_m1 == false && pieza8_m1 == false && pieza9_m1 == false){
            $("#puzzle6_pieza1").css("top", "9%");
            $("#puzzle6_pieza1").css("left", "22%");
            pieza1_m1 = true;

            puzzle6_piezas_sound.play();
            
        }

        if (puzzle6_pieza2 == true && pieza1_m1 == false && pieza3_m1 == false && pieza4_m1 == false && pieza5_m1 == false && pieza6_m1 == false && pieza7_m1 == false && pieza8_m1 == false && pieza9_m1 == false){
       
            $("#puzzle6_pieza2").css("top", "9%");
            $("#puzzle6_pieza2").css("left", "22%");
            pieza2_m1 = true;

            puzzle6_piezas_sound.play();
    
        }
    
        if (puzzle6_pieza3 == true && pieza2_m1 == false && pieza1_m1 == false && pieza4_m1 == false && pieza5_m1 == false && pieza6_m1 == false && pieza7_m1 == false && pieza8_m1 == false && pieza9_m1 == false){
           
            $("#puzzle6_pieza3").css("top", "9%");
            $("#puzzle6_pieza3").css("left", "22%");
            pieza3_m1 = true;

            puzzle6_piezas_sound.play();
    
        }
    
        if (puzzle6_pieza4 == true && pieza2_m1 == false && pieza3_m1 == false && pieza1_m1 == false && pieza5_m1 == false && pieza6_m1 == false && pieza7_m1 == false && pieza8_m1 == false && pieza9_m1 == false){
           
            $("#puzzle6_pieza4").css("top", "9%");
            $("#puzzle6_pieza4").css("left", "22%");
            pieza4_m1 = true;

            puzzle6_piezas_sound.play();
    
        }
    
        if (puzzle6_pieza5 == true && pieza2_m1 == false && pieza3_m1 == false && pieza4_m1 == false && pieza1_m1 == false && pieza6_m1 == false && pieza7_m1 == false && pieza8_m1 == false && pieza9_m1 == false){
           
            $("#puzzle6_pieza5").css("top", "9%");
            $("#puzzle6_pieza5").css("left", "22%");
            pieza5_m1 = true;

            puzzle6_piezas_sound.play();
    
        }
    
        if (puzzle6_pieza6 == true && pieza2_m1 == false && pieza3_m1 == false && pieza4_m1 == false && pieza5_m1 == false && pieza1_m1 == false && pieza7_m1 == false && pieza8_m1 == false && pieza9_m1 == false){
           
            $("#puzzle6_pieza6").css("top", "9%");
            $("#puzzle6_pieza6").css("left", "22%");
            pieza6_m1 = true;

            puzzle6_piezas_sound.play();
    
        }
    
        if (puzzle6_pieza7 == true && pieza2_m1 == false && pieza3_m1 == false && pieza4_m1 == false && pieza5_m1 == false && pieza6_m1 == false && pieza1_m1 == false && pieza8_m1 == false && pieza9_m1 == false){
           
            $("#puzzle6_pieza7").css("top", "9%");
            $("#puzzle6_pieza7").css("left", "22%");
            pieza7_m1 = true;

            puzzle6_piezas_sound.play();
    
        }
    
        if (puzzle6_pieza8 == true && pieza2_m1 == false && pieza3_m1 == false && pieza4_m1 == false && pieza5_m1 == false && pieza6_m1 == false && pieza7_m1 == false && pieza1_m1 == false && pieza9_m1 == false){
           
            $("#puzzle6_pieza8").css("top", "9%");
            $("#puzzle6_pieza8").css("left", "22%");
            pieza8_m1 = true;

            puzzle6_piezas_sound.play();
    
        }
    
        if (puzzle6_pieza9 == true && pieza2_m1 == false && pieza3_m1 == false && pieza4_m1 == false && pieza5_m1 == false && pieza6_m1 == false && pieza7_m1 == false && pieza8_m1 == false && pieza1_m1 == false){
           
            $("#puzzle6_pieza9").css("top", "9%");
            $("#puzzle6_pieza9").css("left", "22%");
            pieza9_m1 = true;

            puzzle6_piezas_sound.play();
    
        }



    }
});


    //MANCHA2




$("#puzzle6_m2").droppable({
    
    drop: function( event, ui ) {

        if (puzzle6_pieza1 == true  && pieza2_m2 == false && pieza3_m2 == false && pieza4_m2 == false && pieza5_m2 == false && pieza6_m2 == false && pieza7_m2 == false && pieza8_m2 == false && pieza9_m2 == false){
            $("#puzzle6_pieza1").css("top", "44%");
            $("#puzzle6_pieza1").css("left", "22%");
            pieza1_m2 = true;

            puzzle6_piezas_sound.play();
        }

        if (puzzle6_pieza2 == true && pieza1_m2 == false && pieza3_m2 == false && pieza4_m2 == false && pieza5_m2 == false && pieza6_m2 == false && pieza7_m2 == false && pieza8_m2 == false && pieza9_m2 == false){
       
            $("#puzzle6_pieza2").css("top", "44%");
            $("#puzzle6_pieza2").css("left", "22%");
            pieza2_m2 = true;

            puzzle6_piezas_sound.play();
    
        }
    
        if (puzzle6_pieza3 == true && pieza2_m2 == false && pieza1_m2 == false && pieza4_m2 == false && pieza5_m2 == false && pieza6_m2 == false && pieza7_m2 == false && pieza8_m2 == false && pieza9_m2 == false){
           
            $("#puzzle6_pieza3").css("top", "44%");
            $("#puzzle6_pieza3").css("left", "22%");
            pieza3_m2 = true;

            puzzle6_piezas_sound.play();
    
        }
    
        if (puzzle6_pieza4 == true && pieza2_m2 == false && pieza3_m2 == false && pieza1_m2 == false && pieza5_m2 == false && pieza6_m2 == false && pieza7_m2 == false && pieza8_m2 == false && pieza9_m2 == false){
           
            $("#puzzle6_pieza4").css("top", "44%");
            $("#puzzle6_pieza4").css("left", "22%");
            pieza4_m2 = true;

            puzzle6_piezas_sound.play();
    
        }
    
        if (puzzle6_pieza5 == true && pieza2_m2 == false && pieza3_m2 == false && pieza4_m2 == false && pieza1_m2 == false && pieza6_m2 == false && pieza7_m2 == false && pieza8_m2 == false && pieza9_m2 == false){
           
            $("#puzzle6_pieza5").css("top", "44%");
            $("#puzzle6_pieza5").css("left", "22%");
            pieza5_m2 = true;

            puzzle6_piezas_sound.play();
    
        }
    
        if (puzzle6_pieza6 == true && pieza2_m2 == false && pieza3_m2 == false && pieza4_m2 == false && pieza5_m2 == false && pieza1_m2 == false && pieza7_m2 == false && pieza8_m2 == false && pieza9_m2 == false){
           
            $("#puzzle6_pieza6").css("top", "44%");
            $("#puzzle6_pieza6").css("left", "22%");
            pieza6_m2 = true;

            puzzle6_piezas_sound.play();
    
        }
    
        if (puzzle6_pieza7 == true && pieza2_m2 == false && pieza3_m2 == false && pieza4_m2 == false && pieza5_m2 == false && pieza6_m2 == false && pieza1_m2 == false && pieza8_m2 == false && pieza9_m2 == false){
           
            $("#puzzle6_pieza7").css("top", "44%");
            $("#puzzle6_pieza7").css("left", "22%");
            pieza7_m2 = true;

            puzzle6_piezas_sound.play();
    
        }
    
        if (puzzle6_pieza8 == true && pieza2_m2 == false && pieza3_m2 == false && pieza4_m2 == false && pieza5_m2 == false && pieza6_m2 == false && pieza7_m2 == false && pieza1_m2 == false && pieza9_m2 == false){
           
            $("#puzzle6_pieza8").css("top", "44%");
            $("#puzzle6_pieza8").css("left", "22%");
            pieza8_m2 = true;

            puzzle6_piezas_sound.play();
    
        }
    
        if (puzzle6_pieza9 == true && pieza2_m2 == false && pieza3_m2 == false && pieza4_m2 == false && pieza5_m2 == false && pieza6_m2 == false && pieza7_m2 == false && pieza8_m2 == false && pieza1_m2 == false){
           
            $("#puzzle6_pieza9").css("top", "44%");
            $("#puzzle6_pieza9").css("left", "22%");
            pieza9_m2 = true;

            puzzle6_piezas_sound.play();
    
        }



    }
});



    //MANCHA3


$("#puzzle6_m3").droppable({
    
    drop: function( event, ui ) {

        if (puzzle6_pieza1 == true  && pieza2_m3 == false && pieza3_m3 == false && pieza4_m3 == false && pieza5_m3 == false && pieza6_m3 == false && pieza7_m3 == false && pieza8_m3 == false && pieza9_m3 == false){
            $("#puzzle6_pieza1").css("top", "76%");
            $("#puzzle6_pieza1").css("left", "22%");
            pieza1_m3 = true;

            puzzle6_piezas_sound.play();
        }

        if (puzzle6_pieza2 == true && pieza1_m3 == false && pieza3_m3 == false && pieza4_m3 == false && pieza5_m3 == false && pieza6_m3 == false && pieza7_m3 == false && pieza8_m3 == false && pieza9_m3 == false){
       
            $("#puzzle6_pieza2").css("top", "76%");
            $("#puzzle6_pieza2").css("left", "22%");
            pieza2_m3 = true;

            puzzle6_piezas_sound.play();
    
        }
    
        if (puzzle6_pieza3 == true && pieza2_m3 == false && pieza1_m3 == false && pieza4_m3 == false && pieza5_m3 == false && pieza6_m3 == false && pieza7_m3 == false && pieza8_m3 == false && pieza9_m3 == false){
           
            $("#puzzle6_pieza3").css("top", "76%");
            $("#puzzle6_pieza3").css("left", "22%");
            pieza3_m3 = true;

            puzzle6_piezas_sound.play();
    
        }
    
        if (puzzle6_pieza4 == true && pieza2_m3 == false && pieza3_m3 == false && pieza1_m3 == false && pieza5_m3 == false && pieza6_m3 == false && pieza7_m3 == false && pieza8_m3 == false && pieza9_m3 == false){
           
            $("#puzzle6_pieza4").css("top", "76%");
            $("#puzzle6_pieza4").css("left", "22%");
            pieza4_m3 = true;

            puzzle6_piezas_sound.play();
    
        }
    
        if (puzzle6_pieza5 == true && pieza2_m3 == false && pieza3_m3 == false && pieza4_m3 == false && pieza1_m3 == false && pieza6_m3 == false && pieza7_m3 == false && pieza8_m3 == false && pieza9_m3 == false){
           
            $("#puzzle6_pieza5").css("top", "76%");
            $("#puzzle6_pieza5").css("left", "22%");
            pieza5_m3 = true;

            puzzle6_piezas_sound.play();
    
        }
    
        if (puzzle6_pieza6 == true && pieza2_m3 == false && pieza3_m3 == false && pieza4_m3 == false && pieza5_m3 == false && pieza1_m3 == false && pieza7_m3 == false && pieza8_m3 == false && pieza9_m3 == false){
           
            $("#puzzle6_pieza6").css("top", "76%");
            $("#puzzle6_pieza6").css("left", "22%");
            pieza6_m3 = true;

            puzzle6_piezas_sound.play();
    
        }
    
        if (puzzle6_pieza7 == true && pieza2_m3 == false && pieza3_m3 == false && pieza4_m3 == false && pieza5_m3 == false && pieza6_m3 == false && pieza1_m3 == false && pieza8_m3 == false && pieza9_m3 == false){
           
            $("#puzzle6_pieza7").css("top", "76%");
            $("#puzzle6_pieza7").css("left", "22%");
            pieza7_m3 = true;

            puzzle6_piezas_sound.play();
    
        }
    
        if (puzzle6_pieza8 == true && pieza2_m3 == false && pieza3_m3 == false && pieza4_m3 == false && pieza5_m3 == false && pieza6_m3 == false && pieza7_m3 == false && pieza1_m3 == false && pieza9_m3 == false){
           
            $("#puzzle6_pieza8").css("top", "76%");
            $("#puzzle6_pieza8").css("left", "22%");
            pieza8_m3 = true;

            puzzle6_piezas_sound.play();
    
        }
    
        if (puzzle6_pieza9 == true && pieza2_m3 == false && pieza3_m3 == false && pieza4_m3 == false && pieza5_m3 == false && pieza6_m3 == false && pieza7_m3 == false && pieza8_m3 == false && pieza1_m3 == false){
           
            $("#puzzle6_pieza9").css("top", "76%");
            $("#puzzle6_pieza9").css("left", "22%");
            pieza9_m3 = true;

            puzzle6_piezas_sound.play();
    
        }

        


    }
});




    //MANCHA4

$("#puzzle6_m4").droppable({
    
    drop: function( event, ui ) {

        if (puzzle6_pieza1 == true  && pieza2_m4 == false && pieza3_m4 == false && pieza4_m4 == false && pieza5_m4 == false && pieza6_m4 == false && pieza7_m4 == false && pieza8_m4 == false && pieza9_m4 == false){
            $("#puzzle6_pieza1").css("top", "44%");
            $("#puzzle6_pieza1").css("left", "44%");
            pieza1_m4 = true;

            puzzle6_piezas_sound.play();
        }

        if (puzzle6_pieza2 == true  && pieza1_m4 == false && pieza3_m4 == false && pieza4_m4 == false && pieza5_m4 == false && pieza6_m4 == false && pieza7_m4 == false && pieza8_m4 == false && pieza9_m4 == false){
       
            $("#puzzle6_pieza2").css("top", "44%");
            $("#puzzle6_pieza2").css("left", "44%");
            pieza2_m4 = true;

            puzzle6_piezas_sound.play();
    
        }
    
        if (puzzle6_pieza3 == true  && pieza2_m4 == false && pieza1_m4 == false && pieza4_m4 == false && pieza5_m4 == false && pieza6_m4 == false && pieza7_m4 == false && pieza8_m4 == false && pieza9_m4 == false){
           
            $("#puzzle6_pieza3").css("top", "44%");
            $("#puzzle6_pieza3").css("left", "44%");
            pieza3_m4 = true;

            puzzle6_piezas_sound.play();
    
        }
    
        if (puzzle6_pieza4 == true  && pieza2_m4 == false && pieza3_m4 == false && pieza1_m4 == false && pieza5_m4 == false && pieza6_m4 == false && pieza7_m4 == false && pieza8_m4 == false && pieza9_m4 == false){
           
            $("#puzzle6_pieza4").css("top", "44%");
            $("#puzzle6_pieza4").css("left", "44%");
            pieza4_m4 = true;

            puzzle6_piezas_sound.play();
    
        }
    
        if (puzzle6_pieza5 == true  && pieza2_m4 == false && pieza3_m4 == false && pieza4_m4 == false && pieza1_m4 == false && pieza6_m4 == false && pieza7_m4 == false && pieza8_m4 == false && pieza9_m4 == false){
           
            $("#puzzle6_pieza5").css("top", "44%");
            $("#puzzle6_pieza5").css("left", "44%");
            pieza5_m4 = true;

            puzzle6_piezas_sound.play();
    
        }
    
        if (puzzle6_pieza6 == true  && pieza2_m4 == false && pieza3_m4 == false && pieza4_m4 == false && pieza5_m4 == false && pieza1_m4 == false && pieza7_m4 == false && pieza8_m4 == false && pieza9_m4 == false){
           
            $("#puzzle6_pieza6").css("top", "44%");
            $("#puzzle6_pieza6").css("left", "44%");
            pieza6_m4 = true;

            puzzle6_piezas_sound.play();
    
        }
    
        if (puzzle6_pieza7 == true  && pieza2_m4 == false && pieza3_m4 == false && pieza4_m4 == false && pieza5_m4 == false && pieza6_m4 == false && pieza1_m4 == false && pieza8_m4 == false && pieza9_m4 == false){
           
            $("#puzzle6_pieza7").css("top", "44%");
            $("#puzzle6_pieza7").css("left", "44%");
            pieza7_m4 = true;

            puzzle6_piezas_sound.play();
    
        }
    
        if (puzzle6_pieza8 == true  && pieza2_m4 == false && pieza3_m4 == false && pieza4_m4 == false && pieza5_m4 == false && pieza6_m4 == false && pieza7_m4 == false && pieza1_m4 == false && pieza9_m4 == false){
           
            $("#puzzle6_pieza8").css("top", "44%");
            $("#puzzle6_pieza8").css("left", "44%");
            pieza8_m4 = true;

            puzzle6_piezas_sound.play();
    
        }
    
        if (puzzle6_pieza9 == true  && pieza2_m4 == false && pieza3_m4 == false && pieza4_m4 == false && pieza5_m4 == false && pieza6_m4 == false && pieza7_m4 == false && pieza8_m4 == false && pieza1_m4 == false){
           
            $("#puzzle6_pieza9").css("top", "44%");
            $("#puzzle6_pieza9").css("left", "44%");
            pieza9_m4 = true;

            puzzle6_piezas_sound.play();
    
        }

        


    }
});



    //MANCHA5

$("#puzzle6_m5").droppable({
    
    drop: function( event, ui ) {

        if (puzzle6_pieza1 == true  && pieza2_m5 == false && pieza3_m5 == false && pieza4_m5 == false && pieza5_m5 == false && pieza6_m5 == false && pieza7_m5 == false && pieza8_m5 == false && pieza9_m5 == false){
            $("#puzzle6_pieza1").css("top", "11%");
            $("#puzzle6_pieza1").css("left", "67%");
            pieza1_m5 = true;

            puzzle6_piezas_sound.play();
        }

        if (puzzle6_pieza2 == true  && pieza1_m5 == false && pieza3_m5 == false && pieza4_m5 == false && pieza5_m5 == false && pieza6_m5 == false && pieza7_m5 == false && pieza8_m5 == false && pieza9_m5 == false){
       
            $("#puzzle6_pieza2").css("top", "11%");
            $("#puzzle6_pieza2").css("left", "67%");
            pieza2_m5 = true;

            puzzle6_piezas_sound.play();
    
        }
    
        if (puzzle6_pieza3 == true  && pieza2_m5 == false && pieza1_m5 == false && pieza4_m5 == false && pieza5_m5 == false && pieza6_m5 == false && pieza7_m5 == false && pieza8_m5 == false && pieza9_m5 == false){
           
            $("#puzzle6_pieza3").css("top", "11%");
            $("#puzzle6_pieza3").css("left", "67%");
            pieza3_m5 = true;

            puzzle6_piezas_sound.play();
    
        }
    
        if (puzzle6_pieza4 == true  && pieza2_m5 == false && pieza3_m5 == false && pieza1_m5 == false && pieza5_m5 == false && pieza6_m5 == false && pieza7_m5 == false && pieza8_m5 == false && pieza9_m5 == false){
           
            $("#puzzle6_pieza4").css("top", "11%");
            $("#puzzle6_pieza4").css("left", "67%");
            pieza4_m5 = true;

            puzzle6_piezas_sound.play();
    
        }
    
        if (puzzle6_pieza5 == true  && pieza2_m5 == false && pieza3_m5 == false && pieza4_m5 == false && pieza1_m5 == false && pieza6_m5 == false && pieza7_m5 == false && pieza8_m5 == false && pieza9_m5 == false){
           
            $("#puzzle6_pieza5").css("top", "11%");
            $("#puzzle6_pieza5").css("left", "67%");
            pieza5_m5 = true;

            puzzle6_piezas_sound.play();
    
        }
    
        if (puzzle6_pieza6 == true  && pieza2_m5 == false && pieza3_m5 == false && pieza4_m5 == false && pieza5_m5 == false && pieza1_m5 == false && pieza7_m5 == false && pieza8_m5 == false && pieza9_m5 == false){
           
            $("#puzzle6_pieza6").css("top", "11%");
            $("#puzzle6_pieza6").css("left", "67%");
            pieza6_m5 = true;

            puzzle6_piezas_sound.play();
    
        }
    
        if (puzzle6_pieza7 == true  && pieza2_m5 == false && pieza3_m5 == false && pieza4_m5 == false && pieza5_m5 == false && pieza6_m5 == false && pieza1_m5 == false && pieza8_m5 == false && pieza9_m5 == false){
           
            $("#puzzle6_pieza7").css("top", "11%");
            $("#puzzle6_pieza7").css("left", "67%");
            pieza7_m5 = true;

            puzzle6_piezas_sound.play();
    
        }
    
        if (puzzle6_pieza8 == true  && pieza2_m5 == false && pieza3_m5 == false && pieza4_m5 == false && pieza5_m5 == false && pieza6_m5 == false && pieza7_m5 == false && pieza1_m5 == false && pieza9_m5 == false){
           
            $("#puzzle6_pieza8").css("top", "11%");
            $("#puzzle6_pieza8").css("left", "67%");
            pieza8_m5 = true;

            puzzle6_piezas_sound.play();
    
        }
    
        if (puzzle6_pieza9 == true  && pieza2_m5 == false && pieza3_m5 == false && pieza4_m5 == false && pieza5_m5 == false && pieza6_m5 == false && pieza7_m5 == false && pieza8_m5 == false && pieza1_m5 == false){
           
            $("#puzzle6_pieza9").css("top", "11%");
            $("#puzzle6_pieza9").css("left", "67%");
            pieza9_m5 = true;

            puzzle6_piezas_sound.play();
    
        }

        


    }
});



    //MANCHA6


$("#puzzle6_m6").droppable({
    
    drop: function( event, ui ) {

        if (puzzle6_pieza1 == true  && pieza2_m6 == false && pieza3_m6 == false && pieza4_m6 == false && pieza5_m6 == false && pieza6_m6 == false && pieza7_m6 == false && pieza8_m6 == false && pieza9_m6 == false){
            $("#puzzle6_pieza1").css("top", "44%");
            $("#puzzle6_pieza1").css("left", "67%");
            pieza1_m6 = true;

            puzzle6_piezas_sound.play();
        }

        if (puzzle6_pieza2 == true  && pieza1_m6 == false && pieza3_m6 == false && pieza4_m6 == false && pieza5_m6 == false && pieza6_m6 == false && pieza7_m6 == false && pieza8_m6 == false && pieza9_m6 == false){
       
            $("#puzzle6_pieza2").css("top", "44%");
            $("#puzzle6_pieza2").css("left", "67%");
            pieza2_m6 = true;

            puzzle6_piezas_sound.play();
    
        }
    
        if (puzzle6_pieza3 == true  && pieza2_m6 == false && pieza1_m6 == false && pieza4_m6 == false && pieza5_m6 == false && pieza6_m6 == false && pieza7_m6 == false && pieza8_m6 == false && pieza9_m6 == false){
           
            $("#puzzle6_pieza3").css("top", "44%");
            $("#puzzle6_pieza3").css("left", "67%");
            pieza3_m6 = true;

            puzzle6_piezas_sound.play();
    
        }
    
        if (puzzle6_pieza4 == true  && pieza2_m6 == false && pieza3_m6 == false && pieza1_m6 == false && pieza5_m6 == false && pieza6_m6 == false && pieza7_m6 == false && pieza8_m6 == false && pieza9_m6 == false){
           
            $("#puzzle6_pieza4").css("top", "44%");
            $("#puzzle6_pieza4").css("left", "67%");
            pieza4_m6 = true;

            puzzle6_piezas_sound.play();
    
        }
    
        if (puzzle6_pieza5 == true  && pieza2_m6 == false && pieza3_m6 == false && pieza4_m6 == false && pieza1_m6 == false && pieza6_m6 == false && pieza7_m6 == false && pieza8_m6 == false && pieza9_m6 == false){
           
            $("#puzzle6_pieza5").css("top", "44%");
            $("#puzzle6_pieza5").css("left", "67%");
            pieza5_m6 = true;

            puzzle6_piezas_sound.play();
    
        }
    
        if (puzzle6_pieza6 == true  && pieza2_m6 == false && pieza3_m6 == false && pieza4_m6 == false && pieza5_m6 == false && pieza1_m6 == false && pieza7_m6 == false && pieza8_m6 == false && pieza9_m6 == false){
           
            $("#puzzle6_pieza6").css("top", "44%");
            $("#puzzle6_pieza6").css("left", "67%");
            pieza6_m6 = true;

            puzzle6_piezas_sound.play();
    
        }
    
        if (puzzle6_pieza7 == true  && pieza2_m6 == false && pieza3_m6 == false && pieza4_m6 == false && pieza5_m6 == false && pieza6_m6 == false && pieza1_m6 == false && pieza8_m6 == false && pieza9_m6 == false){
           
            $("#puzzle6_pieza7").css("top", "44%");
            $("#puzzle6_pieza7").css("left", "67%");
            pieza7_m6 = true;

            puzzle6_piezas_sound.play();
    
        }
    
        if (puzzle6_pieza8 == true  && pieza2_m6 == false && pieza3_m6 == false && pieza4_m6 == false && pieza5_m6 == false && pieza6_m6 == false && pieza7_m6 == false && pieza1_m6 == false && pieza9_m6 == false){
           
            $("#puzzle6_pieza8").css("top", "44%");
            $("#puzzle6_pieza8").css("left", "67%");
            pieza8_m6 = true;

            puzzle6_piezas_sound.play();
    
        }
    
        if (puzzle6_pieza9 == true  && pieza2_m6 == false && pieza3_m6 == false && pieza4_m6 == false && pieza5_m6 == false && pieza6_m6 == false && pieza7_m6 == false && pieza8_m6 == false && pieza1_m6 == false){
           
            $("#puzzle6_pieza9").css("top", "44%");
            $("#puzzle6_pieza9").css("left", "67%");
            pieza9_m6 = true;

            puzzle6_piezas_sound.play();
    
        }

        


    }
});





    //MANCHA7

$("#puzzle6_m7").droppable({
    
    drop: function( event, ui ) {

        if (puzzle6_pieza1 == true  && pieza2_m7 == false && pieza3_m7 == false && pieza4_m7 == false && pieza5_m7 == false && pieza6_m7 == false && pieza7_m7 == false && pieza8_m7 == false && pieza9_m7 == false){
            $("#puzzle6_pieza1").css("top", "78%");
            $("#puzzle6_pieza1").css("left", "68%");
            pieza1_m7 = true;

            puzzle6_piezas_sound.play();
        }

        if (puzzle6_pieza2 == true  && pieza1_m7 == false && pieza3_m7 == false && pieza4_m7 == false && pieza5_m7 == false && pieza6_m7 == false && pieza7_m7 == false && pieza8_m7 == false && pieza9_m7 == false){
       
            $("#puzzle6_pieza2").css("top", "78%");
            $("#puzzle6_pieza2").css("left", "68%");
            pieza2_m7 = true;

            puzzle6_piezas_sound.play();
    
        }
    
        if (puzzle6_pieza3 == true  && pieza2_m7 == false && pieza1_m7 == false && pieza4_m7 == false && pieza5_m7 == false && pieza6_m7 == false && pieza7_m7 == false && pieza8_m7 == false && pieza9_m7 == false){
           
            $("#puzzle6_pieza3").css("top", "78%");
            $("#puzzle6_pieza3").css("left", "68%");
            pieza3_m7 = true;

            puzzle6_piezas_sound.play();
    
        }
    
        if (puzzle6_pieza4 == true  && pieza2_m7 == false && pieza3_m7 == false && pieza1_m7 == false && pieza5_m7 == false && pieza6_m7 == false && pieza7_m7 == false && pieza8_m7 == false && pieza9_m7 == false){
           
            $("#puzzle6_pieza4").css("top", "78%");
            $("#puzzle6_pieza4").css("left", "68%");
            pieza4_m7 = true;

            puzzle6_piezas_sound.play();
    
        }
    
        if (puzzle6_pieza5 == true  && pieza2_m7 == false && pieza3_m7 == false && pieza4_m7 == false && pieza1_m7 == false && pieza6_m7 == false && pieza7_m7 == false && pieza8_m7 == false && pieza9_m7 == false){
           
            $("#puzzle6_pieza5").css("top", "78%");
            $("#puzzle6_pieza5").css("left", "68%");
            pieza5_m7 = true;

            puzzle6_piezas_sound.play();
    
        }
    
        if (puzzle6_pieza6 == true  && pieza2_m7 == false && pieza3_m7 == false && pieza4_m7 == false && pieza5_m7 == false && pieza1_m7 == false && pieza7_m7 == false && pieza8_m7 == false && pieza9_m7 == false){
           
            $("#puzzle6_pieza6").css("top", "78%");
            $("#puzzle6_pieza6").css("left", "68%");
            pieza6_m7 = true;

            puzzle6_piezas_sound.play();
    
        }
    
        if (puzzle6_pieza7 == true  && pieza2_m7 == false && pieza3_m7 == false && pieza4_m7 == false && pieza5_m7 == false && pieza6_m7 == false && pieza1_m7 == false && pieza8_m7 == false && pieza9_m7 == false){
           
            $("#puzzle6_pieza7").css("top", "78%");
            $("#puzzle6_pieza7").css("left", "68%");
            pieza7_m7 = true;

            puzzle6_piezas_sound.play();
    
        }
    
        if (puzzle6_pieza8 == true  && pieza2_m7 == false && pieza3_m7 == false && pieza4_m7 == false && pieza5_m7 == false && pieza6_m7 == false && pieza7_m7 == false && pieza1_m7 == false && pieza9_m7 == false){
           
            $("#puzzle6_pieza8").css("top", "78%");
            $("#puzzle6_pieza8").css("left", "68%");
            pieza8_m7 = true;

            puzzle6_piezas_sound.play();
    
        }
    
        if (puzzle6_pieza9 == true  && pieza2_m7 == false && pieza3_m7 == false && pieza4_m7 == false && pieza5_m7 == false && pieza6_m7 == false && pieza7_m7 == false && pieza8_m7 == false && pieza1_m7 == false){
           
            $("#puzzle6_pieza9").css("top", "78%");
            $("#puzzle6_pieza9").css("left", "68%");
            pieza9_m7 = true;

            puzzle6_piezas_sound.play();
    
        }

        


    }
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

            $("#puzzle6_pt_txt").html('Hay varias soluciones posibles, así que lo mejor es ser paciente y seguir intentándolo. Si la paciencia no es una de tus virtudes, aquí tienes una pista más obvia: puedes descartar la ficha 5.');

            puzzle6_pt++;
            puntos--;
        break;

        case 1:
            $("#puzzle6_pt").show();

            $("#puzzle6_cont").css("-webkit-filter", "blur(10px)");
            $("#cerrar_btn6").css("-webkit-filter", "blur(10px)");

            $("#puzzle6_p2").css("background-color", "chocolate");
            $("#puzzle6_p2").css("cursor", "pointer");

            $("#puzzle6_pt_txt").html('La ficha 5 no se usa en la solución, ni tampoco la ficha 7. Ahora que ya sabes cuáles son las fichas que sí necesitas, vuelve a intentar encontrar la solución.');

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

            $("#puzzle6_pt_txt").html('El resultado de cada multiplicación en este puzle tiene que ser 72. Si todavía necesitas una pista, ahí va: coloca la ficha 2 en el centro.');

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

        $("#puzzle6_pt_txt").html('Hay varias soluciones posibles, así que lo mejor es ser paciente y seguir intentándolo. Si la paciencia no es una de tus virtudes, aquí tienes una pista más obvia: puedes descartar la ficha 5.');

    }

});


$("#puzzle6_p2").click(function(){

    if(puzzle6_pt > 1){

        $("#puzzle6_pt").show();

        $("#puzzle6_cont").css("-webkit-filter", "blur(10px)");
        $("#cerrar_btn6").css("-webkit-filter", "blur(10px)");

        $("#puzzle6_pt_txt").html('La ficha 5 no se usa en la solución, ni tampoco la ficha 7. Ahora que ya sabes cuáles son las fichas que sí necesitas, vuelve a intentar encontrar la solución.');

    }

});

$("#puzzle6_p3").click(function(){

    if(puzzle6_pt > 2){

        $("#puzzle6_pt").show();

        $("#puzzle6_cont").css("-webkit-filter", "blur(10px)");
        $("#cerrar_btn6").css("-webkit-filter", "blur(10px)");

        $("#puzzle6_pt_txt").html('El resultado de cada multiplicación en este puzle tiene que ser 72. Si todavía necesitas una pista, ahí va: coloca la ficha 2 en el centro.');

    }

});



    //CERRAR PISTAS PUZZLE 6
 $("#cerrar_pista_p6").click(function(){

    $("#puzzle6_pt").hide();

    $("#puzzle6_cont").css("-webkit-filter", "blur(0px)");
    $("#cerrar_btn6").css("-webkit-filter", "blur(0px)");
});




    
    
        //COMPROBAR PUZZLE 6 
    $("#puzzle6_btn2").click(function(){

        if ( pieza3_m1 == true && pieza4_m2 == true && pieza6_m3 == true && pieza2_m4 == true && pieza1_m5 == true && pieza9_m6 == true && pieza8_m7 == true){
            $("#puzzle6_acierto").show();
    
            $("#puzzle6_cont").css("-webkit-filter", "blur(10px)");
            $("#cerrar_btn6").css("-webkit-filter", "blur(10px)");
            

        } else if (pieza3_m3 == true && pieza4_m2 == true && pieza6_m1 == true && pieza2_m4 == true && pieza1_m5 == true && pieza9_m6 == true && pieza8_m7 == true){

            $("#puzzle6_acierto").show();
    
            $("#puzzle6_cont").css("-webkit-filter", "blur(10px)");
            $("#cerrar_btn6").css("-webkit-filter", "blur(10px)");
            


        } else if (pieza3_m1 == true && pieza4_m2 == true && pieza6_m3 == true && pieza2_m4 == true && pieza1_m7 == true && pieza9_m6 == true && pieza8_m5 == true){

            $("#puzzle6_acierto").show();
    
            $("#puzzle6_cont").css("-webkit-filter", "blur(10px)");
            $("#cerrar_btn6").css("-webkit-filter", "blur(10px)");
            

        } else if (pieza3_m3 == true && pieza4_m2 == true && pieza6_m1 == true && pieza2_m4 == true && pieza1_m7 == true && pieza9_m6 == true && pieza8_m5 == true){

            $("#puzzle6_acierto").show();
    
            $("#puzzle6_cont").css("-webkit-filter", "blur(10px)");
            $("#cerrar_btn6").css("-webkit-filter", "blur(10px)");
            

        } else {

            $("#puzzle6_error").show();
    
    
            $("#puzzle6_cont").css("-webkit-filter", "blur(10px)");
            $("#cerrar_btn6").css("-webkit-filter", "blur(10px)");

        }
    
        
    });
    
    
    
        //ACERTAR PUZZLE 6
    $("#puzzle6_btn3").click(function(){
    
        $("#puzzle6").hide();
        $("#help").show();
        $("#final").show();
    
        $("#zombie_closed").show();
        $("#zombie_closed").css("-webkit-filter", "grayscale(1)");
        $("#puzzle6_btn").css("-webkit-filter", "grayscale(1)");

        $("#puzzle6_btn").css("animation-name", "none");
        
        
        $("#mapa").css("-webkit-filter", "blur(0px)");
        $("#fondo_negro_inicio").fadeIn(3000);

        
        $('#musica_puzzle6').animate({volume: 0}, 1500);


        //FINALES

        if( puntos < 6 ){

            $("#final_txt").html('Esta es el final 3, es decir, la puntuación obtenida está entre 0 y 5');
            
        
        } else if ( puntos < 13 ){

            $("#final_txt").html('Esta es el final 2, es decir, la puntuación obtenida está entre 6 y 12');
            
        } else {

            $("#final_txt").html('Esta es el final 1, es decir, la puntuación obtenida está entre 13 y 18');
            
        } 
        
    });
    


    //FALLAR PUZZLE 6
    $("#puzzle6_btn4").click(function(){
    
        $("#puzzle6_error").hide();
        
        $("#puzzle6_cont").css("-webkit-filter", "blur(0px)");
        $("#cerrar_btn6").css("-webkit-filter", "blur(0px)");



            
        $("#puzzle6_pieza1").css("top", "2%");
        $("#puzzle6_pieza1").css("left", "2%");

        $("#puzzle6_pieza2").css("top", "22%");
        $("#puzzle6_pieza2").css("left", "2%");

        $("#puzzle6_pieza3").css("top", "42%");
        $("#puzzle6_pieza3").css("left", "2%");

        $("#puzzle6_pieza4").css("top", "62%");
        $("#puzzle6_pieza4").css("left", "2%");

        $("#puzzle6_pieza5").css("top", "82%");
        $("#puzzle6_pieza5").css("left", "2%");

        $("#puzzle6_pieza6").css("top", "22%");
        $("#puzzle6_pieza6").css("left", "89%");

        $("#puzzle6_pieza7").css("top", "42%");
        $("#puzzle6_pieza7").css("left", "89%");

        $("#puzzle6_pieza8").css("top", "62%");
        $("#puzzle6_pieza8").css("left", "89%");

        $("#puzzle6_pieza9").css("top", "82%");
        $("#puzzle6_pieza9").css("left", "89%");

        pieza1_m1 = false;
        pieza1_m2 = false;
        pieza1_m3 = false;
        pieza1_m4 = false;
        pieza1_m5 = false;
        pieza1_m6 = false;
        pieza1_m7 = false;
        pieza2_m1 = false;
        pieza2_m2 = false;
        pieza2_m3 = false;
        pieza2_m4 = false;
        pieza2_m5 = false;
        pieza2_m6 = false;
        pieza2_m7 = false;
        pieza3_m1 = false;
        pieza3_m2 = false;
        pieza3_m3 = false;
        pieza3_m4 = false;
        pieza3_m5 = false;
        pieza3_m6 = false;
        pieza3_m7 = false;
        pieza4_m1 = false;
        pieza4_m2 = false;
        pieza4_m3 = false;
        pieza4_m4 = false;
        pieza4_m5 = false;
        pieza4_m6 = false;
        pieza4_m7 = false;
        pieza5_m1 = false;
        pieza5_m2 = false;
        pieza5_m3 = false;
        pieza5_m4 = false;
        pieza5_m5 = false;
        pieza5_m6 = false;
        pieza5_m7 = false;
        pieza6_m1 = false;
        pieza6_m2 = false;
        pieza6_m3 = false;
        pieza6_m4 = false;
        pieza6_m5 = false;
        pieza6_m6 = false;
        pieza6_m7 = false;
        pieza7_m1 = false;
        pieza7_m2 = false;
        pieza7_m3 = false;
        pieza7_m4 = false;
        pieza7_m5 = false;
        pieza7_m6 = false;
        pieza7_m7 = false;
        pieza8_m1 = false;
        pieza8_m2 = false;
        pieza8_m3 = false;
        pieza8_m4 = false;
        pieza8_m5 = false;
        pieza8_m6 = false;
        pieza8_m7 = false;
        pieza9_m1 = false;
        pieza9_m2 = false;
        pieza9_m3 = false;
        pieza9_m4 = false;
        pieza9_m5 = false;
        pieza9_m6 = false;
        pieza9_m7 = false;
    });


  

//VOLVER A JUGAR 
$("#final_btn").click(function(){
    
    location.reload();
});







