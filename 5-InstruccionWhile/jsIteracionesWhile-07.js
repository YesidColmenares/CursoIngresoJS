/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador;
	var acumulador;
	var respuestaIngresada;

	contador=0;
	acumulador=0;
	respuestaIngresada="";

	do
	{
		acumulador += parseInt(prompt("Ingresa un numero"));
		contador ++;
		respuestaIngresada = prompt("Quieres seguir?");

	}while(respuestaIngresada == "si");

	document.getElementById('txtIdSuma').value=acumulador;
	document.getElementById('txtIdPromedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN