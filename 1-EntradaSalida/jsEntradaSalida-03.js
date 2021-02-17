/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	let nombreIngresado;
	nombreIngresado=txtIdNombre.value; // compatible con navegadores chrome
	nombreIngresado=document.getElementById('txtIdNombre').value; //compatible con todos los navegadores
	alert(nombreIngresado);

}


