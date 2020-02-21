function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numeroIngresado=0; 
	var respuesta='si';


	while(respuesta=="si")
		{
			contador+1;
			numeroIngresado=prompt("ingrese un numero");
            numeroIngresado=parseInt(numeroIngresado);

			if (numeroIngresado<0)
		 	{
		 		negativo=negativo*numeroIngresado;
		 		
		    }
			else 
			{
				positivo=positivo+numeroIngresado;

			}
			  respuesta=prompt("Ingrese si para continuar"); 






		}




document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN