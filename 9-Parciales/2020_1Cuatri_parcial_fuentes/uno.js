/*
Colmenares Moreno Roossbelt Yesid 

Debemos realizar la carga de una compra de 5(cinco) productos de prevención de contagio, <br>
de cada una debo obtener los siguientes datos: <br>
el tipo de producto (validar "barbijo" , "jabón" o "alcohol") , <br>
el precio (validar entre 100 y 300),<br>
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades), <br>
la Marca y el fabricante. <br>
Se debe Informar al usuario lo siguiente:<br>

a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total */

function mostrar() {
	let condicionWhile;
	let tipoIngresado;
	let precioIngresado;
	let cantidadUnidadesIngresada;
	let marcaIngresada;
	let fabricanteIngresado;
	let alcoholBarato;
	let CantidadAlcoholBarato;
	let FabricanteAlcoholBarato;
	let banderaDelPrimero;
	let contadorBarbijo;
	let contadorJabon;
	let contadorAlcohol;
	let promedioCompra;

	contadorBarbijo = 0;
	contadorJabon = 0;
	contadorAlcohol = 0;
	acumuladorBarbijo = 0;
    acumuladorJabon = 0;
	acumuladorAlcohol = 0;

	alcoholBarato = 0;

	condicionWhile = 0;
	banderaDelPrimero = true;

	while (condicionWhile < 5) {
		tipoIngresado = prompt("Ingrese el tipo");
		while (isNaN(tipoIngresado) == false || tipoIngresado != "barbijo" && tipoIngresado != "jabon" && tipoIngresado != "alcohol") {
			tipoIngresado = prompt("Error, ingrese el tipo");
		}

		precioIngresado = prompt("Ingrese el precio");
		precioIngresado = parseInt(precioIngresado);
		while (isNaN(precioIngresado) == true || precioIngresado < 100 || precioIngresado > 300) {
			precioIngresado = prompt("Error, ingrese el precio");
		}

		cantidadUnidadesIngresada = prompt("Ingresa las unidades");
		cantidadUnidadesIngresada = parseInt(cantidadUnidadesIngresada);
		while (isNaN(cantidadUnidadesIngresada) == true || cantidadUnidadesIngresada < 1 | cantidadUnidadesIngresada > 1000) {
			cantidadUnidadesIngresada = prompt("Error, ingresa las unidades");
		}

		marcaIngresada = prompt("Ingresa la marca");
		while (isNaN(marcaIngresada) == false) {
			marcaIngresada = prompt("Error,ingresa la marca");
		}

		fabricanteIngresado = prompt("Ingresa el fabricante");
		while (isNaN(fabricanteIngresado) == false) {
			fabricanteIngresado = prompt("Error,ingresa el fabricante");
		}

		// a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
		switch (tipoIngresado) 
		{
			case "barbijo":
				contadorBarbijo++;
				acumuladorBarbijo += cantidadUnidadesIngresada;
				break;

			case "alcohol":
				if (precioIngresado < alcoholBarato || alcoholBarato == 0) 
				{
					CantidadAlcoholBarato = cantidadUnidadesIngresada;
					FabricanteAlcoholBarato = fabricanteIngresado;
				}
				contadorAlcohol++;
				acumuladorAlcohol += cantidadUnidadesIngresada;
				break;

			case "jabon":
				contadorJabon++;
				acumuladorJabon += cantidadUnidadesIngresada;
		}

		//b) Del tipo con mas unidades, el promedio por compra 
		//c) Cuántas unidades de jabones hay en total
		if(acumuladorBarbijo > acumuladorAlcohol && acumuladorBarbijo > acumuladorJabon)
		{
			promedioCompra = acumuladorBarbijo / contadorBarbijo;
		}
		else
		{
			if(acumuladorAlcohol > acumuladorJabon)
			{
				promedioCompra = acumuladorAlcohol / contadorAlcohol;
			}
			else
			{
				promedioCompra = acumuladorBarbijo / contadorBarbijo;
			}
		}
		condicionWhile++;
	}
	alert(`A) La cantidad de unidades del tipo alcohol mas barato es: ${CantidadAlcoholBarato}, el fabricante es: ${FabricanteAlcoholBarato}\n
		   B) Del tipo con mas unidades, el promedio por compra es: ${promedioCompra}\n
		   C) Hay ${acumuladorJabon} unidades de jabon en total`);
}