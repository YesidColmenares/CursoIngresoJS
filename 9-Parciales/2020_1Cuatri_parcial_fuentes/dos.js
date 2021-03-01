/*
Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro
*/
function mostrar() {

    let estadoWhileIngresado;
    let tipoProductoIngresado;
    let cantidadBolsaIngresado;
    let precioBolsaIngresado;

    let cantidadBolsasTotal;
    let precioTotalSinDescuento;
    let cantidadBolsasArena;
    let cantidadBolsasCal;
    let cantidadBolsasCemento;
    let tipoMasUnidadesBolsa;
    let tipoMasCaroArena;
    let tipoMasCaroCal;
    let tipoMasCaroCemento;
    let tipoMasCaro;
    let precioTotalSinDescuentoArena;
    let precioTotalSinDescuentoCal;
    let precioTotalSinDescuentoCemento;

    precioTotalSinDescuentoCemento = 0;
    precioTotalSinDescuentoCal = 0;
    precioTotalSinDescuentoArena = 0;
    cantidadBolsasArena = 0;
    cantidadBolsasCal = 0;
    cantidadBolsasCemento = 0;
    cantidadBolsasTotal = 0;
    estadoWhileIngresado = "s";


    while (estadoWhileIngresado == "s") {
        tipoProductoIngresado = prompt("Ingrese el tipo");
        while (isNaN(tipoProductoIngresado) == false || tipoProductoIngresado != "arena" && tipoProductoIngresado != "cal" && tipoProductoIngresado != "cemento") {
            tipoProductoIngresado = prompt("Error, Ingrese el tipo");
        }

        cantidadBolsaIngresado = prompt("Ingrese la cantidad de bolsas");
        cantidadBolsaIngresado = parseInt(cantidadBolsaIngresado);
        while (isNaN(cantidadBolsaIngresado) == true) {
            cantidadBolsaIngresado = prompt("Error, Ingrese la cantidad de bolsas");
            cantidadBolsaIngresado = parseInt(cantidadBolsaIngresado);
        }

        precioBolsaIngresado = prompt("Ingrese el precio por bolsa");
        precioBolsaIngresado = parseInt(precioBolsaIngresado);
        while (isNaN(precioBolsaIngresado) == true || precioBolsaIngresado < 1) {
            precioBolsaIngresado = prompt("Error, Ingrese el precio por bolsa");
            precioBolsaIngresado = parseInt(precioBolsaIngresado);
        }

        switch (tipoProductoIngresado) {
            case "arena":
                cantidadBolsasArena += cantidadBolsaIngresado;
                tipoMasCaroArena = precioBolsaIngresado;
                precioTotalSinDescuentoArena += cantidadBolsaIngresado * precioBolsaIngresado;
                break;
            case "cal":
                cantidadBolsasCal += cantidadBolsaIngresado;
                tipoMasCaroCal = precioBolsaIngresado;
                precioTotalSinDescuentoCal += cantidadBolsaIngresado * precioBolsaIngresado;
                break;
            case "cemento":
                cantidadBolsasCemento += cantidadBolsaIngresado;
                tipoMasCaroCemento = precioBolsaIngresado;
                precioTotalSinDescuentoCemento += cantidadBolsaIngresado * precioBolsaIngresado;
                break;
        }     

        estadoWhileIngresado = prompt("Ingrese 's' para continuar, de lo contrario ingrese 'n'")
    }
    //A. El importe total a pagar, bruto sin descuento
    precioTotalSinDescuento = (precioTotalSinDescuentoArena + precioTotalSinDescuentoCal + precioTotalSinDescuentoCemento);
    
    //B. El importe total a pagar con descuento
    cantidadBolsasTotal = cantidadBolsasArena + cantidadBolsasCal + cantidadBolsasCemento;
    if (cantidadBolsasTotal > 10 && cantidadBolsaIngresado < 30) {
        precioTotalConDescuento = precioTotalSinDescuento + precioTotalSinDescuento * (-15 / 100);
        mensaje = `El importe total a pagar con descuento es: ${precioTotalConDescuento}`
    }
    else {
        if (cantidadBolsasTotal > 30) {
            precioTotalConDescuento = precioTotalSinDescuento + precioTotalSinDescuento * (-25 / 100);
            mensaje = `El importe total a pagar con descuento es: ${precioTotalConDescuento}`
        }
        else {
            mensaje = `No tienes descuento`
        }

    }
    //C.Informar el tipo con mas cantidad de bolsas.
    if (cantidadBolsasArena > cantidadBolsasCal && cantidadBolsasArena > cantidadBolsasCemento) {
        tipoMasUnidadesBolsa = "Arena";
    }
    else {
        if (cantidadBolsasCal > cantidadBolsasArena && cantidadBolsasCal > cantidadBolsasCemento) {
            tipoMasUnidadesBolsa = "Cal";
        }
        else {
            tipoMasUnidadesBolsa = "Cemento";
        }
    }

    //D. El tipo mas caro
    if (tipoMasCaroArena > tipoMasCaroCal && tipoMasCaroArena > tipoMasCaroCemento) {
        tipoMasCaro = "Arena";
    }
    else {
        if (tipoMasCaroCal > tipoMasCaroArena && tipoMasCaroCal > tipoMasCaroCemento) {
            tipoMasCaro = "Cal";
        }
        else {
            tipoMasCaro = "Cemento";
        }
    }
    document.write(`A. El importe total a pagar, bruto sin descuento es: ${precioTotalSinDescuento}<br>
                    B. ${mensaje}<br>
                    C. El tipo con mas cantidad de bolsas es: ${tipoMasUnidadesBolsa}<br>
                    D. El tipo mas caro es: ${tipoMasCaro} `);

}






