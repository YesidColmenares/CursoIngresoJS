function mostrar()
{
	let numeroIngresado;
	let numerosDivisores;
	let listaNumeros;
	
	numerosDivisores = 0;
	listaNumeros = "";

	numeroIngresado = parseInt(prompt("Ingresar numero"));

	for(let i=1; i<=numeroIngresado; i++)
	{
		if((numeroIngresado % i) == 0)
		{
			numerosDivisores++;
			listaNumeros += i+" ";
		}
	}
	alert("cantidad de numeros divisores es: " + numerosDivisores + ", y los numeros divisores son: " + listaNumeros);
}