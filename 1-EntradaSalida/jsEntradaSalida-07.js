/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	//Variables
	var valor_Uno;
	var valor_Dos;
	var respuesta;
	var suma;

	//Obtencion de datos
	valor_Uno = document.getElementById('txtIdNumeroUno').value;
	valor_Dos = document.getElementById('txtIdNumeroDos').value;
	
	//Parseando de texto a numero
	valor_Uno = parseInt(valor_Uno);
	valor_Dos = parseInt(valor_Dos);

	//Operacion suma
	suma = valor_Uno+valor_Dos;

	//Texto respuesta en pantalla
	respuesta = `La suma es: ${suma}`;

	//Imprimir en pantalla
	alert(respuesta);
}

function restar()
{
	//Variables
	var valor_Uno;
	var valor_Dos;
	var respuesta;
	var resta;

	//Obtencion de datos
	valor_Uno = document.getElementById('txtIdNumeroUno').value;
	valor_Dos = document.getElementById('txtIdNumeroDos').value;
	
	//Parseando de Texto a Numero
	valor_Uno = parseInt(valor_Uno);
	valor_Dos = parseInt(valor_Dos);

	//Operacion resta
	resta = valor_Uno-valor_Dos;

	//Texto respuesta en pantalla
	respuesta = `La resta es: ${resta}`;

	//Imprimir en pantalla
	alert(respuesta);
}

function multiplicar()
{ 
	//Variables
	var valor_Uno;
	var valor_Dos;
	var respuesta;
	var multiplicacion;

	//Obtencion de datos
	valor_Uno = document.getElementById('txtIdNumeroUno').value;
	valor_Dos = document.getElementById('txtIdNumeroDos').value;
	
	//Parseando de Texto a Numero
	valor_Uno = parseInt(valor_Uno);
	valor_Dos = parseInt(valor_Dos);

	//Operacion multiplicacion
	multiplicacion = valor_Uno*valor_Dos;

	//Texto respuesta en pantalla
	respuesta = `La multiplicacion es: ${multiplicacion}`;

	//Imprimir en pantalla
	alert(respuesta);
}

function dividir()
{
	//Variables
	var valor_Uno;
	var valor_Dos;
	var respuesta;
	var division;

	//Obtencion de datos
	valor_Uno = document.getElementById('txtIdNumeroUno').value;
	valor_Dos = document.getElementById('txtIdNumeroDos').value;
	
	//Parseando de Texto a Numero
	valor_Uno = parseInt(valor_Uno);
	valor_Dos = parseInt(valor_Dos);

	//Operacion division
	division = valor_Uno/valor_Dos;

	//Texto respuesta en pantalla
	respuesta = `La division es: ${division}`;

	//Imprimir en pantalla
	alert(respuesta);
}

