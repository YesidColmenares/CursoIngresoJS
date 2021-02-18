function mostrar()
{
	var contador;
	var acumulador;
	var numeroIngresado;

	contador=0;
	acumulador=0;

	while(contador < 5)
	{
		numeroIngresado = parseInt(prompt("Ingresa un numero"));
		acumulador += numeroIngresado;
		contador ++;
	}

	document.getElementById('txtIdSuma').value = acumulador;
	document.getElementById('txtIdPromedio').value = acumulador/contador;
	
}//FIN DE LA FUNCIÓN



