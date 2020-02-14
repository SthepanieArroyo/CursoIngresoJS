function mostrar()

{
  var edad; 
//tomo la edad  

edad=document.getElementById('edad').value;
edad=parseInt(edad);  

if(edad<13)
 {
    	alert("es menor");
 }
 if(edad>17)
  {
    	alert("es mayor");
 }
 else
 	 {
    	alert("es adolescente");
 }



}//FIN DE LA FUNCIÓN