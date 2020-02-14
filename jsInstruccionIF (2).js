function mostrar()
{
var edad; 
//tomo la edad  

edad=document.getElementById('edad').value;
edad=parseInt(edad);
  if(edad>17)
{
   alert("es mayor");

}
else(edad<18)
{
   alert("es menor");

}

}//FIN DE LA FUNCIÓN