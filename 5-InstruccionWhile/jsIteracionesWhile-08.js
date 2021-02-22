/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar() {
	let valorNumericoIngresado;
	let respuestaIngresada;
	let sumaPositivos;
	let multiplicacionNegativos;
	let contador;

	sumaPositivos = 0;
	contador = 0;
	multiplicacionNegativos = 1;

	do {
		valorNumericoIngresado = parseInt(prompt("Ingresa un valor"));
		respuestaIngresada = prompt("Quieres continuar?");

		if (valorNumericoIngresado > 0) {
			sumaPositivos += valorNumericoIngresado;
		}
		else {

			multiplicacionNegativos *= valorNumericoIngresado;
			contador++;
		}

	} while (respuestaIngresada == "si");

	if (contador == 0) {
		multiplicacionNegativos = 0;
	}

	document.getElementById('txtIdSuma').value = sumaPositivos;
	document.getElementById('txtIdProducto').value = multiplicacionNegativos;

}//FIN DE LA FUNCIÓN