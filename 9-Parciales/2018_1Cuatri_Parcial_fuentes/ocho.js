function mostrar()
{
    let letraIngresada;
    let numeroIngresado;
    let cantidadNumerosPares;
    let cantidadNumerosImpares;
    let cantidadPositivos;
    let cantidadNegativos;
    let contadorPositivos;
    let cantidadCeros;
    let banderaDelPrimero;
    let numeroMaximo;
    let numeroMinimo;
    let mensaje;
    
    cantidadNumerosPares = 0;
    cantidadNumerosImpares = 0;
    cantidadPositivos = 0;
    cantidadNegativos = 0;
    contadorPositivos = 0;
    cantidadCeros = 0;
    banderaDelPrimero = true;

    do
    {
        numeroIngresado = parseInt(prompt("Ingresa un numero entre el -100 y 100"));
        if(numeroIngresado >= -100 && numeroIngresado <= 100)
        {
            letraIngresada = prompt("Ingresa una letra");
            if(numeroIngresado % 2)
            {
                cantidadNumerosPares ++;
            }
            else
            {
                cantidadNumerosImpares ++;
            }
            if(numeroIngresado > 0)
            {
                contadorPositivos++;
                cantidadPositivos += numeroIngresado;
            }
            else
            {
                if(numeroIngresado < 0)
                {
                    cantidadNegativos += numeroIngresado;
                }
                else
                {
                    cantidadCeros++;
                }
            }
            if(numeroIngresado > numeroMaximo || banderaDelPrimero == true)
            {
               numeroMaximo = numeroIngresado;
               
            }
            if(numeroIngresado < numeroMinimo || banderaDelPrimero == true)
            {
                
                banderaDelPrimero == false;
            }
        }
        respuestaEstadoIngresado = prompt("escriba 's' si decea continuar de lo contraio 'n'");
    }while(respuestaEstadoIngresado == "s");

    promedio = (cantidadPositivos / contadorPositivos).toFixed(2);

    document.write(`A. Cantidad numeros pares: ${cantidadNumerosPares} <br>
                    B. Cantidad numeros impares: ${cantidadNumerosImpares} <br>
                    C. Cantidad ceros es: ${cantidadCeros} <br>
                    D. El promedio de todos los numeros positivos ingresados es: ${promedio} <br>
                    E. La suma de todos los numeros negativos es: ${cantidadNegativos} <br>
                    ${mensaje}`);


}
