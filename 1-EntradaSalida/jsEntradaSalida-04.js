/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
    var nombreIngresado = prompt("Ingrese nombre");
	document.getElementById('txtIdNombre').value = 'su nombre es: ' + nombreIngresado;
}

/*
entrada de datos
  var nombre = prompt('Ingrese nombre');
  nombre = document.getElementbyId('txtIdNombre').value;

salida de datos
  document.getElementById('txtIdNombre').value = prompt("Ingrese nombre");
  */