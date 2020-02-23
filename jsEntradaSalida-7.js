/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var primerNumero; 
	var segundoNumero; 
	var sumadenumeros; 

	primerNumero=document.getElementById('numeroUno').value; 
	primerNumero=parseInt(primerNumero);

	segundoNumero=document.getElementById('numeroDos').value;
	segundoNumero=parseInt(segundoNumero); 

	sumadenumeros= primerNumero+segundoNumero;
	alert("la suma es de "+sumadenumeros);
	
}

function restar()
{
	var primerNumero; 
	var segundoNumero; 
	var restadenumeros; 

	primerNumero=document.getElementById('numeroUno').value; 
	primerNumero=parseInt(primerNumero);

	segundoNumero=document.getElementById('numeroDos').value;
	segundoNumero=parseInt(segundoNumero); 

	restadenumeros= primerNumero-segundoNumero;
	alert("la resta es de "+restadenumeros);
	
	
}

function multiplicar()
{ 

	var primerNumero; 
	var segundoNumero; 
	var multiplicaciondenumeros; 

	primerNumero=document.getElementById('numeroUno').value; 
	primerNumero=parseInt(primerNumero);

	segundoNumero=document.getElementById('numeroDos').value;
	segundoNumero=parseInt(segundoNumero); 

	multiplicaciondenumeros= primerNumero*segundoNumero;
	alert("la multiplicacion es de "+multiplicaciondenumeros);
		
}

function dividir()
{


	var primerNumero; 
	var segundoNumero; 
	var divisiondenumeros; 

	primerNumero=document.getElementById('numeroUno').value; 
	primerNumero=parseInt(primerNumero);

	segundoNumero=document.getElementById('numeroDos').value;
	segundoNumero=parseInt(segundoNumero); 

	divisiondenumeros= primerNumero/segundoNumero;
	alert("la división es de "+divisiondenumeros
		);
	
	
}

