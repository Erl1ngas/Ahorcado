var palabras = ["casa"];

var botonIniciarJuego = document.querySelector("#iniciar-juego");
botonIniciarJuego.addEventListener("click", ejecutarTodo);

var botonAgregarPalabra = document.querySelector("#nueva-palabra");
botonAgregarPalabra.addEventListener("click", AgregarPalabras);

var palabraDesifrar = "";
var letrasEscritas = [];
var letrasDescubiertas = [];
var contadorIntentos = 0;
var fallaste = true;
var elCaracter = "";


function casoIncluyeCaracter(elCaracter) {
    console.log("disparar dibujito de letra descubierta");
    letrasDescubiertas.push(elCaracter);
    dibujoDeLetra();
    

    for (var i = 0; i < palabraDesifrar.length; i++) {
        const element = palabraDesifrar[i];
        if (!letrasDescubiertas.includes(element)) {
            console.log("todavia no ganaste, no encontraste la letra " + element);
            fallaste = false;
            return;
        }
    }
    window.open(src="ganaste.html","ventana1","width=509,height=339,scrollbars=NO")
    console.log("Ganaste el juego");
    document.onkeyup = function () { }
    
}

    if (fallaste){
        
        ahorcado();
            
    }

function ahorcado() {
        
    if (contadorIntentos == 1){
        dibujoCabeza();
        
    } else if(contadorIntentos == 2){
        dibujoDeCuerpo();
     
    } else if (contadorIntentos == 3){
        dibujoPiernaDerecha();
        console.log(contadorIntentos);
        
    } else if (contadorIntentos == 4){
        dibujoPiernaIzquierda();
        console.log(contadorIntentos);
        
    } else if (contadorIntentos == 5){
        dibujoBrazoIzquierdo();
       
    } else if (contadorIntentos == 6){
        dibujoBrazoDerecho();
        
    }
    if ((letrasEscritas.length - letrasDescubiertas.length) > 5) {

        ventanaSecundaria();
        document.onkeyup = function () { }
    }
}
function ventanaSecundaria (URL){ 
    window.open(src="perdiste.html","ventana1","width=674,height=487,scrollbars=NO")
}
function seguimientoDeTipeo(evObject,elCaracter) {

    elCaracter = String.fromCharCode(evObject.which);
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
        contadorIntentos++;
        ahorcado();
        
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
