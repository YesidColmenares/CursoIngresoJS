function mostrar() {
	var destinoIngresado;

	destinoIngresado = document.getElementById('txtIdDestino').value;

	switch (destinoIngresado) 
	{
		case "Bariloche":
		case "Cataratas":
		case "Ushuaia":
			alert("Frio");
			break;
		case "Mar del plata":
			alert("Caliente");
			break;
	}

}//FIN DE LA FUNCIÓN