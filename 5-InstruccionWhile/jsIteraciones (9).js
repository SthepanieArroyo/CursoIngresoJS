function mostrar()
{

	var contador=0;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	// declarar variables
	
	var respuesta='si';

	while(respuesta=='si')
	{  
		    contador++;
			numeroIngresado=prompt("ingrese un numero");
            numeroIngresado=parseInt(numeroIngresado);
            while(isNaN(numeroIngresado))
            	{  

            	numeroIngresado=prompt("error solo numero"); 
            	numeroIngresado=parseInt(numeroIngresado)

                 }
	
            if(contador==1)
            {
            	numeroMinimo= numeroIngresado;
                numeroMaximo= numeroIngresado;
            }
            else
            { 
            	if(numeroIngresado<numeroMinimo)
                { 
                 numeroMinimo=numeroIngresado

                }

                if(numeroIngresado>numeroMaximo)
                { 
                 numeroMaximo=numeroIngresado

                }


            



           
            }

            respuesta=prompt("Ingrese si para continuar");


}




}//FIN DE LA FUNCIÓN