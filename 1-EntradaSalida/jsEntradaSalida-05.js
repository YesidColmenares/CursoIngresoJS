/*
Yesid Colmenares
Ejercicio 5Bis

Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var nombre;
	var apellido;
	var edad;
	
	nombre = document.getElementById('txtIdNombre').value;
	edad = document.getElementById('txtIdEdad').value;
	apellido = prompt('Ingrese su apellido');

	alert(`${apellido}, su nombre es ${nombre} y tiene ${edad} años`);
}

