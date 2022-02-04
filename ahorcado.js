var palabras = [];

var botonIniciarJuego = document.querySelector("#iniciar-juego");
botonIniciarJuego = addEventListener("click",ejecutarTodo);

var botonAgregarPalabra = document.querySelector("#nueva-palabra");
botonAgregarPalabra.addEventListener("click",AgregarPalabras);

var palabraDesifrar = "";

function ejecutarTodo(){

    dibujoComienzoJuego();
    Sorteo();

}

function Sorteo(){
        
        var aleatorio = Math.floor(Math.random()*palabras.length);
        palabraDesifrar = palabras[aleatorio];
        console.log(palabraDesifrar);
    
}

function AgregarPalabras(){

    palabras.push(document.querySelector("#input-nueva-palabra").value);
    console.log(palabras);

}