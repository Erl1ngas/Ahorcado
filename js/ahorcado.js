var palabras = ["casa"];

var botonIniciarJuego = document.querySelector("#iniciar-juego");
botonIniciarJuego.addEventListener("click", ejecutarTodo);

var botonAgregarPalabra = document.querySelector("#nueva-palabra");
botonAgregarPalabra.addEventListener("click", AgregarPalabras);

var palabraDesifrar = "";
var letrasEscritas = [];
var letrasDescubiertas = [];
var contadorIntentos = "";


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

function casoNoIncluyeCaracter(contador) {
    console.log("disparar dibujo de ahorcado");
    
    if (letrasEscritas.length == 1){
        dibujoCabeza();
        contador ++;
    } else if(letrasEscritas.length == 2){
        dibujoDeCuerpo();
        contador ++;
    } else if (letrasEscritas.length == 3){
        dibujoPiernaDerecha();
        contador ++;

    } else if (letrasEscritas.length == 4){
        dibujoPiernaIzquierda();
        contador ++;
    } else if (letrasEscritas.length == 5){
        dibujoBrazoIzquierdo();
        contador ++;
    } else if (letrasEscritas.length == 6){
        dibujoBrazoDerecho();
    }
    if ((letrasEscritas.length - letrasDescubiertas.length) > 5) {

        ventanaSecundaria();
        document.onkeyup = function () { }
    }
}
function ventanaSecundaria (URL){ 
    window.open(src="ganaste.html","ventana1","width=509,height=339,scrollbars=NO")
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