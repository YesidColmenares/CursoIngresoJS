/*
Yesid Colmenares
Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
	Tipo validad("arena";"cal";"cemento") 
	Cantidad de bolsas,
	Precio por bolsa (más de cero ),
	Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
	Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.	
				El importe total a pagar , bruto sin descuento y...
				el importe total a pagar con descuento(solo si corresponde)
				Informar el tipo con mas cantidad de bolsas.
				El tipo mas caro*/

function mostrar()
{
  let tipoIngresado;
  let cantidadBolsasIngresado;
  let precioPorBolsaIngresado;
  let contadorBolsaArena;
  let contadorBolsaCal;
  let contadorBolsaCemento;

  contadorBolsaArena = 0;
  contadorBolsaCal = 0;
  contadorBolsaCemento = 0;
  
  do
  {
    tipoIngresado = prompt("Ingrese el tipo");
    while(isNaN(tipoIngresado) == false || tipoIngresado != "arena" && tipoIngresado != "cal" && tipoIngresado != "cemento")
    {
      tipoIngresado = prompt("Error,Ingrese el tipo");
    }

    cantidadBolsasIngresado = prompt("ingresa la cantidad de bolsas");
    cantidadBolsasIngresado = parseInt(cantidadBolsasIngresado);
    while(isNaN(cantidadBolsasIngresado) == true)
    {
      cantidadBolsasIngresado = prompt("Error,ingresa la cantidad de bolsas");
      cantidadBolsasIngresado = parseInt(cantidadBolsasIngresado);
    }

    precioPorBolsaIngresado = prompt("Ingresa el precio de la bolsa");
    precioPorBolsaIngresado = parseInt(precioPorBolsaIngresado);
    while(isNaN(precioPorBolsaIngresado) == true && precioPorBolsaIngresado < 0)
    {
      precioPorBolsaIngresado = prompt("Error,ingrese el precio de la bolsa");
      precioPorBolsaIngresado = parseInt(precioPorBolsaIngresado);
    }

    switch(tipoIngresado)
		{
			case "arena":
				contadorBolsaArena++;
				acumuladorBolsaArena+= cantidad;
				break;
			case "cal":
				contadorBolsaCal++;
				acumuladorBolsaCal+= cantidadIngresada;
				break;
			case "cemento":
				contadorBolsaCemento++;
				acumuladorBolsaCemento+= cantidadIngresada;
		}






  }while();
}
