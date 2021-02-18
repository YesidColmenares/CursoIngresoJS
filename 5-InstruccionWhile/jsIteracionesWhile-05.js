/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexoIngresado;

	/*do
	{
		sexoIngresado = prompt("Ingrese f o m.");
	}while(!(sexoIngresado == "f" || sexoIngresado == "m"));

	document.getElementById('txtIdSexo').value = sexoIngresado;*/


	sexoIngresado = prompt("Ingrese f o m.");
	while(!(sexoIngresado == "f" || sexoIngresado == "m"))
	{
		sexoIngresado = prompt("Error. Ingrese f o m.");
	}
	document.getElementById('txtIdSexo').value = sexoIngresado;
}//FIN DE LA FUNCIÓN