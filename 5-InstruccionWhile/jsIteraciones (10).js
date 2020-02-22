function mostrar()
{

	var contador;
	var respuesta;
	var nombreAlumno;
	var notaAlumno;
	var sexoAlumno;
	var edadAlumno; 
	var acumulador;
	var promedioNotas;
	var mejorNota;
	var peorNota;


	acumulador=0;
	contador=0;
	respuesta="si";
	//declarar contadores y variables 
	

	while(respuesta=="si")
     {
     	contador=contador+1
     	nombreAlumno=prompt("ingrese su nombre");                                  
     	notaAlumno=prompt("ingrese el"+contador+"ºnumero :");
     	notaAlumno=parseInt(notaAlumno);
     	while(notaAlumno<0 || notaAlumno>10 )
     		{
     			notaAlumno=prompt("error, reingrese el "+contador+"º numero");
     			notaAlumno=parseInt(notaAlumno);

            }


















            sexoAlumno=prompt("Ingrese f o m");
            while( sexoAlumno!="f"&& sexoAlumno!="m" )
            	{
     			sexoAlumno=promp("ingrese f o m");
            }



            while(edadAlumno<0 || edadAlumno>100 )
     		{
     			edadAlumno=prompt("error, reingrese el "+contador+"º edad");
     			edadAlumno=parseInt(edadAlumno);

            }
             
             while()
             {
             	
             }


            






         acumulador=acumulador+notaAlumno;
     	respuesta=prompt("si para seguir");
		
	 }

	 console.log("contador: "+contador);
	 console.log("acumulador: "+acumulador); //fin while

	 promedioNotas=acumulador/


	 

}//FIN DE LA FUNCIÓN