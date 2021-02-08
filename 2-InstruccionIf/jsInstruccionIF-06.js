function mostrar()
{
	let edad;

	//tomo la edad  
	edad = parseInt(document.getElementById('txtIdEdad').value);

	if(edad < 13)
	{
		alert("Es niño");
	}
	else if (edad >=13 && edad <=17) 
	{
		alert("Es Adolescente");
	}
	else if (edad >=18 && edad <=65)
	{
		alert("Es mayor de edad");
	}
	else
	{
		alert("Es adulto mayor");
	}

}//FIN DE LA FUNCIÓN

 
