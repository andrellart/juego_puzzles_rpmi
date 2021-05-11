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

let musica_puzzle2 = document.getElementById("musica_puzzle2")
musica_puzzle2.loop = true

let musica_puzzle3 = document.getElementById("musica_puzzle3")
musica_puzzle3.loop = true

let musica_puzzle4 = document.getElementById("musica_puzzle4")
musica_puzzle4.loop = true

//puzle2

let narcoa = false
let narcob = false
let narcoc = false

//Puzle 3 
/* Ramitas */

let angulo1_1 = 0;
let angulo1_2 = 0;
let angulo1_3 = 0;
let angulo1_4 = 0;
let angulo1_5 = 0;
let angulo1_6 = 0;
let angulo1_7 = 0;
let angulo1_8 = 0;
let angulo1_9 = 0;
let angulo1_10 = 0;
let angulo1_11 = 0;
let angulo1_12 = 0;
let angulo1_13 = 0;
let angulo1_14 = 0;
let angulo1_15 = 0;
let angulo1_16 = 0;
let angulo1_17 = 0;
let angulo1_18 = 0;
let angulo1_19 = 0;
let angulo1_20 = 0;

/* Ramitas */
//Puzzle 4
/* manijas */

let angulo41 = 0;
let angulo42 = 0;
let angulo43 = 0;
let angulo44 = 0;
let angulo45 = 0;
let angulo46 = 0;

/*manijas */

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
    musica_puzzle2.currenttime = 0
    musica_puzzle2.play();
    $("#musica_puzzle2").animate({volume:1}, 0);
});


    //COMENZAR PUZZLE 2

    $("#puzzle2_btn1").click(function(){

        $("#puzzle2_cont").show();
        $("#puzzle2_inicio").hide();
        
        
    });

    $("#narcoa").click(function(){
      if(narcoa == false){
        narcoa = true ;
        narcob = false ;
        narcoc = false ;
        document.getElementById("narcoa").src="../img/narco_a_choose.png";
        document.getElementById("narcob").src="../img/narco_b.png";
        document.getElementById("narcoc").src="../img/narco_c.png";
      }
      else{
        narcoa = false ;
        narcob = false ;
        narcoc = false ;
        document.getElementById("narcoa").src="../img/narco_a.png";
      }
    });

    $("#narcob").click(function(){
      if(narcob == false){
        
        narcoa = false ;
        narcob = true ;
        narcoc = false ;
        document.getElementById("narcob").src="../img/narco_b_choose.png";
        document.getElementById("narcoa").src="../img/narco_a.png";
        document.getElementById("narcoc").src="../img/narco_c.png"
        
      }
      else{
        narcoa = false ;
        narcob = false ;
        narcoc = false ;
        document.getElementById("narcob").src="../img/narco_b.png";
      }
    });

    $("#narcoc").click(function(){
      if(narcoc == false){
        
        narcoa = false ;
        narcob = false ;
        narcoc = true ;
        document.getElementById("narcoc").src="../img/narco_c_choose.png";
        document.getElementById("narcoa").src="../img/narco_a.png";
        document.getElementById("narcob").src="../img/narco_b.png";
      }
      else{
        narcoa = false ;
        narcob = false ;
        narcoc = false ;
        document.getElementById("narcoc").src="../img/narco_c.png"
      }
    });

        //CERRAR PUZZLE 2
    $("#cerrar_btn2").click(function(){
    
        $("#puzzle2").hide();
        $("#puzzle2_cont").hide();
        $("#puzzle2_inicio").show();
        $("#help").show();
    
        $("#musica_puzzle2").animate({volume: 0}, 500);
        
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

            $("#puzzle2_pt_txt").html('El area se calculaba Base x Altura');

            puzzle2_pt++;
            puntos--;
        break;

        case 1:
            $("#puzzle2_pt").show();

            $("#puzzle2_cont").css("-webkit-filter", "blur(10px)");
            $("#cerrar_btn2").css("-webkit-filter", "blur(10px)");

            $("#puzzle2_p2").css("background-color", "chocolate");
            $("#puzzle2_p2").css("cursor", "pointer");

            $("#puzzle2_pt_txt").html('Hay otro método... puedes encontrar la solución si sumas la longitud de valla de todas las parcelas');

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

            $("#puzzle2_pt_txt").html('Señala la parcela que tenga mas laditos de cuadraditos.');

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

        $("#puzzle2_pt_txt").html('El area se calculaba Base x Altura');

    }

});


$("#puzzle2_p2").click(function(){

    if(puzzle2_pt > 1){

        $("#puzzle2_pt").show();

        $("#puzzle2_cont").css("-webkit-filter", "blur(10px)");
        $("#cerrar_btn2").css("-webkit-filter", "blur(10px)");

        $("#puzzle2_pt_txt").html('Hay otro método... puedes encontrar la solución si sumas la longitud de valla de todas las parcelas');

    }

});

$("#puzzle2_p3").click(function(){

    if(puzzle2_pt > 2){

        $("#puzzle2_pt").show();

        $("#puzzle2_cont").css("-webkit-filter", "blur(10px)");
        $("#cerrar_btn2").css("-webkit-filter", "blur(10px)");

        $("#puzzle2_pt_txt").html('Señala la parcela que tenga mas laditos de cuadraditos.');

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
        if(narcoa == true){
        $("#puzzle2_acierto").show();
    
        $("#puzzle2_cont").css("-webkit-filter", "blur(10px)");
        $("#cerrar_btn2").css("-webkit-filter", "blur(10px)");
      }
      else{
        $("#puzzle2_error").show();
    
        $("#puzzle2_cont").css("-webkit-filter", "blur(10px)");
        $("#cerrar_btn2").css("-webkit-filter", "blur(10px)");
      }
    });
    
    
        //ACERTAR PUZZLE 2
    $("#puzzle2_btn3").click(function(){
    
        $("#puzzle2").hide();
        $("#help").show();
    
        $("#narco_closed").show();
        $("#bosque_closed").hide();
        $("#bosque_lock").hide();
        $("#narco_closed").css("-webkit-filter", "grayscale(1)");
        
        
        $("#mapa").css("-webkit-filter", "blur(0px)");

        $("#musica_puzzle2").animate({volume: 0}, 1500);
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
    musica_puzzle3.currenttime = 0
    musica_puzzle3.play();
    $("#musica_puzzle3").animate({volume:1}, 0);
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

    $("#musica_puzzle3").animate({volume: 0}, 500);

    $("#mapa").css("-webkit-filter", "blur(0px)");
});

/*Ramitas*/

$("#lolo1_1").rotate({bind:{
    click: function(){
      $(this).rotate({
        angle: angulo1_1,
        animateTo: angulo1_1+90,
        })
        angulo1_1=angulo1_1+90;
        if(angulo1_1==360){
          angulo1_1=0;
        }
        console.log(angulo1_1);
      }
    }
  });

 $("#lolo1_2").rotate({bind:{
    click: function(){
      $(this).rotate({
        angle: angulo1_2,
        animateTo: angulo1_2+90,
        })
        angulo1_2=angulo1_2+90;
        if(angulo1_2==360){
          angulo1_2=0;
        }
        console.log(angulo1_2);
      }
    }
  });

  $("#lolo1_3").rotate({bind:{
    click: function(){
      $(this).rotate({
        angle: angulo1_3,
        animateTo: angulo1_3+90,
        })
        angulo1_3=angulo1_3+90;
        if(angulo1_3==360){
          angulo1_3=0;
        }
        console.log(angulo1_3);
      }
    }
  });

  $("#lolo1_4").rotate({bind:{
    click: function(){
      $(this).rotate({
        angle: angulo1_4,
        animateTo: angulo1_4+90,
        })
        angulo1_4=angulo1_4+90;
        if(angulo1_4==360){
          angulo1_4=0;
        }
        console.log(angulo1_4);
      }
    }
  });

  $("#lolo1_5").rotate({bind:{
    click: function(){
      $(this).rotate({
        angle: angulo1_5,
        animateTo: angulo1_5+90,
        })
        angulo1_5=angulo1_5+90;
        if(angulo1_5==360){
          angulo1_5=0;
        }
        console.log(angulo1_5);
      }
    }
  });

    $("#lolo1_6").rotate({bind:{
    click: function(){
      $(this).rotate({
        angle: angulo1_6,
        animateTo: angulo1_6+90,
        })
        angulo1_6=angulo1_6+90;
        if(angulo1_6==360){
          angulo1_6=0;
        }
        console.log(angulo1_6);
      }
    }
  });
  
  $("#lolo1_7").rotate({bind:{
    click: function(){
      $(this).rotate({
        angle: angulo1_7,
        animateTo: angulo1_7+90,
        })
        angulo1_7=angulo1_7+90;
        if(angulo1_7==360){
          angulo1_7=0;
        }
        console.log(angulo1_7);
      }
    }
  });

  $("#lolo1_8").rotate({bind:{
    click: function(){
      $(this).rotate({
        angle: angulo1_8,
        animateTo: angulo1_8+90,
        })
        angulo1_8=angulo1_8+90;
        if(angulo1_8==360){
          angulo1_8=0;
        }
        console.log(angulo1_8);
      }
    }
  });

  $("#lolo1_9").rotate({bind:{
    click: function(){
      $(this).rotate({
        angle: angulo1_9,
        animateTo: angulo1_9+90,
        })
        angulo1_9=angulo1_9+90;
        if(angulo1_9==360){
          angulo1_9=0;
        }
        console.log(angulo1_9);
      }
    }
  });

  $("#lolo1_10").rotate({bind:{
    click: function(){
      $(this).rotate({
        angle: angulo1_10,
        animateTo: angulo1_10+90,
        })
        angulo1_10=angulo1_10+90;
        if(angulo1_10==360){
          angulo1_10=0;
        }
        console.log(angulo1_10);
      }
    }
  });

  $("#lolo1_11").rotate({bind:{
    click: function(){
      $(this).rotate({
        angle: angulo1_11,
        animateTo: angulo1_11+90,
        })
        angulo1_11=angulo1_11+90;
        if(angulo1_11==360){
          angulo1_11=0;
        }
        console.log(angulo1_11);
      }
    }
  });

  $("#lolo1_12").rotate({bind:{
    click: function(){
      $(this).rotate({
        angle: angulo1_12,
        animateTo: angulo1_12+90,
        })
        angulo1_12=angulo1_12+90;
        if(angulo1_12==360){
          angulo1_12=0;
        }
        console.log(angulo1_12);
      }
    }
  });

  $("#lolo1_13").rotate({bind:{
    click: function(){
      $(this).rotate({
        angle: angulo1_13,
        animateTo: angulo1_13+90,
        })
        angulo1_13=angulo1_13+90;
        if(angulo1_13==360){
          angulo1_13=0;
        }
        console.log(angulo1_13);
      }
    }
  });

  $("#lolo1_14").rotate({bind:{
    click: function(){
      $(this).rotate({
        angle: angulo1_14,
        animateTo: angulo1_14+90,
        })
        angulo1_14=angulo1_14+90;
        if(angulo1_14==360){
          angulo1_14=0;
        }
        console.log(angulo1_14);
      }
    }
  });

  $("#lolo1_15").rotate({bind:{
    click: function(){
      $(this).rotate({
        angle: angulo1_15,
        animateTo: angulo1_15+90,
        })
        angulo1_15=angulo1_15+90;
        if(angulo1_15==360){
          angulo1_15=0;
        }
        console.log(angulo1_15);
      }
    }
  });

  $("#lolo1_16").rotate({bind:{
    click: function(){
      $(this).rotate({
        angle: angulo1_16,
        animateTo: angulo1_16+90,
        })
        angulo1_16=angulo1_16+90;
        if(angulo1_16==360){
          angulo1_16=0;
        }
        console.log(angulo1_16);
      }
    }
  });8
  $("#lolo1_17").rotate({bind:{
    click: function(){
      $(this).rotate({
        angle: angulo1_17,
        animateTo: angulo1_17+90,
        })
        angulo1_17=angulo1_17+90;
        if(angulo1_17==360){
          angulo1_17=0;
        }
        console.log(angulo1_17);
      }
    }
  });

  $("#lolo1_18").rotate({bind:{
    click: function(){
      $(this).rotate({
        angle: angulo1_18,
        animateTo: angulo1_18+90,
        })
        angulo1_18=angulo1_18+90;
        if(angulo1_18==360){
          angulo1_18=0;
        }
        console.log(angulo1_18);
      }
    }
  });

  $("#lolo1_19").rotate({bind:{
    click: function(){
      $(this).rotate({
        angle: angulo1_19,
        animateTo: angulo1_19+90,
        })
        angulo1_19=angulo1_19+90;
        if(angulo1_19==360){
          angulo1_19=0;
        }
        console.log(angulo1_19);
      }
    }
  });

  $("#lolo1_20").rotate({bind:{
    click: function(){
      $(this).rotate({
        angle: angulo1_20,
        animateTo: angulo1_20+90,
        })
        angulo1_20=angulo1_20+90;
        if(angulo1_20==360){
          angulo1_20=0;
        }
        console.log(angulo1_20);
      }
    }
  });

  /*Ramitas*/

    //COGER PISTAS PUZLE 3
 $("#pista3_btn").click(function(){


    switch(puzzle3_pt){
        case 0:
            $("#puzzle3_pt").show();

            $("#puzzle3_cont").css("-webkit-filter", "blur(10px)");
            $("#cerrar_btn3").css("-webkit-filter", "blur(10px)");

            $("#puzzle3_p1").css("background-color", "chocolate");
            $("#puzzle3_p1").css("cursor","pointer");

            $("#puzzle3_pt_txt").html('Mira que guay compañero, parece que estas ramitas apuntan en diferentes direcciones');

            puzzle3_pt++;
            puntos--;
        break;

        case 1:
            $("#puzzle3_pt").show();

            $("#puzzle3_cont").css("-webkit-filter", "blur(10px)");
            $("#cerrar_btn3").css("-webkit-filter", "blur(10px)");

            $("#puzzle3_p2").css("background-color", "chocolate");
            $("#puzzle3_p2").css("cursor", "pointer");

            $("#puzzle3_pt_txt").html('Vale tío, si no lo haces bien te vas a perder y es algo que ningúno de nosotros quiere. Guia el reguero de ramas hacia la nave.');

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

            $("#puzzle3_pt_txt").html('Tu girar ramas dirección nave seguir camino GANAR GANAR GANAR.');

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

        $("#puzzle3_pt_txt").html('Mira que guay compañero, parece que estas ramitas apuntan en diferentes direcciones');

    }

});


$("#puzzle3_p2").click(function(){

    if(puzzle3_pt > 1){

        $("#puzzle3_pt").show();

        $("#puzzle3_cont").css("-webkit-filter", "blur(10px)");
        $("#cerrar_btn3").css("-webkit-filter", "blur(10px)");

        $("#puzzle3_pt_txt").html('Vale tío, si no lo haces bien te vas a perder y es algo que ningúno de nosotros quiere. Guia el reguero de ramas hacia la nave.');

    }

});

$("#puzzle3_p3").click(function(){

    if(puzzle3_pt > 2){

        $("#puzzle3_pt").show();

        $("#puzzle3_cont").css("-webkit-filter", "blur(10px)");
        $("#cerrar_btn3").css("-webkit-filter", "blur(10px)");

        $("#puzzle3_pt_txt").html('Tu girar ramas dirección nave seguir camino GANAR GANAR GANAR.');

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
   if( angulo1_6 == 270 && angulo1_1 == 0 && angulo1_2 == 0 && angulo1_3 == 90 && angulo1_8 == 90 && angulo1_13 == 90 && angulo1_19 == 270 && angulo1_14 == 270 && angulo1_9 == 0 && angulo1_10 == 90 && angulo1_15 == 0){
    $("#puzzle3_acierto").show();

    $("#puzzle3_cont").css("-webkit-filter", "blur(10px)");
    $("#cerrar_btn3").css("-webkit-filter", "blur(10px)");
   }
   else{
     $("#puzzle3_error").show();


     $("#puzzle3_cont").css("-webkit-filter", "blur(10px)");
     $("#cerrar_btn3").css("-webkit-filter", "blur(10px)");
   }
});

    //ACERTAR PUZZLE 3
$("#puzzle3_btn3").click(function(){

    $("#puzzle3").hide();
    $("#help").show();

    $("#bosque_closed").show();
    $("#bosque_closed").css("-webkit-filter", "grayscale(1)");
    $("#alien_closed").hide();
    $("#alien_lock").hide();
    
    
    $("#mapa").css("-webkit-filter", "blur(0px)");

    $("#musica_puzzle3").animate({volume: 0}, 1500);
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
    musica_puzzle4.currenttime = 0
    musica_puzzle4.play();
    $("#musica_puzzle4").animate({volume:1}, 0);
});


    //COMENZAR PUZZLE 4

    $("#puzzle4_btn1").click(function(){

        $("#puzzle4_cont").show();
        $("#puzzle4_inicio").hide();
        
        $("#musica_puzzle4").animate({volume:1}, 0);
        
    });
    
        //CERRAR PUZZLE 4
    $("#cerrar_btn4").click(function(){
    
        $("#puzzle4").hide();
        $("#help").show();
        $("#puzzle4_cont").hide();
        $("#puzzle4_inicio").show();
    
    
        $("#mapa").css("-webkit-filter", "blur(0px)");

        $("#musica_puzzle4").animate({volume: 0}, 500);
    });

    /* manijas */

    $("#lolo41").rotate({bind:{
      click: function(){
        $(this).rotate({
          angle: angulo41,
          animateTo: angulo41+45,
          })
          angulo41=angulo41+45;
          if(angulo41==360){
            angulo41=0;
          }
          console.log(angulo41);
        }
      }
    });

    $("#lolo42").rotate({bind:{
      click: function(){
        $(this).rotate({
          angle: angulo42,
          animateTo: angulo42+45,
          })
          angulo42=angulo42+45;
          if(angulo42==360){
            angulo42=0;
          }
          console.log(angulo42);
        }
      }
    });

    $("#lolo43").rotate({bind:{
      click: function(){
        $(this).rotate({
          angle: angulo43,
          animateTo: angulo43+45,
          })
          angulo43=angulo43+45;
          if(angulo43==360){
            angulo43=0;
          }
          console.log(angulo43);
        }
      }
    });

    $("#lolo44").rotate({bind:{
      click: function(){
        $(this).rotate({
          angle: angulo44,
          animateTo: angulo44+45,
          })
          angulo44=angulo44+45;
          if(angulo44==360){
            angulo44=0;
          }
          console.log(angulo44);
        }
      }
    });

    $("#lolo45").rotate({bind:{
      click: function(){
        $(this).rotate({
          angle: angulo45,
          animateTo: angulo45+45,
          })
          angulo45=angulo45+45;
          if(angulo45==360){
            angulo45=0;
          }
          console.log(angulo45);
        }
      }
    });

    $("#lolo46").rotate({bind:{
      click: function(){
        $(this).rotate({
          angle: angulo46,
          animateTo: angulo46+45,
          })
          angulo46=angulo46+45;
          if(angulo46==360){
            angulo65=0;
          }
          console.log(angulo46);
        }
      }
    });

    /* manijas */

    
    //COGER PISTAS PUZLE 4
$("#pista4_btn").click(function(){


    switch(puzzle4_pt){
        case 0:
            $("#puzzle4_pt").show();

            $("#puzzle4_cont").css("-webkit-filter", "blur(10px)");
            $("#cerrar_btn4").css("-webkit-filter", "blur(10px)");

            $("#puzzle4_p1").css("background-color", "chocolate");
            $("#puzzle4_p1").css("cursor", "pointer");

            $("#puzzle4_pt_txt").html('Haz click sobre las manijas para girarlas.');

            puzzle4_pt++;
            puntos--;
        break;

        case 1:
            $("#puzzle4_pt").show();

            $("#puzzle4_cont").css("-webkit-filter", "blur(10px)");
            $("#cerrar_btn4").css("-webkit-filter", "blur(10px)");

            $("#puzzle4_p2").css("background-color", "chocolate");
            $("#puzzle4_p2").css("cursor", "pointer");

            $("#puzzle4_pt_txt").html('El orden normal es de derecha a izquierda y de arriba a abajo.');

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

            $("#puzzle4_pt_txt").html('Busca las respuestas en google y marcalas crack.');

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

        $("#puzzle4_pt_txt").html('Haz click sobre las manijas para girarlas.');

    }

});


$("#puzzle4_p2").click(function(){

    if(puzzle4_pt > 1){

        $("#puzzle4_pt").show();

        $("#puzzle4_cont").css("-webkit-filter", "blur(10px)");
        $("#cerrar_btn4").css("-webkit-filter", "blur(10px)");

        $("#puzzle4_pt_txt").html('El orden normal es de derecha a izquierda y de arriba a abajo.');

    }

});

$("#puzzle4_p3").click(function(){

    if(puzzle4_pt > 2){

        $("#puzzle4_pt").show();

        $("#puzzle4_cont").css("-webkit-filter", "blur(10px)");
        $("#cerrar_btn4").css("-webkit-filter", "blur(10px)");

        $("#puzzle4_pt_txt").html('Busca las respuestas en google y marcalas crack.');

    }

});



    //CERRAR PISTAS PUZZLE 4
 $("#cerrar_pista_p4").click(function(){

    $("#puzzle4_pt").hide();

    $("#puzzle4_cont").css("-webkit-filter", "blur(0px)");
    $("#cerrar_btn4").css("-webkit-filter", "blur(0px)");
});
    
// $("#puzzle5_btn2").click(function(){
//   if( angulo41 == 45 && angulo42 == 0 && angulo43 ==180 && angulo44 == 315 && angulo45 == 45 && angulo46 == 135){
//     $("#puzzle5_acierto").show();

//     $("#puzzle5_cont").css("-webkit-filter", "blur(10px)");
//     $("#cerrar_btn5").css("-webkit-filter", "blur(10px)");
//   }
//   else{
//         $("#puzzle5_btn2").click(function(){

//     $("#puzzle5_error").show();


//     $("#puzzle5_cont").css("-webkit-filter", "blur(10px)");
//     $("#cerrar_btn5").css("-webkit-filter", "blur(10px)");
//   });
//   }
// });
    
    $("#puzzle4_btn2").click(function(){
      if( angulo41 == 45 && angulo42 == 0 && angulo43 ==180 && angulo44 == 315 && angulo45 == 45 && angulo46 == 135){
        $("#puzzle5_acierto").show();
        $("#puzzle4_acierto").show();
    
        $("#puzzle4_cont").css("-webkit-filter", "blur(10px)");
        $("#cerrar_btn4").css("-webkit-filter", "blur(10px)");
      }
      else{
        $("#puzzle4_error").show();
    
        $("#puzzle4_cont").css("-webkit-filter", "blur(10px)");
        $("#cerrar_btn4").css("-webkit-filter", "blur(10px)");
      }
    });
    
    /*
    //COMPROBAR PUZZLE 4 PROVISIONAL (SIEMPRE FALLA) --> ACTIVAR CUANDO CORRESPONDA
    $("#puzzle4_btn2").click(function(){
    
        
    */
    
        //ACERTAR PUZZLE 4
    $("#puzzle4_btn3").click(function(){
    
        $("#puzzle4").hide();
        $("#help").show();
    
        $("#alien_closed").show();
        $("#alien_closed").css("-webkit-filter", "grayscale(1)");
        $("#western_closed").hide();
        $("#western_lock").hide();
        
        
        $("#mapa").css("-webkit-filter", "blur(0px)");

        $("#musica_puzzle4").animate({volume: 0}, 1500);
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
      if( angulo41 == 45 && angulo42 == 0 && angulo43 ==180 && angulo44 == 315 && angulo45 == 45 && angulo46 == 135){
        $("#puzzle5_acierto").show();
    
        $("#puzzle5_cont").css("-webkit-filter", "blur(10px)");
        $("#cerrar_btn5").css("-webkit-filter", "blur(10px)");
      }
      else{
            $("#puzzle5_btn2").click(function(){
    
        $("#puzzle5_error").show();
    
    
        $("#puzzle5_cont").css("-webkit-filter", "blur(10px)");
        $("#cerrar_btn5").css("-webkit-filter", "blur(10px)");
      });
      }
    });
    
        //ACERTAR PUZZLE 5
    $("#puzzle5_btn3").click(function(){
    
        $("#puzzle5").hide();
        $("#help").show();
    
        $("#western_closed").show();
        $("#western_closed").css("-webkit-filter", "grayscale(1)");
        $("#zombie_closed").hide();
        $("#zombie_lock").hide();
        
        
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

