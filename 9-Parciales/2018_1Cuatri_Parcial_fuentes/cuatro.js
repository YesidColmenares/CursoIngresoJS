function mostrar() {
    let numeroUnoIngresado;
    let numeroDosIngresado;
    let operacion;
    let mensaje;

    mensaje = "";

    numeroUnoIngresado = parseInt(prompt("Ingresa el primer numero"));
    numeroDosIngresado = parseInt(prompt("Ingresa el segundo numero"));

    if (numeroUnoIngresado == numeroDosIngresado) {
        operacion = numeroUnoIngresado + "" + numeroDosIngresado;
    }
    else {
        if (numeroUnoIngresado > numeroDosIngresado) {
            operacion = numeroUnoIngresado - numeroDosIngresado;
        }
        else {
            operacion = numeroUnoIngresado + numeroDosIngresado;
            if (operacion > 10) {
                mensaje = `la suma es ${operacion} y supero el 10`;
            }
        }
    }

    alert(operacion + " " + mensaje);
}
