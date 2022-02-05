var palabras = [];

var botonIniciarJuego = document.querySelector("#iniciar-juego");
botonIniciarJuego.addEventListener("click", ejecutarTodo);

var botonAgregarPalabra = document.querySelector("#nueva-palabra");
botonAgregarPalabra.addEventListener("click", AgregarPalabras);

var palabraDesifrar = "";
var letrasEscritas = [];
var letrasDescubiertas = [];


function casoIncluyeCaracter(elCaracter) {
    console.log("disparar dibujito de letra descubierta");
    letrasDescubiertas.push(elCaracter);

    for (var i = 0; i < palabraDesifrar.length; i++) {
        const element = palabraDesifrar[i];
        if (!letrasDescubiertas.includes(element)) {
            console.log("todavia no ganaste, no encontraste la letra " + element);
            return;
        }
    }
    console.log("Ganaste el juego");
    document.onkeyup = function () { }

}

function casoNoIncluyeCaracter() {
    console.log("disparar dibujo de ahorcado");
    if ((letrasEscritas.length - letrasDescubiertas.length) > 5) {
        console.log("Fin del juego");
        document.onkeyup = function () { }
    }
}

function seguimientoDeTipeo(evObject) {

    var elCaracter = String.fromCharCode(evObject.which);
    if (!(elCaracter >= "A" && elCaracter <= "Z")) {
        return
    }

    if (letrasEscritas.includes(elCaracter)) {
        return
    }

    letrasEscritas.push(elCaracter);
    document.querySelector("#letras-probadas").innerHTML = letrasEscritas;
    console.log(letrasEscritas);

    if (palabraDesifrar.includes(elCaracter)) {
        casoIncluyeCaracter(elCaracter)
    } else {
        casoNoIncluyeCaracter()
    }
}

function ejecutarTodo() {

    dibujoComienzoJuego();
    Sorteo();
    letrasDePalabra(palabraDesifrar);
    document.onkeyup = seguimientoDeTipeo;

}

function Sorteo() {

    var aleatorio = Math.floor(Math.random() * palabras.length);
    palabraDesifrar = palabras[aleatorio].toUpperCase();
    console.log(palabraDesifrar);
}

function AgregarPalabras() {

    palabras.push(document.querySelector("#input-nueva-palabra").value);

}