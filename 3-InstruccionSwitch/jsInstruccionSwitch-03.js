function mostrar() {
	let valorMes;
	let mensaje;
	valorMes = document.getElementById('txtIdMes').value;

	switch (valorMes) 
	{
		case "Febrero":
			mensaje = "Este mes no tiene mas de 29 dias";
			break;

		default:
			mensaje = "Este mes tiene 30 o mas dias";
			break;
	}
	alert(mensaje);
}//FIN DE LA FUNCIÓN