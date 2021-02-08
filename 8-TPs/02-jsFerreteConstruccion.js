/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    //variables
    let largo;
    let ancho;
    let perimetro;
    let total;
    let respuesta;

    //constante
    const CANT_ALAMBRE = 3;

    //obtencion de datos
    largo = document.getElementById('txtIdLargo').value;
    ancho = document.getElementById('txtIdAncho').value;
    
    //parseo
    largo = parseFloat(largo);
    ancho = parseFloat(ancho);

    //operacion hayar el perimetro
    perimetro = (ancho + largo) * 2;

    //operacion cuanto alambre en total
    total = perimetro * CANT_ALAMBRE;
    
    //Texto de respuesta
    respuesta = `Se deben comprar ${total} metros de alambre`;

    //mostrar en pantalla
    alert(respuesta);
}
function Circulo () 
{
    //variables
	let radio;
    let total;
    let diametro;
    let respuesta;

    //constantes
    const NUMERO_PI = 3.1415;
    const CANT_ALAMBRE = 3;
    const DIAMETRO = 2;

    //obtencion de los datos
    radio = document.getElementById('txtIdRadio').value;

    //parseo a tipo float
    radio = parseFloat(radio);

    //operacion sacando el diametro de la circunferencia 
    diametro = (radio * DIAMETRO);

    //operacion sacando el perimetro
    perimetro = diametro * NUMERO_PI;

    //operacion sacando los metros de alambre
    total = perimetro * CANT_ALAMBRE;

    //texto de respuesta 
    respuesta = `Se deben comprar ${total} metros de alambre`;

    //mostrar en pantalla 
    alert(respuest);

}
function Materiales () 
{
	//variables
    let largo;
    let ancho;
    let perimetro;
    let total;
    let respuesta;

    //constante
    const CEMENTO = 2;
    const CAL = 3;

    //obtencion de datos
    largo = document.getElementById('txtIdLargo').value;
    ancho = document.getElementById('txtIdAncho').value;
    
    //parseo
    largo = parseFloat(largo);
    ancho = parseFloat(ancho);

    //operacion hayar el perimetro
    perimetro = (ancho + largo) * 2;

    //operacion cuanto alambre en total
    total = perimetro * CANT_ALAMBRE;
    
    //Texto de respuesta
    respuesta = `Se deben comprar ${total} metros de alambre`;

    //mostrar en pantalla
    alert(respuesta);
}