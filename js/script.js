//INICIALIZACION

$("#inst").hide();
$("#puzzle1").hide();
$("#puzzle2").hide();
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


//BOTON PUZZLE 1
$("#puzzle1_btn").click(function(){

    $("#puzzle1").show();

    $("#mapa").css("-webkit-filter", "blur(10px)");
});

//BOTON PUZZLE 2
$("#puzzle2_btn").click(function(){

    $("#puzzle2").show();

    $("#mapa").css("-webkit-filter", "blur(10px)");
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



