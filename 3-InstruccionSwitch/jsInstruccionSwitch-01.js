function mostrar() {
	let mesDelAño; 
	let mensaje;
	
	mesDelAño = document.getElementById('txtIdMes').value;

	switch (mesDelAño) {
		case "Enero":
			mensaje = "Que comiences bien el año";
			break;

		case "Marzo":
			mensaje = "a clases";
			break;

		case "julio":
			mensaje = "se vienen las vacaciones";
			break;

		case "diciembre":
			mensaje = "felices fiestas";
			break;
	}
	alert(mensaje);

}//FIN DE LA FUNCIÓN