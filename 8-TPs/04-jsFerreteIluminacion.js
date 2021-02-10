/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    //variables
 	let cantLamparas;
    let marca;
    let precio;
    let descuento;
    let precioFinal;
    let precioLampara = 35;
    

    //obtencion de datos
    cantLamparas = parseInt(document.getElementById('txtIdCantidad').value);
    marca = document.getElementById('Marca').value;

    //condicional if 
    if (cantLamparas > 5)
    {
        precio = (cantLamparas * precioLampara)* 0.50;
        descuento = (cantLamparas * precioLampara) - precio;
        if(descuento > 120)
        {
            impuesto = (descuento * 0.10);
            precioFinal = descuento + (descuento * 0.10)

            alert(`IIBB Usted pago ${impuesto}`);
        }
        document.getElementById('txtIdprecioDescuento').value = precioFinal;
    }
    else if(cantLamparas == 5)
    {
        if (marca == "ArgentinaLuz")
        {
            precio = (cantLamparas * precioLampara)* 0.40;
            descuento =(cantLamparas * precioLampara) - precio;
        }
        else
        {
            precio = (cantLamparas * precioLampara)* 0.30;
            descuento =(cantLamparas * precioLampara) - precio;
        }
        document.getElementById('txtIdprecioDescuento').value = descuento;
    }
    else if(cantLamparas == 4)
    {
        if (marca == "ArgentinaLuz" || marca == "FelipeLamparas")
        {
            precio = (cantLamparas * precioLampara)* 0.25;
            descuento =(cantLamparas * precioLampara) - precio;
        }
        else
        {
            precio = (cantLamparas * precioLampara)* 0.20;
            descuento =(cantLamparas * precioLampara) - precio;
        }   
        document.getElementById('txtIdprecioDescuento').value = descuento;
    }
    else if(cantLamparas == 3)
    {
        if (marca == "ArgentinaLuz")
        {
            precio = (cantLamparas * precioLampara)* 0.15;
            descuento =(cantLamparas * precioLampara) - precio;
        }
        else if(marca == "FelipeLamparas")
        {
            precio = (cantLamparas * precioLampara)* 0.10;
            descuento =(cantLamparas * precioLampara) - precio;
        }
        else 
        {
            precio = (cantLamparas * precioLampara)* 0.5;
            descuento =(cantLamparas * precioLampara) - precio;
        }          
        document.getElementById('txtIdprecioDescuento').value = descuento;
    }
    precioDescuento = document.getElementById('txtIdprecioDescuento').value;
}
