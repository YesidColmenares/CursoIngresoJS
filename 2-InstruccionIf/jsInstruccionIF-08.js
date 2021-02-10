function mostrar()
{
	let edad;
	let estadoCivil;

	edad = parseInt(document.getElementById('txtIdEdad').value);
	estadoCivil = document.getElementById('estadoCivil').value;

	if(edad > 17)
	{
		if(estadoCivil == "Soltero")
		{
			alert("Es soltero y no es menor de edad");
		}
	}

}//FIN DE LA FUNCIÓN