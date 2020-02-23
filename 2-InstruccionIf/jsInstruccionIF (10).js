function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
var notaRandom; 
notaRandom=Math.floor(Math.random() * 10)+1;
console.log(notaRandom);

if(notaRandom>8)
{
	alert("Excelente");
}

else 
{
  if(notaRandom<4)
  {
  	alert("vamos, la proxima se puede");

  } else
  {
  	alert("aprobaste");
  }

}


}//FIN DE LA FUNCIÓN