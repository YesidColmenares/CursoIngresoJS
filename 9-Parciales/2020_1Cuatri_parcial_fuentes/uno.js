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

	let estadoWhileIngresado;
	let tipoProductoIngresado;
	let precioProductoIngresado;
	let cantidadProductoIngresado;
	let marcaProductoIngresado;
	let fabricanteProductoIngresado;

	let alcoholMasBarato;
	let contadorAlcohol;
	let contadorBarbijo;
	let contadorJabon;
	let alcoholMasBaratoUnidades;
	let alcoholMasBaratoFabricante;
	let cantidadUnidadesBarbijo;
	let cantidadUnidadesJabon;
	let cantidadUnidadesAlcohol;
	let promedioTipoMasUnidades;

	promedioTipoMasUnidades = 0;
	cantidadUnidadesBarbijo = 0;
	cantidadUnidadesJabon= 0;
	cantidadUnidadesAlcohol = 0;
	contadorAlcohol = 0;
	contadorBarbijo = 0;
	contadorJabon = 0;
	estadoWhile = 0;
	
	while (estadoWhile < 5)
	{ 
		tipoProductoIngresado = prompt("Ingrese el tipo");
		while (isNaN(tipoProductoIngresado) == false || tipoProductoIngresado != "barbijo" && tipoProductoIngresado != "jabon" && tipoProductoIngresado != "alcohol")
		{
			tipoProductoIngresado = prompt("Error,Ingrese el tipo");
		}

		precioProductoIngresado = prompt("Ingrese el precio");
		precioProductoIngresado = parseInt(precioProductoIngresado);
		while (isNaN(precioProductoIngresado) == true || precioProductoIngresado < 100 || precioProductoIngresado > 300)
		{
			precioProductoIngresado = prompt("Error,Ingrese el precio");
			precioProductoIngresado = parseInt(precioProductoIngresado);
		}

		cantidadProductoIngresado = prompt("Ingres la cantidad");
		cantidadProductoIngresado = parseInt(cantidadProductoIngresado);
		while (isNaN(cantidadProductoIngresado) == true || cantidadProductoIngresado < 1 || cantidadProductoIngresado > 1000)
		{
			cantidadProductoIngresado = prompt("Error,Ingrese la cantidad");
			cantidadProductoIngresado = parseInt(cantidadProductoIngresado);
		}

		marcaProductoIngresado = prompt("Ingrese la marca");
		while (isNaN(marcaProductoIngresado) == false)
		{
			marcaProductoIngresado = prompt("Error, Ingrese la marca");
		}

		fabricanteProductoIngresado = prompt("Ingrese el fabricante");
		while (isNaN(fabricanteProductoIngresado) == false)
		{
			fabricanteProductoIngresado = prompt("Error, Ingrese el fabricante");
		}

		switch (tipoProductoIngresado)
		{
			case "alcohol":
				if (precioProductoIngresado < alcoholMasBarato || contadorAlcohol == 0)
				{
					alcoholMasBarato = precioProductoIngresado;
					alcoholMasBaratoUnidades = cantidadProductoIngresado;
					alcoholMasBaratoFabricante = fabricanteProductoIngresado;
				}
				contadorAlcohol++;
				cantidadUnidadesAlcohol += cantidadProductoIngresado;
				break;
			case "barbijo":
				contadorBarbijo++;
				cantidadUnidadesBarbijo += cantidadProductoIngresado;
				break;
			case "jabon":
				contadorJabon++;
				cantidadUnidadesJabon += cantidadProductoIngresado;
				break;
		}

		if (cantidadUnidadesAlcohol > cantidadUnidadesBarbijo && cantidadUnidadesAlcohol > cantidadUnidadesJabon)
		{
			promedioTipoMasUnidades = cantidadUnidadesAlcohol / contadorAlcohol;
		}
		else
		{
			if (cantidadUnidadesBarbijo > cantidadUnidadesJabon)
			{ 
				promedioTipoMasUnidades = cantidadUnidadesBarbijo / contadorBarbijo;
			}
			else
			{ 
				promedioTipoMasUnidades = cantidadUnidadesJabon / contadorJabon;
			}
		}


		estadoWhile++;
	}

	document.write(`A. Del más barato de los alcohol, la cantidad de unidades es: ${alcoholMasBaratoUnidades} y el fabricante es: ${alcoholMasBaratoFabricante}<br>
	                B. Del tipo con mas unidades, el promedio por compra es ${promedioTipoMasUnidades.toFixed(2)}<br>
					C. Hay en total ${cantidadUnidadesJabon} unidades de jabon`);

}