function mostrar()
{
	let valorMes;
	let mensaje;
	valorMes = document.getElementById('txtIdMes').value;

	switch (valorMes) 
	{
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			mensaje = "Este mes tiene 30 dias";
			break;

		case "Febrero":
			mensaje = "Este mes tiene 28 dias";
			break;

		default:
			mensaje = "Este mes tiene 31 dias";
			break;
	}
	alert(mensaje);

}//FIN DE LA FUNCIÓN