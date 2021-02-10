function mostrar()
{
	let edad;
	let mensaje;

	//tomo la edad  
	edad = parseInt(document.getElementById('txtIdEdad').value);

	if(edad < 13)
	{
		mensaje = ("niño");
	}
	else 
	{
		if(edad < 18)
		{
		    mensaje = ("Adolescente");
		}
		else
		{
            if(edad < 66)
			{ 
				mensaje = ("mayor de edad");
			}
			else 
			{
				mensaje = ("un adulto mayor");
			}
		}
	}
	alert ("Usted es :" + mensaje);

}//FIN DE LA FUNCIÓN

 
