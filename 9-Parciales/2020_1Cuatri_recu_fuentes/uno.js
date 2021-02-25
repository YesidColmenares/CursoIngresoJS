/*
Colmenares Moreno Roossbelt Yesid 

Debemos realizar la carga de una compra de 5(cinco) productos de prevención de contagio, <br>
de cada una debo obtener los siguientes datos: <br>
el tipo de producto (validar "barbijo" , "jabón" o "alcohol") , <br>
el precio (validar entre 100 y 300),<br>
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades), <br>
la Marca y el fabricante. <br>
Se debe Informar al usuario lo siguiente:<br>

a) Del más caro de los jabones, la cantidad de unidades y el fabricante<br>
b) Del tipo de producto con más unidades en total de la compra, el promedio por compra <br>
c) Cuántas unidades de Barbijos se compraron en total*/

function mostrar() {
	let contadorDeVueltas;
	let tipoIngresado;
	let precioIngresado;
	let cantidadIngresada;
	let marcaIngresada;
	let AlcoholBarato;
	let banderaDelPrimero;
	let FabricanteAlcoholBarato;
	let CantidadAlcoholBarato;
	let contadorBarbijo;
	let contadorJabon;
	let contadorAlcohol;
	let acumuladorBarbijo;
	let acumuladorJabon;
	let acumuladorAlcohol;
	let promedioCompra;

	contadorDeVueltas = 0;
	banderaDelPrimero = true;
	contadorBarbijo = 0;
	contadorJabon = 0;
	contadorAlcohol = 0;
	acumuladorBarbijo = 0;
	acumuladorJabon = 0;
	acumuladorAlcohol =0;

	while (contadorDeVueltas < 5) 
	{
		tipoIngresado = prompt("Ingrese tipo");
		while (isNan(tipoIngresado) == false || tipoIngresado != "barbijo" && tipoIngresado != "jabon" && tipoIngresado != "alcohol") //validacion
		{
			tipoIngresado = prompt("Error, Ingrese tipo de nuevo");
		}

		precioIngresado = prompt("Ingrese precio");
		precioIngresado = parseInt(precioIngresado);
		while (isNan(precioIngresado) == true || precioIngresado < 100 || precioIngresado > 300) 
		{
			precioIngresado = prompt("Error, Ingrese precio de nuevo");
			precioIngresado = parseInt(precioIngresado);
		}

		cantidadIngresada = prompt("Ingrese cantidad");
		cantidadIngresada = parseInt(cantidadIngresada);
		while (isNan(cantidadIngresada) == true || cantidadIngresada < 1000 || cantidadIngresada > 0) 
		{
			cantidadIngresada = prompt("Error, Ingrese cantidad de nuevo");
			cantidadIngresada = parseInt(cantidadIngresada);
		}

		marcaIngresada = prompt("Ingrese marca");
		while (isNaN(marcaIngresada) == false) 
		{
			marcaIngresada = prompt("Error, Ingrese tipo");
		}

		fabricanteIngresado = prompt("Ingrese fabricante");
		while (isNaN(fabricanteIngresado) == false) 
		{
			fabricanteIngresado = prompt("Error, Ingrese fabricante");
		}

		// a) Del más caro de los jabones, la cantidad de unidades y el fabricante
		if (tipoIngresado == "alcohol" && AlcoholBarato < precioIngresado || banderaDelPrimero == true) 
		{
			AlcoholBarato = precioIngresado;
			FabricanteAlcoholBarato = fabricanteIngresado;
			CantidadAlcoholBarato = cantidadIngresada;
			banderaDelPrimero = false;
		}

	alert(`La cantidad de unidades del tipo alcohol mas barato es: ${CantidadAlcoholBarato}\n
	       El fabricante es: ${FabricanteAlcoholBarato}`);

		// b) Del tipo de producto con más unidades en total de la compra, el promedio por compra
		switch(tipoIngresado)
		{
			case "barbijo":
				contadorBarbijo++;
				acumuladorBarbijo+= cantidadIngresada;
				break;
			case "jabon":
				contadorJabon++;
				acumuladorJabon+= cantidadIngresada;
				break;
			case "alcohol":
				contadorAlcohol++;
				acumuladorAlcohol+= cantidadIngresada;
		}
		contadorDeVueltas++;
	}

    if(acumuladorBarbijo > acumuladorJabon && acumuladorBarbijo > acumuladorAlcohol)
	{
		promedioCompra = acumuladorBarbijo/contadorBarbijo;
	}
	else
	{
		if(acumuladorJabon > acumuladorBarbijo)
		{
			promedioCompra = acumuladorJabon/contadorJabon;
		}
		else
		{
			promedioCompra = acumuladorAlcohol/contadorAlcohol;
		}
	}

	alert(`Promedio del tipo con mas unidades: ${promedioCompra}`);

}
