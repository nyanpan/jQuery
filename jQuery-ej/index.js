//Ejercicio: Crear con jQuery un evento click para 
//cambiar el color de un texto de rojo a azul y 
//con ello cambie también el texto del botón 

//seleccion de texto y botón
const title = $(".h1-red");


//evento
$("button").click(()=>{
    if(title.hasClass("h1-red")){
        console.log("red");
        title.removeClass("h1-red");
        title.addClass("h1-blue");
        $("button").html("Cambiado");
        
    }
    else { 
        console.log("blue"); 
        title.removeClass("h1-blue");
        title.addClass("h1-red");
        $("button").html("Cambiar");
    }
});