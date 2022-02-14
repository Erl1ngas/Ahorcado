var pantalla = document.querySelector("#ahorcado");
var pincel = pantalla.getContext("2d");
pincel.strokeStyle = "white";

function dibujoComienzoJuego() {

	pincel.lineWidth = 5;
	
	pincel.beginPath();
	pincel.moveTo(160, 350);
	pincel.lineTo(50, 400);
	pincel.lineTo(260, 400);
	pincel.lineTo(160, 350);
	pincel.lineTo(160, 100);
	pincel.lineTo(320, 100);
	pincel.lineTo(320, 150);
	pincel.stroke();


}
var verticeX = 630;
var verticeY = 400;
var cordenadasLetras =[];
function letrasDePalabra(palabra) {
	pincel.lineCap = "round";
	
	var x = verticeX;
	var y = verticeY;
	for (i = 0; i < palabra.length; i++) {
		x = x + 40;
		pincel.moveTo(x, y);
		cordenadasLetras.push(x);
		x = x + 40;
		pincel.lineTo(x, y);
	}
	pincel.stroke();
}

function dibujoCabeza() {

	pincel.beginPath();
	pincel.arc(320, 180, 30, 0, 2 * 3.14);
	pincel.stroke();
}
function dibujoDeCuerpo() {
	pincel.beginPath();
	pincel.moveTo(320, 210);
	pincel.lineTo(320, 320);
	pincel.stroke();

}
function dibujoPiernaIzquierda() {
	pincel.beginPath();
	pincel.moveTo(320, 320);
	pincel.lineTo(360, 350);
	pincel.stroke();

}
function dibujoPiernaDerecha() {
	pincel.beginPath();
	pincel.moveTo(320, 320);
	pincel.lineTo(280, 350);
	pincel.stroke();

}
function dibujoBrazoIzquierdo() {
	pincel.beginPath();
	pincel.moveTo(320, 260);
	pincel.lineTo(360, 240);
	pincel.stroke();
}
function dibujoBrazoDerecho() {
	pincel.beginPath();
	pincel.moveTo(320, 260);
	pincel.lineTo(280, 240);
	pincel.stroke();
}	

function dibujoDeLetra(letra, posicion) {
	pincel.font = "50pt Short Stack";
	pincel.fillStyle = "black";
	pincel.fillText(letra, cordenadasLetras[posicion] -5, verticeY- 10);
}
function dibujoDeLetraErronea(letrasEscritas) {
	pincel.font = "50pt Short Stack";
	pincel.fillStyle = "black";
	pincel.fillText(letrasEscritas, 620, 200);
}
function laPalabraEra(palabraDesifrar) {
	pincel.font = "40pt Short Stack";
	pincel.fillStyle = "red";
	pincel.fillText("La palabra era " + palabraDesifrar, 420, 300);
}