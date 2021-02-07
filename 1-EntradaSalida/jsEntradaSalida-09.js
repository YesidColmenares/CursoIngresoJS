/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	//Variable
	let sueldo;
	let importe;

	//Obtencion del dato
	sueldo=document.getElementById('txtIdSueldo').value;
	
	//Parseado
	sueldo= parseInt(sueldo);

	//Operacion 
    importe = sueldo + (sueldo * 0.1);

	//Mostrar en cuadro la respuesta
	document.getElementById("txtIdResultado").value = importe;
}
