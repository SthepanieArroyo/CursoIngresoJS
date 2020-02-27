function mostrar()
{
	var hora; 
	hora=document.getElementById('laHora').value;
	hora=parseInt(hora);
	

	if(isNaN(hora))
	{ 
		alert("hora no valida");
	}

	else{

		switch(true)
		{
			case hora>5 && hora < 12:
			alert("es de mañana");
			break;

			case hora>11 && hora<20:
			alert("es de tarde");
			break;

			default:

			if(hora<24)
			{
				alert("es de noche, a dormir");
			}

			break;



		}


	}



}








