function mostrar()
{
	//variable
    let edad;

	//obtencion de la edad
	edad = parseInt(document.getElementById('txtIdEdad').value);

	//condicional 
	if(edad == 15)
	{ 
		alert("Niña Bonita");
	}

	alert("Esto se muestra despues del alert.");

}