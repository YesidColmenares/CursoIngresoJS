
function mostrar()
{
    let anchoIngresado;
    let largoIngresado;
    let perimetro;

    anchoIngresado = parseInt(prompt("Ingresa el ancho del rectangulo"));
    largoIngresado = parseInt(prompt("Ingresa el largo del rectangulo"));
    
    perimetro = (anchoIngresado * 2) + (largoIngresado * 2);

    alert(perimetro);

}
