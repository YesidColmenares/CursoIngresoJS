function mostrar() {
	let destinoIngresado;
	let mensaje;

	destinoIngresado = document.getElementById('txtIdDestino').value;

	switch (destinoIngresado) 
	{
		case "Bariloche":
		case "Cataratas":
		case "Ushuaia":
			mensaje = "Frio";
			break;
		case "Mar del plata":
			mensaje = "Caliente";
			break;
	}
	alert(mensaje);

}//FIN DE LA FUNCIÓN