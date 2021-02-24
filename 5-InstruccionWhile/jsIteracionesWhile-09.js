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



/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar() {
	//declarar contadores y variables 
	let valorNumericoIngresado;
	let respuestaIngresada;
	let cantidadPositivos;
	let cantidadNegativos;
	let cantidadNumerosPares;
	let sumaPositivos;
	let sumaNegativos;
	let promedioPositivos;
	let promedioNegativos;
	let diferencia;
	let banderaDelPrimero;

	//iniciar variables
	cantidadPositivos = 0;
	cantidadNegativos = 0;
	cantidadNumerosPares = 0;
	sumaPositivos = 0;
	sumaNegativos = 0;
	banderaDelPrimero == true;


	do {
		valorNumericoIngresado = parseInt(prompt("Ingresa el numero"));
		respuestaIngresada = prompt("desea continuar?");

		if (valorNumericoIngresado > 0) {
			sumaPositivos += valorNumericoIngresado;
			mensaje += sumaPositivos;
			cantidadPositivos++;

			if (!(valorNumericoIngresado % 2)) {
				cantidadNumerosPares++;
			}
		}
		else {
			if (valorNumericoIngresado < 0) {
				sumaNegativos += valorNumericoIngresado;
				cantidadNegativos++;
			}
		}

	} while (respuestaIngresada == "si");

	if (cantidadPositivos == 0 || cantidadNegativos == 0) {
		promedioPositivos = 0;
		promedioNegativos = 0;
	}
	if (cantidadNegativos != 0 ) {
		promedioNegativos = (sumaNegativos / cantidadNegativos).toFixed(2);
	}
	if (cantidadPositivos != 0) {
		promedioPositivos = (sumaPositivos / cantidadPositivos).toFixed(2);
	}

	diferencia = (sumaPositivos - sumaNegativos);

	document.write(`1. suma de los negativos es: ${sumaNegativos}<br>
	                2. suma de los positivos es: ${sumaPositivos}<br>
                    3. cantidad de positivos es: ${cantidadPositivos}<br>
                    4. cantidad de negativos es: ${cantidadNegativos}<br>
                    5. cantidad de ceros es: <br>
                    6. cantidad de numeros pares es: ${cantidadNumerosPares}<br>
                    7. Promedio de positivos: ${promedioPositivos}<br>
                    8. Promedio de negativos: ${promedioNegativos}<br>
                    9. Diferencia entre positivos y negativos: ${diferencia}`);

}//FIN DE LA FUNCIÓN