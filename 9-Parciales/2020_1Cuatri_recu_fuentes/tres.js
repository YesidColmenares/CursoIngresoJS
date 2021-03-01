/*
Para una institución educativa se necesitan registrar los datos de 15 alumnos. 
Nos solicitan nombre, carrera , edad, sexo("f" o "m") y modalidad("presencial", "a distancia" o "semi-presencial")y promedio general. 
Luego nos solicitan los siguientes informes: 

a) La Carrera de la persona con mas promedio general. 
b) Cuantos mayores de edad(más de 17) cursan presencial. 
c) La cantidad de Mujeres que cursan a distancia o semi-presencial. 
d) Cuantas personas adultas(mas de 40 años), tienen mas de 7 de promedio general. 
e) El promedio de edad entre las mujeres que cursan a distancia.

*/
function mostrar()
{
	let nombreIngresado;
	let carreraIngresada;
	let edadIngresada;
	let sexoIngresado;
	let modalidadIngresada;
	let promedioGeneralIngresado;
	let banderaDelPrimero;
	let mayoresEdadPresencial;
	let cantidadMujeresCursanADistanciaSemiPresencial;
	let contadorMujeresCursanADistancia;
	let mayorPromedioGeneral;
	let mayorPromedioGeneralCarrera;
	let acumuladorEdadMujeresCursanADistancia;
	let AdultosMayoresPromedioGeneral;
	let promedioDeEdadMujeresCursanADistancia;
	let i;


	AdultosMayoresPromedioGeneral = 0;
	promedioDeEdadMujeresCursanADistancia = 0;
	acumuladorEdadMujeresCursanADistancia = 0;
	contadorMujeresCursanADistancia = 0;
	cantidadMujeresCursanADistanciaSemiPresencial = 0;
	mayoresEdadPresencial = 0;
	banderaDelPrimero = 0;

	for (i = 0; i < 15; i++)
	{
		nombreIngresado = prompt("Ingrese Nombre");
		while (isNaN(nombreIngresado) == false)
		{
			nombreIngresado = prompt("Error,Ingrese Nombre");
		}

		carreraIngresada = prompt("Ingrese carrera");
		while (isNaN(carreraIngresada) == false) {
			carreraIngresada = prompt("Error,Ingrese carrera");
		}

		edadIngresada = prompt("Ingrese edad");
		edadIngresada = parseInt(edadIngresada);
		while (isNaN(edadIngresada) == true || edadIngresada < 0 || edadIngresada > 100) {
			edadIngresada = prompt("Error,Ingrese edad");
			edadIngresada = parseInt(edadIngresada);
		}

		sexoIngresado = prompt("Ingrese sexo");
		while (isNaN(sexoIngresado) == false || sexoIngresado != "f" && sexoIngresado != "m"){
			sexoIngresado = prompt("Error,Ingrese sexo");
		}

		modalidadIngresada = prompt("Ingrese modalidad");
		while (isNaN(modalidadIngresada) == false || modalidadIngresada != "presencial" && modalidadIngresada != "a distancia" && modalidadIngresada != "semi-presencial") {
			modalidadIngresada = prompt("Error,Ingrese modalidad");
		}

		promedioGeneralIngresado = prompt("Ingrese promedio");
		promedioGeneralIngresado = parseInt(promedioGeneralIngresado);
		while (isNaN(promedioGeneralIngresado) == true) {
			promedioGeneralIngresado = prompt("Error,Ingrese promedio");
			promedioGeneralIngresado = parseInt(promedioGeneralIngresado);
		}

		//A
		if (promedioGeneralIngresado > mayorPromedioGeneral || banderaDelPrimero == 0)
		{
			mayorPromedioGeneral = promedioGeneralIngresado;
			mayorPromedioGeneralCarrera = carreraIngresada;
			banderaDelPrimero == 1;
		}

		//B,C,E
		switch (modalidadIngresada)
		{
			case "a distancia":
			case "semi-presencial":
				if (sexoIngresado == "f")
				{
					cantidadMujeresCursanADistanciaSemiPresencial++;
					if (modalidadIngresada == "a distancia")
					{
						contadorMujeresCursanADistancia++;
						acumuladorEdadMujeresCursanADistancia += edadIngresada;
					}
				}
				break;
			case "presencial":
				if (edadIngresada > 17) {
					mayoresEdadPresencial++;
				}
				break;
		}

		//D
		if (edadIngresada > 40 && promedioGeneralIngresado > 7)
		{
			AdultosMayoresPromedioGeneral++;
		}
	}

	promedioDeEdadMujeresCursanADistancia += acumuladorEdadMujeresCursanADistancia / contadorMujeresCursanADistancia;

	document.write(`A. La Carrera de la persona con mas promedio general es: ${mayorPromedioGeneralCarrera}<br>
	                B. Hay ${mayoresEdadPresencial} mayores de edad que cursan presencial<br>
					C. La cantidad de Mujeres que cursan a distancia o semi-presencial es: ${cantidadMujeresCursanADistanciaSemiPresencial}<br>
					D. Las personas adultas con mas de 40 años, que tienen mas de 7 de promedio general son ${AdultosMayoresPromedioGeneral}<br>
					E. El promedio de edad entre las mujeres que cursan a distancia es: ${promedioDeEdadMujeresCursanADistancia}<br>`);
}
