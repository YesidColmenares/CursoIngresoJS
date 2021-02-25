function mostrar()
{
	let numeroIngresado;
	let cantidadNumerosPares;
	
	cantidadNumerosPares = 0;

	numeroIngresado = parseInt(prompt("Ingresar numero"));

	for(let i=1; i<=numeroIngresado; i++)
	{
		if(i % 2)
		{
			cantidadNumerosPares++;
		}
	}
	alert(cantidadNumerosPares + " numeros pares");

}//FIN DE LA FUNCIÓN