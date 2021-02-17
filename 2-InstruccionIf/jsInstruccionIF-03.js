function mostrar()
{
	let edad;
	let mensaje;

	//tomo la edad  
	edad = parseInt(document.getElementById('txtIdEdad').value);

	if(edad >= 18)
	{
		mensaje = "Eres mayor de edad";
	}
	else
	{
		mensaje = "Eres menor de edad";
	}
	alert(mensaje);
}//FIN DE LA FUNCIÓN