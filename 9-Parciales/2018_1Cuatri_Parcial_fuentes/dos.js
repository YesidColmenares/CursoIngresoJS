function mostrar()
{
    let nombreIngresado;
    let localidadIngresada;
    let mensaje;

    nombreIngresado = document.getElementById('elNombre').value;
    localidadIngresada = document.getElementById('laLocalidad').value;
    
    mensaje = `usted es ${nombreIngresado} y vive en la localidad de ${localidadIngresada}`;

    alert(mensaje);
}
