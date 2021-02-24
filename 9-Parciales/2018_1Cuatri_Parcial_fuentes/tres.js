function mostrar()
{
    let precioIngresado;
    let porcentajeDescuentoIngresado;
    let precioFinal;

    precioIngresado = parseInt(prompt("Ingresa el precio"));
    porcentajeDescuentoIngresado = parseInt(prompt("Ingresa el porcentaje de descuento"));

    precioFinal = precioIngresado - (precioIngresado * porcentajeDescuentoIngresado/100);

    document.getElementById('elPrecioFinal').value = precioFinal.toFixed(2);

    

}
