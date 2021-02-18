/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar() {
	let claveIngresada;
	let valorInicial;

	valorInicial = false; // variable de control 

	/* while(valorInicial == false) //se puede poner como condicion un valor booleano o tiene que ser un valor en numero como por ejemplo mientras ok valga 0, va a segfuir repitiendose	
	{
		claveIngresada = prompt("ingrese el número clave.");

		if(claveIngresada == "utn750")
		{
			valorInicial = true;
		}
		else
		{
			alert("clave incorrecta");
		}
	}


	/*claveIngresada = prompt("ingrese el número clave.");
	
	while(claveIngresada != "utn750")
	{
		claveIngresada = prompt("ingrese el número clave.");
	}*/

	do {
		claveIngresada = prompt("ingrese el número clave.");
	} while (claveIngresada != "utn750");
	alert("Clave Correcta");

}//FIN DE LA FUNCIÓN
