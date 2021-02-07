/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
    //Variable
	let sueldo;
	let importe;

    //Obtencion del dat
	sueldo=document.getElementById('txtIdImporte').value;

	//Parseado
	sueldo= parseInt(sueldo);

    //Operacion
	importe = sueldo - (sueldo * 0.25);

	//Mostrar en cuadro la respuesta
	document.getElementById("txtIdResultado").value = importe;
}
