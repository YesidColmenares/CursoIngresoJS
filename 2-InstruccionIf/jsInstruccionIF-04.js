function mostrar()
{
	let edad;
	let mensaje;

	//tomo la edad  
	edad = parseInt(document.getElementById('txtIdEdad').value);

	if(edad >= 13)
	{
		mensaje = "Eres un adolescente";
	}
	else
	{
		if(edad <=17)
		{
		mensaje = "No eres adolescente";
		}
	}
	alert(mensaje);

}//FIN DE LA FUNCIÓN