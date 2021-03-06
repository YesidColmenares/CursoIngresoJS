/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio() {
    let cantidadDeLamparas;
    let marcaSeleccionada;
    let descuento;
    let precioBruto;
    let interes_IIBB;

    cantidadDeLamparas = document.getElementById('txtIdCantidad').value;
    cantidadDeLamparas = parseInt(cantidadDeLamparas);

    marcaSeleccionada = document.getElementById('Marca').value;

    precioBruto = cantidadDeLamparas * 35;


    if (cantidadDeLamparas == 5) {
        switch (marcaSeleccionada) {
            case "ArgentinaLuz":
                descuento = 40;
                break;
            default:
                descuento = 30;
                break;
        }
    }
    else {
        if (cantidadDeLamparas == 4) {
            switch (marcaSeleccionada) {
                case "ArgentinaLuz":
                case "FelipeLamparas":
                    descuento = 25;
                    break;
                default:
                    descuento = 20;
                    break;
            }
        }
        else {
            if (cantidadDeLamparas == 3) {
                switch (marcaSeleccionada) {
                    case "ArgentinaLuz":
                        descuento = 15;
                        break;
                    case "FelipeLamparas":
                        descuento = 10;
                        break;
                    default:
                        descuento = 5;
                        break;
                }
            }
            else {
                if (cantidadDeLamparas < 3) {
                    descuento = 0;
                }
                else {
                    descuento = 50;
                }
            }
        }
    }

    precioFinal = precioBruto - precioBruto * (descuento / 100);

    if (precioFinal > 120) {
        interes_IIBB = precioFinal * 0.1;
        alert(`Usted pago ${interes_IIBB} de IIBB.`);
    }
    document.getElementById('txtIdprecioDescuento').value = precioFinal;
}


/*    switch (cantidadDeLamparas) {
        case 5:
            if (marcaSeleccionada == "ArgentinaLuz") {
                descuento = 40;
            }
            else {
                descuento = 30;
            }
            break;
        case 4:
            if (marcaSeleccionada == "ArgentinaLuz" || marcaSeleccionada == "FelipeLamparas") {
                descuento = 25;
            }
            else {
                descuento = 20;
            }
            break;
        case 3:
            if (marcaSeleccionada == "ArgentinaLuz") {
                descuento = 15;
            }
            else {
                if (marcaSeleccionada == "FelipeLamparas") {
                    descuento = 10;
                }
                else {
                    descuento = 5;
                }

            }
            break;
        default:
            if (cantidadDeLamparas < 3) {
                descuento = 0;
            }
            else{
                descuento = 50;
            }
            break;
    }

    precioFinal = precioBruto - precioBruto * (descuento / 100);

    if (precioFinal > 120) {
        interes_IIBB = precioFinal * 0.1;

        alert(`Usted pago ${interes_IIBB} de IIBB.`);
    }
    document.getElementById('txtIdprecioDescuento').value = precioFinal;
} */