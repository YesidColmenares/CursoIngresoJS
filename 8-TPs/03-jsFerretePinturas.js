/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    //variables
	let temperatura_Fahrenheit;
    let total; 
    let respuesta;

    //constantes
    const EQUIVALENTE_FAHRENHEIT = 32;
    const NUMERO_CINCO = 5;
    const NUMERO_NUEVE = 9;
    
    //obtencion de la temperatura en Fahrenheit
    temperatura_Fahrenheit = document.getElementById('txtIdTemperatura').value;

    //parseo a float
    temperatura_Fahrenheit = parseFloat(temperatura_Fahrenheit);

    //conversion a Centigrados
    total = (temperatura_Fahrenheit - EQUIVALENTE_FAHRENHEIT) * NUMERO_CINCO / NUMERO_NUEVE;

    //texto en pantalla
    respuesta = `${temperatura_Fahrenheit} Fahrenheit son ${total.toFixed(2)} centigrados`;

    //alert con la respuesta 
    alert(respuesta);

}

function CentigradosFahrenheit () 
{
	//variables
	let temperatura_Centigrados;
    let total; 
    let respuesta;

    //constantes
    const EQUIVALENTE_FAHRENHEIT = 32;
    const NUMERO_CINCO = 5;
    const NUMERO_NUEVE = 9;
    
    //obtencion de la temperatura en Centigrados
    temperatura_Centigrados = document.getElementById('txtIdTemperatura').value;

    //parseo a float
    temperatura_Centigrados = parseFloat(temperatura_Centigrados);

    //conversion a Centigrados
    total = (temperatura_Centigrados * NUMERO_NUEVE/NUMERO_CINCO) + EQUIVALENTE_FAHRENHEIT;

    //texto en pantalla
    respuesta = `${temperatura_Centigrados} Centigrados son ${total.toFixed(2)} Fahrenheit`;

    //alert con la respuesta 
    alert(respuesta);
}
