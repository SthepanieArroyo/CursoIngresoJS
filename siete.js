function mostrar()
{

	var notaAlumno; 
	var sexoAlumno; 
	var contador;
	var promedioNotaAlumno;
	var notaMasBaja;
	var sexoNotaMasBaja;
	var mejorNota;
	var contadorVarones;


	
	acumulador=0;
	contador=0;
	respuesta="si";
	contadorVarones=0;
		

	while(respuesta=="si")
	{

		respuesta=prompt("si para seguir");
		contador=contador+1;
		 
		

		notaAlumno=prompt("ingrese la"+contador+"º nota :");
		notaAlumno=parseInt(notaAlumno);
		while(notaAlumno<0 || notaAlumno>10 || isNaN(notaAlumno))
		{
			notaAlumno=prompt("error, reingrese el "+contador+"º numero");
			notaAlumno=parseInt(notaAlumno);

		}

		sexoAlumno=prompt("ingrese el sexo del alumno");
		while(sexoAlumno!="f" && sexoAlumno!="m")
		{
			sexoAlumno=prompt("Ingrese f o m");
		}

		if (notaAlumno>5 && sexoAlumno == "m")
		{
			contadorVarones++;
		}



		if(contador==1)
		{
			mejorNota=notaAlumno;
			notaMasBaja=notaAlumno;

		}
		else{
			if(notaAlumno>mejorNota)
			{
				mejorNota=notaAlumno;
			}

			if(notaAlumno<notaMasBaja)
			{
				notaMasBaja=notaAlumno;
				sexoNotaMasBaja=sexoAlumno;

			}







		}

		acumulador=acumulador+notaAlumno;
		
		promedioNotaAlumno=acumulador/contador;


		while(contador==5)

		{
			alert("El promedio de la notas es de "+promedioNotaAlumno);
			alert("La nota mas baja es "+ notaMasBaja +" y su sexo es  "+sexoNotaMasBaja);
			alert("la cantidad  de varones que ha sacado mas de 6 es"+contadorVarones);


		}
		

	}




}
