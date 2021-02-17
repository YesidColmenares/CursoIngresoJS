/*
Yesid Colmenares
Ejercicio 2

Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var nombre;
	//alert(Nombre1); = undefined 
	//alert(noExiste); = no se declaro la variable
	nombre = prompt("ingresa el nombre", "Su nombre"); //No debemos nombrar las variables con numeros, solo con texto
    
	alert(nombre);

}

