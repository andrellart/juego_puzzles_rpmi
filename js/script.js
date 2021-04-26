//INICIALIZACION

$("#inst").hide();

$("#puzzle1").hide();
$("#pirata_closed").hide();
$("#puzzle1_cont").hide();
$("#puzzle1_acierto").hide();
$("#puzzle1_error").hide();

$("#puzzle2").hide();
$("#puzzle2_cont").hide();
$("#puzzle2_acierto").hide();
$("#puzzle2_error").hide();


$("#puzzle3").hide();
$("#puzzle4").hide();
$("#puzzle5").hide();
$("#puzzle6").hide();







//ABRIR VENTANA DE INSTRUCCIONES

$("#inicio_btn2").click(function(){

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

});




// PUZZLE 1
$("#puzzle1_btn").click(function(){

    $("#puzzle1").show();

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
    $("#puzzle1_cont").hide();
    $("#puzzle1_inicio").show();


    $("#mapa").css("-webkit-filter", "blur(0px)");
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

    $("#pirata_closed").show();
    $("#narco_closed").hide();
    
    $("#mapa").css("-webkit-filter", "blur(0px)");
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
    
    
        $("#mapa").css("-webkit-filter", "blur(0px)");
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
    
        $("#narco_closed").show();
        $("#narco_closed").css("-webkit-filter", "grayscale(1)");
        
        
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

    $("#mapa").css("-webkit-filter", "blur(10px)");
});

//BOTON PUZZLE 4
$("#puzzle4_btn").click(function(){

    $("#puzzle4").show();

    $("#mapa").css("-webkit-filter", "blur(10px)");
});

//BOTON PUZZLE 5
$("#puzzle5_btn").click(function(){

    $("#puzzle5").show();

    $("#mapa").css("-webkit-filter", "blur(10px)");
});

//BOTON PUZZLE 6
$("#puzzle6_btn").click(function(){

    $("#puzzle6").show();

    $("#mapa").css("-webkit-filter", "blur(10px)");
});





