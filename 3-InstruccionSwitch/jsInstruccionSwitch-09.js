function mostrar() {
	var destinoIngresado;
	var estacionIngresada;
	var precioFinal;
	var porcentaje;

	const TARIFABASE = 15000;

	destinoIngresado = document.getElementById('txtIdDestino').value;
	estacionIngresada = document.getElementById('txtIdEstacion').value;

	switch (estacionIngresada) 
	{
		case "Invierno":
			switch (destinoIngresado) 
			{
				case "Cataratas":
				case "Cordoba":
					porcentaje = -10;
					break;
				case "Mar del plata":
					porcentaje = -20;
					break;
				case "Bariloche":
					porcentaje = 20;
					break;
			}
			break;
		case "Verano":
			switch (destinoIngresado) 
			{
				case "Cataratas":
				case "Cordoba":
					porcentaje = 10;
					break;
				case "Mar del plata":
					porcentaje = 20;
					break;
				case "Bariloche":
					porcentaje = -20;
					break;
			}
			break;
		default:
			switch (destinoIngresado) 
			{
				case "Bariloche":
				case "Cataratas":
				case "Mar del plata":
					porcentaje = 10;
					break;
				case "Cordoba":
					procentaje = 0;
					break;
			}
			break;

	}

    precioFinal = TARIFABASE + TARIFABASE * (porcentaje / 100);
	alert(precioFinal);

}//FIN DE LA FUNCIÓN