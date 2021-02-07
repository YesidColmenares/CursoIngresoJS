/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	// resultado = numero%2; isPar
	// resultado = 25%5; Modulo de una division 

	//variables
	var dividiendo;
	var divisor;
	var resto;
	var respuesta;

	//Obtencion de datos
	dividiendo=document.getElementById('txtIdNumeroDividendo').value;
	divisor=document.getElementById('txtIdNumeroDivisor').value;

	//Parseando de Texto a Numero
	dividiendo=parseInt(dividiendo);
	divisor=parseInt(divisor);

	//Operacion Modulo
	resto=dividiendo%divisor;

	//Texto respuesta en pantalla
	respuesta=`El resto es: ${resto}`;

	//Imprimir en pantalla
	alert(respuesta);

	const HOLA = 89;

}
