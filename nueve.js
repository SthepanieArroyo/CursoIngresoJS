function mostrar()
{
	var nombreEstudiante; 
	var edadEstudiante;
	var sexoEstudiante;
	var NotaFinalEstudiante;
	var respuesta;
	var contador;
	var contadorVaronesAprobados;
	var acumuladorMenores;
	var contadorMenores;
	var promedioNotasMenores;
	var acumuladorAdolecentes;
	var contadorAdolecentes; 
	var promedioAdolecentes;
	var acumuladorMayores;
	var contadorMayores;
	var promedioMayores;
	var acumuladorMujeres;
	var contadorMujeres;
	var promedioMujeres;
	var acumuladorVarones;
	var contadorVarones;
	var promedioVarones;

	respuesta="si";
	contador=0;
	contadorVaronesAprobados=0;
	contadorMenores=0;
	acumuladorMenores=0;
	
	acumuladorAdolecentes=0;
	contadorAdolecentes=0;
	contadorMayores=0;
	acumuladorMayores=0;
	contadorMujeres=0;
	acumuladorMujeres=0;
	contadorVarones=0;
	acumuladorVarones=0;





	while(respuesta=="si")
	{
		respuesta=prompt("si para seguir");
		contador++;

		if(respuesta != "si")
		{
			break;
		}

		nombreEstudiante=prompt("ingrese el nombre del "+contador+" ° estudiante");

		edadEstudiante=prompt("ingrese la edad");
		edadEstudiante=parseInt(edadEstudiante);
		while(edadEstudiante<0 || edadEstudiante>110)
		{
			edadEstudiante=prompt(" ingrese una edad correcta");
			edadEstudiante=parseInt(edadEstudiante);

		}

		sexoEstudiante=prompt("ingrese el sexo del estudiante");
		while (sexoEstudiante!="f" && sexoEstudiante!="m")
		{
			sexoEstudiante=prompt("ingrese f o m");
		}

		NotaFinalEstudiante=prompt("ingrese la nota final del estudiante");


		NotaFinalEstudiante=parseInt(NotaFinalEstudiante)
		while(NotaFinalEstudiante<1 || NotaFinalEstudiante>10)
		{
			NotaFinalEstudiante=prompt("ingrese una nota del 1 al 10");
		}

		if(sexoEstudiante== "m" && NotaFinalEstudiante>5 )
		{
			contadorVaronesAprobados++;

		}

		if(edadEstudiante<15)
		{
			contadorMenores++;
			acumuladorMenores=acumuladorMenores+NotaFinalEstudiante;

			promedioNotasMenores=acumuladorMenores/contadorMenores;


		}  else{ 

			if(edadEstudiante>14 && edadEstudiante<18)
			{
				contadorAdolecentes++;
				acumuladorAdolecentes=acumuladorAdolecentes+NotaFinalEstudiante;
				promedioAdolecentes=acumuladorAdolecentes/contadorAdolecentes;
			}

			else{  



				contadorMayores++;
				acumuladorMayores=acumuladorMayores+NotaFinalEstudiante;
				promedioMayores=acumuladorMayores/contadorMayores;
			}
		}
		


			
		        


	if(sexoEstudiante== "f")
	{
		contadorMujeres++;
		acumuladorMujeres=acumuladorMujeres+NotaFinalEstudiante;
		promedioMujeres=acumuladorMujeres/contadorMujeres;

	}else {
		contadorVarones++;
		acumuladorVarones=acumuladorVarones+NotaFinalEstudiante;
		promedioVarones=acumuladorVarones/contadorVarones;
	}



}
document.write("la cantidad de varones aprobados es de "+contadorVaronesAprobados+"</br>");
document.write("el promedio de las notas de los menores de edad es de " +promedioNotasMenores+ "</br>");
document.write("el promedio de notas de los adolecentes es de "+ promedioMujeres+"</br>");
document.write("el promedio de nota de los mayores es de" + promedioMayores + "</br>");
document.write("el promedio de nota de hombres es de " + promedioVarones+"</br>");
document.write("el promedio de nota de mujeres es de " + promedioMujeres+ "</br>");




}

