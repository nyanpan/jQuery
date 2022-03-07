// jQuery

$(document).ready(function(){
    console.log("loaded");
})

// $ para seleccionar objetos

console.log($("h1").css("color"));                      // muestra el color asignado al h1

$("h1").css("color", "blue");                           //.css acceder a elementos css ("que elemento", "cambio")
//jQuery$("h1").css("color"); son equivalentes

const title = $("h1");
//const buttons = $("button");

//ESTILOS

console.log(title.css("color"));
console.log(title.css("font-size"));

title.addClass("big-title");                            //añadimos clases a los elementos
title.hasClass("big-title");                            //confirma que tiene la clase (t/f)

//modificar elementos
$("button").html("<em>Dont click me</em>");             //modificar innerHTML

//.text para cambiar innerText
const button1 = $(".button-1").text("Button 1");        //seleccionar por clase ".clase"
const button2 = $("#button-2").text("Button 2");        //seleccionar por id #id

const img = $(".img-test");
img.attr("src", "https://kindyou.com/wp-content/uploads/2018/02/Happy-Cat-Gif-about-Life-1.gif"); //añadir atributos
img.attr("alt", "cute kitty");


//eventos
button1.click(() => {
    title.css("color", "red");
})

button2.click(()=>{
    title.css("color", "green");
})

title.mouseenter(()=>{
    title.css("background-color", "black");
    title.css("color", "white")
})

title.mouseout(()=>{
    title.css("background-color", "white");
    title.css("color", "black");
})


//añadir elementos
title.before("<button>New</button>");
title.after("<button>New</button><br><br>");

title.prepend("<button>New</button>");          //append before
title.append("<button>New</button>");           //appendChild

//eliminar

const button3 = $(".button3");
button3.html("Delete me");
button3.click(()=>{
    button3.remove();
})