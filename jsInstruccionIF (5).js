function mostrar()
{
  var edad; 
//tomo la edad  

edad=document.getElementById('edad').value;
edad=parseInt(edad);
  if(edad>17 || edad<13)
    {
    	alert("no adolescentes");
 }
  


}//FIN DE LA FUNCIÓN