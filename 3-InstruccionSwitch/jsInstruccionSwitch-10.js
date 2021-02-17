function mostrar() {
	var destinoIngresado;
	var estacionIngresada;
	var estadoDeViajes;

	destinoIngresado = document.getElementById('txtIdDestino').value;
	estacionIngresada = document.getElementById('txtIdEstacion').value;

	if (estacionIngresada == "Invierno") 
	{
		switch (destinoIngresado) 
		{
			case "Bariloche":
				estadoDeViajes = "Se viaja";
				break;
			default:
				estadoDeViajes = "No se viaja";
				break;
		}
	}
	else {
		if (estacionIngresada == "Verano") 
		{
			switch (destinoIngresado) 
			{
				case "Cataratas":
				case "Mar del plata":
					estadoDeViajes = "Se viaja"
					break;
				default:
					estadoDeViajes = "No se viaja"
					break;
			}
		}
		else {
			if (estacionIngresada == "Primavera") 
			{
				switch (destinoIngresado) 
				{
					case "Bariloche":
						estadoDeViajes = "No se viaja"
						break;
					default:
						estadoDeViajes = "Se viaja"
						break;
				}
			}
			else 
			{
				estadoDeViajes = "Se viaja"
			}
		}
	}
	alert(estadoDeViajes);

}//FIN DE LA FUNCIÓN