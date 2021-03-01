/*
Para un censo municipal debemos cargar los datos de TODAS las mascotas de nuestra veterinaria
necesitan saber si es un gato o un perrro u "otra cosa",(solo hay esos tres tipos)
el tipo de pelaje (corto, largo , sin pelo),
la edad de la mascota (edad validada);
el nombre (una palabra)
la raza  (una palabra)
el peso (peso validado)
el estadoClinico (enfermo,internado o adopcion)
la temperaruta corporal

y nos piden informar solo si existe
a)El perro mas pesado
b)El porcentaje de enfermos sobre el total de mascotas
c)El nombre de la ultima mascota de tipo "otra cosa"
d)El animal sin pelo con menor temperatura corporal
e)Que tipo de mascota(gato o un perrro u "otra cosa") que tiene el mayor promedio de temperatura corporal
f)Sumando gatos y perros que porcentaje del total de mascotas son?
g)Que estado clinico tiene la menor cantidad de mascotas
H)Cual es el promedio de kilos de peso tomando todas las mascotas
i)El nombre y raza del gato sin pelos mas liviano

*/
function mostrar() 
{
	let tipoIngresado;
	let tipoPelaje;
	let edadIngresada;
	let nombreIngresado;
	let razaIngresado;
	let pesoIngresado;
	let estadoClinicoIngresado;
	let temperarutaCorporalIngresado;
	let estadoWhileIngresado;
	let banderaDelPrimero;
	let pesoMasGrande;
	let contadorEnfermos;
	let cantidadGatos;
	let cantidadPerros;
	let cantidadOtraCosa;
	let cantidadMascotasTotal;
	let promedioEnfermosSobreTotalMascotas;
	let nombreUltimaMascota;
	let menorTemperaturaMascotaSinPelo;
	let menorTemperaturaMascotaSinPeloAnimal;
	let mayorTemperaturaMascota;
	let banderaDelPrimeroTercero;
	let cantidadPerrosGatos;
	let menorCantidadGatos;
	let menorCantidadPerros;
	let menorCantidadOtracosa;
	let menorCantidadEstadoClinico;
	let pesoTotalGato;
	let pesoTotalPerro;
	let pesoTotalOtracosa;
	let promedioPesoMascotas;
	let pesoMasLiviano;
	let contadorSinPelo;
	let mensaje;

	temperarutaCorporalIngresado = 0;
	pesoTotalPerro = 0;
	pesoTotalOtracosa = 0
	pesoTotalGato = 0;
	contadorSinPelo = 0;
	cantidadPerrosGatos = 0;
	banderaDelPrimero = 0;
	banderaDelPrimeroTercero = 0;
	contadorEnfermos = 0;
	cantidadGatos = 0;
	cantidadPerros = 0;
	cantidadOtraCosa = 0;
	estadoWhileIngresado = "s";

	while (estadoWhileIngresado == "s")
	{
		tipoIngresado = prompt("Ingresa tipo");
		while (isNaN(tipoIngresado) == false || tipoIngresado != "gato" && tipoIngresado != "perro" && tipoIngresado != "otra cosa")
		{
			tipoIngresado = prompt("Error, Ingresa tipo");
		}

		tipoPelaje = prompt("Ingresa tipo pelaje");
		while (isNaN(tipoPelaje) == false || tipoPelaje != "corto" && tipoPelaje != "largo" && tipoPelaje != "sin pelo") {
			tipoPelaje = prompt("Error, Ingresa tipo pelaje");
		}

		edadIngresada = prompt("Ingrese edad");
		edadIngresada = parseInt(edadIngresada);
		while (isNaN(edadIngresada) == true || edadIngresada < 1 || edadIngresada > 40) {
			edadIngresada = prompt("Error, Ingrese edad");
			edadIngresada = parseInt(edadIngresada);
		}

		nombreIngresado = prompt("Ingresa nombre");
		while (isNaN(nombreIngresado) == false) {
			nombreIngresado = prompt("Error, Ingresa nombre");
		}

		razaIngresado = prompt("Ingresa raza");
		while (isNaN(razaIngresado) == false) {
			razaIngresado = prompt("Error, Ingresa raza");
		}

		pesoIngresado = prompt("Ingresa peso");
		pesoIngresado = parseInt(pesoIngresado);
		while (isNaN(pesoIngresado) == true ||  pesoIngresado < 1 || pesoIngresado > 80) {
			pesoIngresado = prompt("Error, Ingresa peso");
			pesoIngresado = parseInt(pesoIngresado);
		}

		estadoClinicoIngresado = prompt("Ingresa estado clinico");
		while (isNaN(estadoClinicoIngresado) == false || estadoClinicoIngresado != "enfermo" && estadoClinicoIngresado != "internado" && estadoClinicoIngresado != "adopcion") {
			estadoClinicoIngresado = prompt("Error, Ingresa estado clinico");
		}

		temperarutaCorporalIngresado = prompt("Ingresa temperatura corporal");
		temperarutaCorporalIngresado = parseInt(temperarutaCorporalIngresado);
		while (isNaN(temperarutaCorporalIngresado) == true || temperarutaCorporalIngresado < 30 || temperarutaCorporalIngresado > 45) {
			temperarutaCorporalIngresado = prompt("Error, Ingresa temperatura corporal");
			temperarutaCorporalIngresado = parseInt(temperarutaCorporalIngresado);
		}

		//a
		if (pesoIngresado > pesoMasGrande || banderaDelPrimero == 0)
		{
			pesoMasGrande = pesoIngresado;
			pesoMasGrandeNombre = nombreIngresado;
			banderaDelPrimero = 1;
		}
		
		switch (tipoIngresado)
		{
			case "gato":
				cantidadGatos++;
				pesoTotalGato += pesoIngresado;
				break;
			case "perro":
				cantidadPerros++;
				pesoTotalPerro += pesoIngresado;
				break;
			case "otra cosa":
				cantidadOtraCosa++;
				nombreUltimaMascota = nombreIngresado;
				pesoTotalOtracosa += pesoIngresado;
				break;
		}
		cantidadMascotasTotal = cantidadGatos + cantidadPerros + cantidadOtraCosa;
		cantidadPerrosGatos = cantidadGatos + cantidadPerros;
		pesoTotalMascotas = pesoTotalGato + pesoTotalPerro + pesoTotalOtracosa;
        
		switch (tipoPelaje) {
			case "corto":
			case "largo":
			case "sin pelo":
				//D
				if (temperarutaCorporalIngresado < menorTemperaturaMascotaSinPelo || contadorSinPelo == 0) {
					menorTemperaturaMascotaSinPelo = temperarutaCorporalIngresado;
					menorTemperaturaMascotaSinPeloAnimal = razaIngresado;
				}

				if (temperarutaCorporalIngresado < mayorTemperaturaMascota || contadorSinPelo ==0)
				{
					mayorTemperaturaMascota = temperarutaCorporalIngresado;
				}
				
				//I
				if (pesoIngresado < pesoMasLiviano || contadorSinPelo == 0) {
					pesoMasLiviano = pesoIngresado;
				}
				//B
				if (estadoClinicoIngresado == "enfermo") {
					contadorEnfermos++;
				}
				contadorSinPelo++;
				break;
		}

		//G
		if (cantidadGatos < cantidadPerros && cantidadGatos < cantidadOtraCosa)
		{
			menorCantidadGatos = cantidadGatos;
			menorCantidadEstadoClinico = estadoClinicoIngresado;
		}
		else
		{
			if (cantidadPerros < cantidadGatos && cantidadPerros < cantidadOtraCosa) {
				menorCantidadPerros = cantidadPerros;
				menorCantidadEstadoClinico = estadoClinicoIngresado;
			}
			else
			{ 
				menorCantidadOtracosa = cantidadOtraCosa;
				menorCantidadEstadoClinico = estadoClinicoIngresado;
			}
		}
		
		estadoWhileIngresado = prompt("Ingresa 's' para continuar, de lo contrario ingresa 'n'");
	}
	//H
	promedioPesoMascotas = pesoTotalMascotas / cantidadMascotasTotal;
	//I
	promedioEnfermosSobreTotalMascotas = cantidadMascotasTotal / contadorEnfermos;
	//F
	porcentajeGatosPerrosATotal = 100 * (cantidadPerrosGatos / cantidadMascotasTotal);

	if (isNaN(nombreUltimaMascota) == true)
	{ 
		mensaje = `NO hay mascotas de otro tipo`;
	}
	else
	{
		mensaje = `El nombre de la ultima mascota de tipo "otra cosa" es: ${nombreIngresado}`
	}
	document.write(`A. El perro mas pesado es: ${pesoMasGrandeNombre}<br>
	                B. El porcentaje de enfermos sobre el total de mascotas es: ${promedioEnfermosSobreTotalMascotas}<br>
					C. ${mensaje}<br>
					D. El animal sin pelo con menor temperatura corporal es: ${menorTemperaturaMascotaSinPeloAnimal}<br>
					E. El tipo de mascota(gato o un perrro u "otra cosa")que tiene el mayor promedio de temperatura corporal es: ${mayorTemperaturaMascota}<br>
					F. Sumando gatos y perros el porcentaje del total de mascotas es: ${porcentajeGatosPerrosATotal}<br>
					G. El estado clinico que tiene la menor cantidad de mascotas es: ${menorCantidadEstadoClinico}<br>
					H. El promedio de kilos de peso tomando todas las mascotas es: ${promedioPesoMascotas}<br>
					I. El nombre y raza del gato sin pelos mas liviano es: ${pesoMasLiviano}<br>`);
}






