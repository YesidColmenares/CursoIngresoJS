/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar() {	// declarar variables
	let banderaDelPrimero;
	let numeroMaximo;
	let numeroMinimo;
	let valorNumericoIngresado;
	let respuestaIngresada;

	//iniciar variables
	banderaDelPrimero = true;


	do {
		valorNumericoIngresado = parseInt(prompt("Ingresa el numero positivo o negativo"));
		respuestaIngresada = prompt("desea continuar?, ingrese si");

		if (valorNumericoIngresado > numeroMaximo || banderaDelPrimero == true) {
			numeroMaximo = valorNumericoIngresado;
		}
		if (valorNumericoIngresado < numeroMinimo || banderaDelPrimero == true) {
			numeroMinimo = valorNumericoIngresado;
			banderaDelPrimero = false;
		}
	} while (respuestaIngresada == "si");

	document.getElementById('txtIdMaximo').value = numeroMaximo;
	document.getElementById('txtIdMinimo').value = numeroMinimo;
}//FIN DE LA FUNCIÓN