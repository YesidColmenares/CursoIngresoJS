function mostrar()
{
	var destinoIngresado;
	var estacionIngresada;
	var precioFinal;
	var descuento;
	var aumento;

	const TARIFABASE = 15000;

	destinoIngresado = document.getElementById('txtIdDestino').value;
	estacionIngresada = document.getElementById('txtIdEstacion').value;

	if(estacionIngresada == "Invierno")
	{
		switch(destinoIngresado)
		{
			case "Cataratas":
			case "Cordoba":
				descuento = 10;
				precioFinal = TARIFABASE - TARIFABASE *(descuento/100);
				break;
			case "Mar del plata":
				descuento = 20;
				precioFinal = TARIFABASE - TARIFABASE *(descuento/100);
				break;
			case "Bariloche":
				aumento = 20;
				precioFinal = TARIFABASE + TARIFABASE *(aumento/100);
				break;
		}
	}
	else
	{
		if(estacionIngresada == "Verano")
		{
			switch(destinoIngresado)
			{
			case "Cataratas":
			case "Cordoba":
				aumento = 10;
				precioFinal = TARIFABASE + TARIFABASE *(aumento/100);
				break;
			case "Mar del plata":
				aumento = 20;
				precioFinal = TARIFABASE + TARIFABASE *(aumento/100);
				break;
			case "Bariloche":
				descuento = 20;
				precioFinal = TARIFABASE - TARIFABASE *(descuento/100);
				break;
			}
		}
		else
		{
			switch(destinoIngresado)
			{
			case "Bariloche":
			case "Cataratas":
			case "Mar del plata":
				aumento = 10;
				precioFinal = TARIFABASE + TARIFABASE *(aumento/100);
				break;
			case "Cordoba":
				descuento = 0;
				precioFinal = TARIFABASE - TARIFABASE *(descuento/100);
				break;
			}
		}
	}
	alert(precioFinal);

}//FIN DE LA FUNCIÓN