/*Bienvenidos.
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros. */

function mostrar() {

    let estadoWhileIngresado;
    let nombreIngresado;
    let edadIngresada;
    let sexoIngresado;
    let estadoCivilIngresado;
    let temperaturaCorporalIngresado;
    let personaMayorTemperatura;
    let banderaDelPrimero;
    let MayoresEdadViudos;
    let cantidadHombresSolterosViudos;
    let contadorSolteros;
    let edadTotalSolteros;
    let promedioEdadHombresSolteros;
    let personasTerceraEdadMayorTemperatura;


    personasTerceraEdadMayorTemperatura = 0;
    edadTotalSolteros = 0;
    contadorSolteros = 0;
    cantidadHombresSolterosViudos = 0;
    MayoresEdadViudos = 0;
    banderaDelPrimero = 0;
    estadoWhileIngresado = "s";

    while (estadoWhileIngresado == "s") {

        nombreIngresado = prompt("Ingrese el nombre");
        while (isNaN(nombreIngresado) == false) {
            nombreIngresado = prompt("Error,Ingrese el nombre");
        }

        edadIngresada = prompt("Ingrese la edad");
        edadIngresada = parseInt(edadIngresada);
        while (isNaN(edadIngresada) == true || edadIngresada < 0 || edadIngresada > 100) {
            edadIngresada = prompt("Error,Ingrese la edad");
            edadIngresada = parseInt(edadIngresada);
        }

        sexoIngresado = prompt("Ingres el sexo");
        while (isNaN(sexoIngresado) == false || sexoIngresado != "f" && sexoIngresado != "m") {
            sexoIngresado = prompt("Error,Ingrese el sexo");
        }

        estadoCivilIngresado = prompt("Ingrese el estado civil");
        while (isNaN(estadoCivilIngresado) == false || estadoCivilIngresado != "soltero" && estadoCivilIngresado != "casado" && estadoCivilIngresado != "viudo") {
            estadoCivilIngresado = prompt("Error, Ingrese el estado civil");
        }

        temperaturaCorporalIngresado = prompt("Ingrese su temperatura");
        temperaturaCorporalIngresado = parseInt(temperaturaCorporalIngresado);
        while (isNaN(temperaturaCorporalIngresado) == true || temperaturaCorporalIngresado < 34 || temperaturaCorporalIngresado > 39) {
            temperaturaCorporalIngresado = prompt("Error, Ingrese su temperatura");
            temperaturaCorporalIngresado = parseInt(temperaturaCorporalIngresado);
        }

        //B. Mayores de edad Viudos
        //C. La cantidad de hombres que hay solteros o viudos.
        //E. promedio de edad entre los hombres solteros
        if (edadIngresada > 18 && estadoCivilIngresado == "viudo") {
            MayoresEdadViudos++;
        }
        if (sexoIngresado == "m" && estadoCivilIngresado == "viudo" || estadoCivilIngresado == "soltero") {
            cantidadHombresSolterosViudos++;
            if (estadoCivilIngresado == "soltero") {
                contadorSolteros++;
                edadTotalSolteros += edadIngresada;
            }
        }

        //A. NOmbre de la persona con mayor temperatura
        if (temperaturaCorporalIngresado > personaMayorTemperatura || banderaDelPrimero == 0) {
            personaMayorTemperatura = temperaturaCorporalIngresado;
            personaMayorTemperaturaNombre = nombreIngresado;
            banderaDelPrimero = 1;
        }

        //D.
        if (edadIngresada > 60 && temperaturaCorporalIngresado > 38) {
            personasTerceraEdadMayorTemperatura++;
        }

        estadoWhileIngresado = prompt("Ingrese 's' si desea continuar, de lo contario ingrese 'n'");
    }
    //E
    promedioEdadHombresSolteros = edadTotalSolteros / contadorSolteros;

    document.write(`A. Nombre de la persona con mayor temperatura ${personaMayorTemperaturaNombre}<br>
                    B. Mayores de edad Viudos ${MayoresEdadViudos}<br>
                    C. La cantidad de hombres que hay solteros o viudos es: ${cantidadHombresSolterosViudos}<br>
                    D. La cantidad de personas mayores de 60 con temperaturas mayores a 38 son: ${personasTerceraEdadMayorTemperatura}<br>
                    E. Promedio de edad entre los hombres solteros es: ${promedioEdadHombresSolteros.toFixed(2)}`);
}
