/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar() {
	let claveIngresada;
	let valorInicial;

	valorInicial = false; // variable de control 

	do {
		claveIngresada = prompt("ingrese el número clave.");
	} while (claveIngresada != "utn750");
	alert("Clave Correcta");

}//FIN DE LA FUNCIÓN
