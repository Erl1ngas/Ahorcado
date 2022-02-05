var pantalla = document.querySelector("#ahorcado");
var pincel = pantalla.getContext("2d");

function dibujoComienzoJuego() {
	pincel.moveTo(160, 350);
	pincel.lineTo(0, 400);
	pincel.lineTo(320, 400);
	pincel.lineTo(160, 350);
	pincel.stroke();
}

function letrasDePalabra(palabra) {
	var x = 320;
	var y = 400;
	for (i = 0; i < palabra.length; i++) {
		x = x + 20;
		pincel.moveTo(x, y);
		x = x + 20;
		pincel.lineTo(x, y);
	}
	pincel.stroke();
}

