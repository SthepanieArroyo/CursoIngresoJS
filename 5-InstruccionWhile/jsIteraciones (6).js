function mostrar()
{

	var contador;
	var acumulador;
	var numeroIngresado; 

    contador=0;
    acumulador=0;

	contador=parseInt(contador); 
	acumulador=parseInt(acumulador); 

	contador++;
	   		numeroIngresado=prompt("ingrese numero");
	   	    contador=parseInt(contador); 
	        numeroIngresado=parseInt(numeroIngresado);
	        acumulador=acumulador+numeroIngresado;


   
	   while(contador<5)
	   	{
	   		contador++;
	   		numeroIngresado=prompt("ingrese numero");
	   	    contador=parseInt(contador); 
	        numeroIngresado=parseInt(numeroIngresado);
	        acumulador=acumulador+numeroIngresado;  
         
        }





document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN