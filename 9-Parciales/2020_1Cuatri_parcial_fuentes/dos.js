/*
Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro
*/
function mostrar() 
{

	let contadorDeVueltas;
	let tipoIngresado;
	let cantidadBolsasIngresado;
	let precioPorBolsaIngresada;
	let totalCantidadBolsas;

	let contadorArena;
	let contadorCal;
	let contadorCemento;
	let acumuladorArena;
	let acumuladorCal;
	let acumuladorCemento;
	let totalPrecioBruto;
  let tipoConMayorCantidadBolsas;
  let descuento;

	contadorArena = 0;
	contadorCal = 0;
	contadorCemento = 0;
	acumuladorArena = 0;
	acumuladorCal = 0;
	acumuladorCemento = 0;



	do 
	{

		tipoIngresado = prompt("Ingrese tipo");
		while (isNaN(tipoIngresado) == false || tipoIngresado != "arena" && tipoIngresado != "cal" && tipoIngresado != "cemento") //validacion
		{
			tipoIngresado = prompt("Error, Ingrese tipo de nuevo");
		}

		cantidadBolsasIngresado = prompt("Ingrese cantidad de bolsas");
		cantidadBolsasIngresado = parseInt(cantidadBolsasIngresado);
		while (isNaN(cantidadBolsasIngresado) == true) 
		{
			cantidadBolsasIngresado = prompt("Error, Ingrese cantidad de bolsas");
			cantidadBolsasIngresado = parseInt(cantidadBolsasIngresado);
		}

		precioPorBolsaIngresada = prompt("Ingrese precio de la bolsa");
		precioPorBolsaIngresada = parseInt(precioPorBolsaIngresada);
		while (isNaN(precioPorBolsaIngresada) == true || precioPorBolsaIngresada < 0) 
		{
			precioPorBolsaIngresada = prompt("Error, Ingrese precio de la bolsa");
			precioPorBolsaIngresada = parseInt(precioPorBolsaIngresada);
		}

		// a) El importe total a pagar , bruto sin descuento
		switch (tipoIngresado) 
		{
			case "Arena":
				contadorArena++;
				totalPrecioBruto = cantidadBolsasIngresado * precioPorBolsaIngresada;
        totalPrecioBruto += totalPrecioBruto;
				acumuladorArena += cantidadBolsasIngresado;
				break;
			case "cal":
				contadorCal++;
				totalPrecioBruto = cantidadBolsasIngresado * precioPorBolsaIngresada;
        totalPrecioBruto += totalPrecioBruto;
				acumuladorCal += cantidadBolsasIngresado;
				break;
			case "cemento":
				contadorCemento++;
				totalPrecioBruto = cantidadBolsasIngresado * precioPorBolsaIngresada;
        totalPrecioBruto += totalPrecioBruto;
				acumuladorCemento += cantidadBolsasIngresado;
        break;
		}

		contadorDeVueltas = prompt("presione 's' si quiere continuar, de lo contrario presione 'n'");
	} while (contadorDeVueltas == "s");

	//b) el importe total a pagar con descuento
	totalCantidadBolsas = acumuladorArena + acumuladorCal + acumuladorCemento;
	if (totalCantidadBolsas > 10 && totalCantidadBolsas < 30) 
	{
		descuento = totalPrecioBruto - totalPrecioBruto * (15 / 100);
	}
	else 
	{
		if (totalCantidadBolsas > 30) 
		{
			descuento = totalPrecioBruto - totalPrecioBruto * (25 / 100);
		}
	}

	//d) Informar el tipo con mas cantidad de bolsas. 
		if (acumuladorArena > acumuladorCal && acumuladorArena > acumuladorCemento) 
		{
			tipoConMayorCantidadBolsas = "Arena";
		}
    else
    {
			if (acumuladorCal > acumuladorArena) 
			{
				tipoConMayorCantidadBolsas = "Cal";
			}
      else 
	  	{
				tipoConMayorCantidadBolsas = "Cemento";
			}
    }

	alert(`A) Importe total a pagar sin descuento: ${totalPrecioBruto}\n
	       B) IMporte total a pagar con descuento: ${descuento}\n
		   C) El tipo con mas cantidad de bolsas es: ${tipoConMayorCantidadBolsas}\n
		   D) El tipo mas caro es: `);
}






