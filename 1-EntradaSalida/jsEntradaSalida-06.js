/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var numero_Uno;
	var numero_Dos;
	var resultado;

	numero_Uno = document.getElementById('txtIdNumeroUno').value;
	numero_Dos = document.getElementById('txtIdNumeroDos').value;

	numero_Uno = parseInt(numero_Uno);
	numero_Dos = parseInt(numero_Dos);

	resultado = numero_Uno + numero_Dos;
	respuesta = 'El resultado es: ' + resultado;
	
	alert(respuesta);

}

/* NaN = Not a Number, es por que alguno de los 2 elementos ingresados es texto y no numero.*/
