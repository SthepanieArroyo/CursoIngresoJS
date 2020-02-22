/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'mostrar'
*/
function mostrar() {
	var nombre;

	nombre = document.getElementById('elNombre');
	alert(nombre);
	document.getElementById('elNombre').value= "Juan Pablo";
}

