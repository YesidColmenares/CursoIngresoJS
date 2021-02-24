function mostrar() {
    let notaIngresada;
    let sexoIngresado;
    let promedio;
    let cantidadVarones;
    let mensaje;
    let contador;
    let acumulador;
    let notaBaja;
    let banderaDelPrimero;


    contador = 0;
    acumulador = 0;
    notaBaja = 0;
    cantidadVarones = 0;
    banderaDelPrimero = true;
    
    do{
        notaIngresada = parseInt(prompt("Ingresa una nota entre el 0 y el 10"));
        if (notaIngresada > -1 && notaIngresada < 11) 
        {
            sexoIngresado = prompt("Ingresa tu sexo, f o m");
            contador++;
            acumulador += notaIngresada;
            if (notaIngresada < notaBaja || banderaDelPrimero == true) 
            {
                notaBaja = notaIngresada;
                mensaje = `B. La nota mas baja es: ${notaBaja}, y su sexo es: ${sexoIngresado}\n`;
                banderaDelPrimero = false;
            }
            if (sexoIngresado == "m" && notaIngresada > 5) 
            {
                cantidadVarones++;
            }
        }
    }while (contador < 5);

    promedio = (acumulador / contador).toFixed(2);
    alert(`A. El promedio de las notas es: ${promedio}\n` + mensaje + `C. la cantidad de varones que su nota fue mayor o igual a 6 es: ${cantidadVarones}`);
}
