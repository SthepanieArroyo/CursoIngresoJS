function mostrar()
{
//tomo la edad  
var edad; 

edad=document.getElementById('edad').value;
edad=parseInt(edad); 

if (edad<13)
{

	alert("niño");

} 

else{

	if(edad<=17)
	{
		alert("Es adolescente");

	} 
	else {
		alert("adulto");
	}



	}

	








}//FIN DE LA FUNCIÓN