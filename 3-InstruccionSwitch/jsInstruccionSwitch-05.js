function mostrar()
{
	let horaIngresada;
	horaIngresada = parseInt(document.getElementById('txtIdHora').value);

	switch (horaIngresada) 
	{
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			alert("Es de mañana");
			break;
	}
}//FIN DE LA FUNCIÓN