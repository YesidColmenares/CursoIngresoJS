/*
al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.*/
function mostrar()
{
	let edad;
	let lista;

	edad= prompt("Ingrese edad");

	while(edad < 18)
	{
		edad=prompt("NO puede entrar, reingrese su edad");
	}
	alert("Bienvenido");




	let contador;

	contador = 0;

	while(contador < 5)
	{
		contador= contador + 1;
		alert(contador);
	}
}//FIN DE LA FUNCIÓN