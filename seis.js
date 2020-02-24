function mostrar()
{

	var hora; 
	hora=document.getElementById('laHora').value;
	hora=parseInt(hora);

	

	switch(hora)
	{
		case 1:
		if(hora>5 || hora<12)
		{
			alert("es de mañana");
        }


		break;

		case 2:

		if(hora>11 || hora<20)
		{
			alert("es de tarde");
		}
		break;

		case 3: 

		if(hora>19 ||hora<25)
		{
			alert("Es de noche. A dormir!");
		}
		break;


























	}












}








