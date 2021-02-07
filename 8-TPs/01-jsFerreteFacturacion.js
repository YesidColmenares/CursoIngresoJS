/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    //variables
    let precioUno;
    let precioDos;
    let precioTres;
    let suma;
    let respuesta;

    //obtencion de datos 
    precioUno = document.getElementById('txtIdPrecioUno').value;
    precioDos = document.getElementById('txtIdPrecioDos').value;
    precioTres = document.getElementById('txtIdPrecioTres').value;

    //parseo
    precioUno = parseInt(precioUno);
    precioDos = parseInt(precioDos);
    precioTres = parseInt(precioTres);

    //operacion suma 
    suma = (precioUno + precioDos + precioTres);

    //texto de respuesta 
    respuesta = `La suma de los valores ingresados es: ${suma}`;

    //ventana emergente
    alert(respuesta);
}
function Promedio () 
{
    //variables
    let precioUno;
    let precioDos;
    let precioTres;
    let promedio;
    let respuesta;

    //obtencion de datos 
    precioUno = document.getElementById('txtIdPrecioUno').value;
    precioDos = document.getElementById('txtIdPrecioDos').value;
    precioTres = document.getElementById('txtIdPrecioTres').value;

    //parseo
    precioUno = parseInt(precioUno);
    precioDos = parseInt(precioDos);
    precioTres = parseInt(precioTres);

    //operacion promedio
    promedio = (precioUno + precioDos + precioTres)/3;

    //texto de respuesta 
    respuesta = `El promedio de los valores ingresados es: ${promedio.toFixed(2)}`;

    //ventana emergente
    alert(respuesta);
	
}
function PrecioFinal () 
{
	//variables
    let precioUno;
    let precioDos;
    let precioTres;
    let precioFinal;
    let precioFinalIva;
    let respuesta;

    //constante
    const IVA = 0.21;

    //obtencion de datos 
    precioUno = document.getElementById('txtIdPrecioUno').value;
    precioDos = document.getElementById('txtIdPrecioDos').value;
    precioTres = document.getElementById('txtIdPrecioTres').value;

    //parseo
    precioUno = parseInt(precioUno);
    precioDos = parseInt(precioDos);
    precioTres = parseInt(precioTres);

    //operacion suma 
    precioFinal = (precioUno + precioDos + precioTres);

    //operacion suma iva
    precioFinalIva = precioFinal + (precioFinal * IVA);

    //texto de respuesta 
    respuesta = `El precio final de los valores ingresados es: ${precioFinalIva.toFixed(2)}`;

    //ventana emergente
    alert(respuesta);
}