function mostrar()
{
	let numero;
	let mensaje;

	numero = Math.floor(Math.random() *10) + 1;

	if(numero < 4) 
	{
		mensaje = ("Vamos, la proxima se puede");
	}
	else
	{
		if(numero < 9)
		{
			mensaje = ("APROBÓ");
		}
		else 
		{
			mensaje = ("EXCELENTE");
		}
	}

	alert(`Sacaste ${numero}, ${mensaje}`);

}//FIN DE LA FUNCIÓN