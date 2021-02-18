/*
al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.*/
function mostrar()
{
	let contador;
    let lista;

	contador = 0;
	lista = "";

	while(contador < 11)
	{
		lista += " " + contador;
		contador++;
	}
	alert(lista);
}//FIN DE LA FUNCIÓN