function mostrar() {
    let planeta;

    planeta = prompt("Ingresa un planeta del sistema solar");

    switch (planeta) 
    {
        case "venus":
        case "mercurio":
            mensaje = "Aca hace calor";
            break;
        case "tierra":
            mensaje = "Aca vivimos";
            break;
        case "marte":
        case "jupiter":
        case "saturno":
        case "urano":
        case "neptuno":
            mensaje = "Aca hace mas frio";
            break;
        default:
            mensaje = "Este planeta no es valido";
            break;
    }
    alert(mensaje);
}
