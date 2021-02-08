function mostrar()
{
	let edad;

	//tomo la edad  
	edad = parseInt(document.getElementById('txtIdEdad').value);

	if(edad >= 13 && edad <= 17)
	{
		alert("Eres un adolescente");
	}
	else
	{
		alert("No eres adolescente");
	}

}//FIN DE LA FUNCIÓN