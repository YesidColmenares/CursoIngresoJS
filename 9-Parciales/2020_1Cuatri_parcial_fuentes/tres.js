/*Bienvenidos.
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros. */

function mostrar() {
	let nombre;
	let edad;
	let sexo;
	let estadoCivil;
	let temperaturaCorporal;
	let mayorTemperatura;
	let mayorTemperaturaNombre;
	let condicionWhile;

	let mayoresDeEdadViudos;
	let banderaDelPrimero;
	let hombresSolterosViudos;
	let personasDeTerceraEdad;
	let hombresSolteros;
	let hombresEdad;
	let promedio;

	mayoresDeEdadViudos = 0;
	personasDeTerceraEdad = 0;
	hombresEdad = 0;
	hombresSolteros = 0;
	hombresSolterosViudos = 0;
	banderaDelPrimero = true;


	do {

		nombre = prompt("Ingresa tu nombre");
		while (isNaN(nombre) == false) {
			nombre = prompt("Error,ingresa tu nombre");
		}

		edad = prompt("Ingresa tu edad");
		edad = parseInt(edad);
		while (isNaN(edad) == true || edad < 0 || edad > 100) {
			edad = prompt("Error,ingresa tu edad");
		}

		sexo = prompt("Ingresa tu sexo, 'f' o 'm'");
		while (isNaN(sexo) == false || sexo != "f" && sexo != "m") {
			sexo = prompt("Error,ingresa tu sexo, 'f' o 'm'");
		}

		estadoCivil = prompt("Ingresa tu estadoCivil, 'soltero', 'casado' o 'viudo'");
		while (isNaN(estadoCivil) == false || estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo") {
			estadoCivil = prompt("Error,ingresa tu estadoCivil, 'soltero', 'casado' o 'viudo'");
		}

		temperaturaCorporal = prompt("Ingresa tu temperaturaCorporal");
		temperaturaCorporal = parseInt(temperaturaCorporal);
		while (isNaN(temperaturaCorporal) == true || temperaturaCorporal < 35 || temperaturaCorporal > 45) {
			temperaturaCorporal = prompt("Error,ingresa tu temperaturaCorporal");
		}
		//a
		if (temperaturaCorporal > mayorTemperatura || banderaDelPrimero == true) {
			mayorTemperatura = temperaturaCorporal;
			mayorTemperaturaNombre = nombre;
			banderaDelPrimero = false;
		}

		switch (estadoCivil) {
			case "viudo":
				if (edad > 18) {
					mayoresDeEdadViudos++;
					if (edad > 60 && temperaturaCorporal > 38) {
						personasDeTerceraEdad++;
					}
				}
			case "soltero":
				if(sexo == "m")
				{
					hombresSolterosViudos++;
					if(estadoCivil == "soltero")
					{
						hombresSolteros++;
						hombresEdad += edad;
					}
				}
				break;
			case "casado":
				break;
		}

		condicionWhile = prompt("presiona 's' para continuar, de lo contracio presiona 'n'");
	} while (condicionWhile == "s");
	//a
	alert(`el nombre que ingreso la temperatura mas alta es: ${mayorTemperaturaNombre}`);
	//b
	alert(`hay ${mayoresDeEdadViudos}, mayores de edad viudos`);
	//c
	alert(`hay ${hombresSolterosViudos}, hombres que estan solteros o viudos`);
	//d
	alert(`hay ${personasDeTerceraEdad}, personas de tercera edad que tienen mas de 38 grados`);
	//e
	promedio = (hombresEdad/hombresSolteros).toFixed(2);
	alert(`el promedio de edad entre los hombres solteros es: ${promedio}`);
}
