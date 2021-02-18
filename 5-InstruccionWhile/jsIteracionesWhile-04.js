/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar() {
	let numeroIngresado;
	
	numeroIngresado = parseInt(prompt("ingrese un numero entre 0 y 9 inclusive"));

	while (!(numeroIngresado > -1 && numeroIngresado < 10)) {
		numeroIngresado = parseInt(prompt("Incorrecto. ingrese un numero entre 0 y 9 inclusive"));
	}

	document.getElementById('txtIdNumero').value = numeroIngresado;

}//FIN DE LA FUNCIÓN



