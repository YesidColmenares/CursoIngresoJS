function mostrar() {
	var destinoIngresado;
	var estacionIngresada;
	var estadoDeViajes;

	destinoIngresado = document.getElementById('txtIdDestino').value;
	estacionIngresada = document.getElementById('txtIdEstacion').value;

	switch (estacionIngresada) 
	{
		case "Invierno":

			switch (destinoIngresado)
			{
				case "Bariloche":
					estadoDeViajes = "Se viaja";
					break;
				default:
					estadoDeViajes = "No se viaja";
					break;
			}
			break;
		case "Verano":

			switch (destinoIngresado) 
			{
				case "Cataratas":
				case "Mar del plata":
					estadoDeViajes = "Se viaja";
					break;
				default:
					estadoDeViajes = "No se viaja";
					break;
			}
			break;
		case "Primavera":

			switch (destinoIngresado) 
			{
				case "Bariloche":
					estadoDeViajes = "No se viaja";
					break;
				default:
					estadoDeViajes = "Se viaja";
					break;
			}
			break;

		default:
			estadoDeViajes = "Se viaja";
			break;
	}
	alert(estadoDeViajes);
}//FIN DE LA FUNCIÓN