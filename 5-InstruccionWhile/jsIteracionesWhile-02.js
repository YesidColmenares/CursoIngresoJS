/*
al presionar el botón mostrar 10 repeticiones 
con números DESCENDENTES, desde el 10 al 1.*/
function mostrar()
{
	let contador;
	let lista;

	contador = 10;
	lista = "";

	while(contador > 0)
	{
		lista += " " + contador;
		contador--;
	}
	alert(lista);
}//FIN DE LA FUNCIÓN