function mostrar()
{

var nombre; 
var personas; 
var diasDeEstadia; 
var FormaDePago; 
var respuesta; 
var maximaCantidadDePersonas
var maximaCantidadDePersonasHuesped; 
var maximoDeDias;
var maximoDiasCantidadpersonas;
var contadorReservas; 
var contadorEfec; 
var contadorQr; 
var ContadorCredito; 
var formaDepagoMasUsada; 
var acumuladorDeDias;
var promedio; 




respuesta="si";

contadorReservas=0;
contadorEfec=0; 
contadorQr=0; 
ContadorCredito=0; 
acumuladorDeDias=0; 



	
while(respuesta=="si")
{   


    contadorReservas++;
	//contador++; 

    nombre=prompt("Ingrese el nombre del huesped"); 
    while(!isNaN(nombre))
    {
    	nombre=prompt("Ingrese un nombre sin numeros"); 


    }

    personas=prompt("Ingrese la cantidad de personas");
    personas=parseInt(personas);  
    while(personas<0 || isNaN(personas))
    {
    	personas=prompt(" Ingrese la cantidad correcta"); 
        personas=parseInt(personas);
    }

    diasDeEstadia=prompt("Ingrese los dias que se hospedaron");
    diasDeEstadia=parseInt(diasDeEstadia); 

   while(diasDeEstadia<0 || isNaN(diasDeEstadia))
   {
   	diasDeEstadia=prompt("Ingrese los dias que se hospedaron");
   diasDeEstadia=parseInt(diasDeEstadia); 
   } 

   FormaDePago=prompt("Ingrese la forma de pago"); 
   while(FormaDePago!= "efectivo" && FormaDePago!="credito" && FormaDePago!="qr")
   {
    FormaDePago=prompt("Ingrese efectivo; credito o qr"); 
   }

   if(contadorReservas==1 || maximaCantidadDePersonas<personas)
   {

   	maximaCantidadDePersonas=personas; 
   	maximaCantidadDePersonasHuesped=nombre; 
   }

   if(contadorReservas==1 || maximoDeDias<diasDeEstadia)
   {

   	maximoDeDias=diasDeEstadia; 
   	maximaCantidadDePersonasHuesped=nombre; 
   }

   switch(FormaDePago)
   {
   	case "qr": 
   	contadorQr++; 
   	break; 
   	case "efectivo": 
   	contadorEfec++; 
   	break; 
   	
   	default:
   	   	ContadorCredito++; 

   }
   acumuladorDeDias=acumuladorDeDias+diasDeEstadia;






respuesta=prompt("si para seguir"); 
	

}//fin while
promedio=acumuladorDeDias/contadorReservas; 

if(contadorQr>contadorEfec && contadorQr>ContadorCredito)
{
   formaDepagoMasUsada="qr";
}

else{
	if(contadorEfec>ContadorCredito)

	{
		formaDepagoMasUsada="efectivo"
	}
	else{
		formaDepagoMasUsada="credito"
	}



}


document.write("el huesped que trajo mas personas fue: "+maximaCantidadDePersonasHuesped+ "</br>");
document.write("La cantidad de personas que se quedaron mas dia fueron: "+maximoDiasCantidadpersonas+"</br>");
document.write("la forma de pago mas utilizada es "+formaDepagoMasUsada+ "</br>");
document.write("el promedio de cantidad de dias por reserva es: "+promedio+"</br>" );





}
