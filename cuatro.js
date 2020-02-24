{ 

	var primerNumero; 
	var segundoNumero;
	var resultadoDeResta; 
	var resultadoDeSuma;

	primerNumero=prompt("Ingrese el primer numero"); 
	segundoNumero=prompt("Ingrese el segundo numero"); 

	primerNumero=parseInt(primerNumero);
	segundoNumero=parseInt(segundoNumero);

	if(primerNumero==segundoNumero)
	{
		alert(primerNumero+""+segundoNumero);    
	}

	else {
		if(primerNumero>segundoNumero)
		{
			resultadoDeResta=primerNumero-segundoNumero;
			resultadoDeResta=parseInt(resultadoDeResta);
			alert("la resta es de "+resultadoDeResta);
		}

		else{
			if(primerNumero<segundoNumero)
			{

				resultadoDeSuma=primerNumero+segundoNumero;
				if(resultadoDeSuma>10)
				{
					alert("la suma es de "+resultadoDeSuma+ " y supero el 10");
				}
			}






			else
			{ 

				resultadoDeSuma=primerNumero+segundoNumero;
				resultadoDeSuma=parseInt(resultadoDeSuma);
				alert("la suma es de "+resultadoDeSuma);


			}


		}







	}




	

}
