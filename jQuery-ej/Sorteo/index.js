//Sorteo

$(document).ready(()=>{
    console.log("Loaded");
})

let participantes = [];

$("#btn-sorteo").on({               //gestionador de eventos
    click: function(){
        let contador = 0;
        let ref_interval_sorteo = setInterval(()=>{
            sorteo();
            contador++;
            if(contador > 10){
                clearInterval(ref_interval_sorteo);
            }
        },200)
        
    }
})


//JS

// function sorteo(){
//     
//     let listaParticipantes = document.querySelectorAll(".participante");

//     //numeros del 0 al 3 random
//     let indiceAleatorio = Math.trunc(Math.random() * listaParticipantes.length);
    
//     //garantizamos que no hay elementos con clase .selected
//     for(let i = 0; i < listaParticipantes.length; i++){
//         listaParticipantes[i].classList.remove("selected");
//     }

//     listaParticipantes[indiceAleatorio].classList.add("selected");
// }

// document.querySelector("#btn-sorteo").addEventListener("click", sorteo);

//jQuery

function sorteo(){
    let participantes = $(".participante");

    let indiceAleatorio = Math.trunc(Math.random() * participantes.length);
    console.log(indiceAleatorio);
    participantes.removeClass("selected");
    $(participantes[indiceAleatorio]).addClass("selected");
}


let numero = 0;
let ref_interval = setInterval(()=>{
    $("#contador").html(numero);
    console.log(numero);
    numero++;
    if (numero > 10){
        clearInterval(ref_interval);
    }
}, 1000);