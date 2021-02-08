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
    let total_Alambre;
    let respuesta;

    //constante
    const CANT_ALAMBRE = 3;
    const NUMERO_DOS = 2;

    //obtencion de datos
    largo = document.getElementById('txtIdLargo').value;
    ancho = document.getElementById('txtIdAncho').value;
    
    //parseo
    largo = parseFloat(largo);
    ancho = parseFloat(ancho);

    //operacion hayar el perimetro
    perimetro = (ancho + largo) * NUMERO_DOS;

    //operacion cuanto alambre en total
    total_Alambre = perimetro * CANT_ALAMBRE;
    
    //Texto de respuesta
    respuesta = `Se deben comprar ${total_Alambre} metros de alambre`;

    //mostrar en pantalla
    alert(respuesta);
}
function Circulo () 
{
    //variables
	let radio;
    let diametro;
    let total_Alambre;
    let respuesta;

    //constantes
    const NUMERO_PI = 3.1415;
    const CANT_ALAMBRE = 3;
    const NUMERO_DOS = 2;

    //obtencion de los datos
    radio = document.getElementById('txtIdRadio').value;

    //parseo a tipo float
    radio = parseFloat(radio);

    //operacion obteniendo el diametro a partir del radio
    diametro = (radio * NUMERO_DOS);

    //operacion obteniendo el perimetro
    perimetro = diametro * NUMERO_PI;

    //operacion obteniendo los metros de alambre
    total_Alambre = perimetro * CANT_ALAMBRE;

    //texto de respuesta 
    respuesta = `Se deben comprar ${total_Alambre} metros de alambre`;

    //mostrar en pantalla 
    alert(respuesta);

}
function Materiales () 
{
	//variables
    let largo;
    let ancho;
    let cemento_Total;
    let cal_Total;
    let total_Cuadros;
    let respuesta;

    //constante
    const CANT_CEMENTO = 2;
    const CANT_CAL = 3;

    //obtencion de datos
    largo = document.getElementById('txtIdLargo').value;
    ancho = document.getElementById('txtIdAncho').value;
    
    //parseo
    largo = parseInt(largo);
    ancho = parseInt(ancho);

    //operacion para calcular los cuadros en total del terreno rectangular 
    total_Cuadros = largo * ancho;

    //operacion para calcular la cantidad de cemento a utilizar
    cemento_Total = total_Cuadros * CANT_CEMENTO;
    
    //operacion para calcular la cantidad de cal a utilizar 
    cal_Total = total_Cuadros * CANT_CAL;

    //Texto de respuesta
    respuesta = `Se deben comprar ${cemento_Total} bolsas de cemento y ${cal_Total} bolsas de cal para el area indicado`;

    //mostrar en pantalla
    alert(respuesta);
}