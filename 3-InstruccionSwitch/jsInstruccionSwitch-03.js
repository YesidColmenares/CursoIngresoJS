function mostrar() {
	let valorMes;
	valorMes = document.getElementById('txtIdMes').value;

	switch (valorMes) 
	{
		case "Febrero":
			alert("Este mes no tiene mas de 29 dias");
			break;

		default:
			alert("Este mes tiene 30 o mas dias");
			break;
	}
}//FIN DE LA FUNCIÓN